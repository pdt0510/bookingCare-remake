import React, { Component } from 'react';
import {
 Button,
 Modal,
 ModalHeader,
 ModalBody,
 ModalFooter,
 Col,
 Row,
 Form,
 FormGroup,
 Label,
 Input,
} from 'reactstrap';
import './UserManagerModal.scss';
import EyeComp from '../eyeComp/EyeComp';
import Commons from '../../utilities/Commons';
import * as constVals from '../../utilities';
import * as combinedActions from '../../store/actions';
import { connect } from 'react-redux';

//UserManagerModal1.js
class UserManagerModal extends Component {
 state = {
  open: true,
  isHide: true,
  userForm: {
   email: 'pnTran123332@email.co',
   password: 'PNTran@123',
   firstname: 'Trân',
   lastname: 'Phạm Ngọc',
   address: 'An Giang province',
  },
 };

 componentDidUpdate = (prevProps, prevState) => {
  const { openModal } = this.props;
  if (openModal !== prevProps.openModal) {
   this.toggleModal();
  }
 };

 toggleModal = () => {
  this.setState({
   open: !this.state.open,
  });
 };

 triggerEyes = () => {
  this.setState({
   isHide: !this.state.isHide,
  });
 };

 handleInput = (event) => {
  const { name, value } = event.target;
  this.setState({
   userForm: {
    ...this.state.userForm,
    [name]: value,
   },
  });
 };

 checkFieldValidations = async () => {
  let isValid = true;
  const { userForm } = this.state;
  const { email, password } = constVals.ObjectKeysValues;

  for (const key in userForm) {
   if (userForm[key] === null || userForm[key] === undefined || userForm[key] === '') {
    isValid = false;
   } else if (key === email) {
    isValid = await Commons.checkEmailRegex(userForm[key]);
   } else if (key === password) {
    isValid = await Commons.checkPasswordRegex(userForm[key]);
   }

   if (isValid === false) {
    if (key === password) {
     alert(`Your "password": ${constVals.clientMessages.passwordErr}`);
    } else {
     alert(`Your "${key}" is incorrect`);
    }
    break;
   }
  }
  return isValid;
 };

 handleSubmit = async () => {
  const isValid = await this.checkFieldValidations();

  if (isValid) {
   const { userForm } = this.state;
   const { noErrors, delayTime } = constVals.ObjectKeysValues;
   const { toggleLoadingGif, createAccountFn } = this.props;

   const dataForRequest = {
    email: userForm.email,
    password: userForm.password,
    firstname: userForm.firstname,
    lastname: userForm.lastname,
    address: userForm.address,
   };

   toggleLoadingGif();
   setTimeout(async () => {
    toggleLoadingGif();
    let data = await createAccountFn(dataForRequest);

    if (data.errCode === noErrors) {
     this.resetForm();
    }
   }, delayTime);
  }
 };

 resetForm = () => {
  this.setState({
   open: false,
   isHide: true,
   userForm: {
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    address: '',
   },
  });
 };

 render() {
  const { isHide, open, userForm } = this.state;
  const { email, password, firstname, lastname, address } = userForm;

  // v49xx1
  return (
   <Modal
    isOpen={open}
    className='modal-customized'
   >
    <ModalHeader toggle={this.toggleModal}>Add a new user</ModalHeader>
    <ModalBody>
     <Form>
      <Row>
       <Col md={6}>
        <FormGroup>
         <Label for='exampleEmail'>Email</Label>
         <Input
          type='email'
          name='email'
          value={email}
          onChange={this.handleInput}
          id='exampleEmail'
         />
        </FormGroup>
       </Col>
       <Col md={6}>
        <FormGroup>
         <div className='password-eyes'>
          <Label for='examplePassword'>Password</Label>
          <EyeComp
           isHide={isHide}
           triggerEyes={this.triggerEyes}
          />
         </div>

         <Input
          type={isHide ? 'password' : 'text'}
          name='password'
          value={password}
          onChange={this.handleInput}
          id='examplePassword'
          autoComplete='on'
         />
        </FormGroup>
       </Col>
      </Row>
      <Row>
       <Col md={6}>
        <FormGroup>
         <Label for='firstnameHtmlFor'>Firstname</Label>
         <Input
          type='text'
          name='firstname'
          value={firstname}
          onChange={this.handleInput}
          id='firstnameHtmlFor'
         />
        </FormGroup>
       </Col>
       <Col md={6}>
        <FormGroup>
         <Label for='lastnameHtmlFor'>Lastname</Label>
         <Input
          type='text'
          name='lastname'
          value={lastname}
          onChange={this.handleInput}
          id='lastnameHtmlFor'
         />
        </FormGroup>
       </Col>
      </Row>
      <Row>
       <Col md={12}>
        <FormGroup>
         <Label for='exampleAddress'>Address</Label>
         <Input
          type='text'
          name='address'
          value={address}
          onChange={this.handleInput}
          id='exampleAddress'
         />
        </FormGroup>
       </Col>
      </Row>
     </Form>
    </ModalBody>
    <ModalFooter>
     <Button
      color='secondary'
      onClick={this.toggleModal}
     >
      Cancel
     </Button>
     <Button
      color='primary'
      onClick={this.handleSubmit}
     >
      Create
     </Button>
    </ModalFooter>
   </Modal>
  );
 }
}

const mapStateToProps = ({ userReducer }) => ({
 allUsers: userReducer.allUsers,
});

const mapDispatchToProps = (dispatch) => ({
 createAccountFn: (newData) => dispatch(combinedActions.createAccountFn(newData)),
 toggleLoadingGif: () => dispatch(combinedActions.toggleLoadingGif()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserManagerModal);
