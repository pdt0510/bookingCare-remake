import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap';
import './UserManagerModal.scss';
import Commons from './../../utilities/Commons';
import CustomARow from './../../utilities/CustomARow';
import * as constVals from '../../utilities';
import * as combinedActions from '../../store/actions';
import { connect } from 'react-redux';

//UserManagerModal2.js
class UserManagerModal extends Component {
 state = {
  open: false,
  isUpdate: false,

  userForm: {
   email: 'pnTran123332@email.co',
   password: 'PNTran@123',
   firstname: 'Trân',
   lastname: 'Phạm Ngọc',
   address: 'An Giang province',

   // email: '',
   // password: '',
   // firstname: '',
   // lastname: '',
   // address: '',
  },
 };

 componentDidUpdate = (prevProps, prevState) => {
  const { openModal, isUpdate, userSelected } = this.props;
  if (openModal !== prevProps.openModal) {
   let userForm = null;

   if (isUpdate && userSelected) {
    const noPassword = '***';
    userForm = {
     ...userSelected,
     password: noPassword,
    };
   }
   this.toggleModal(isUpdate, userForm);
  }
 };

 toggleModal = (isUpdate = false, user) => {
  if (isUpdate && user) {
   this.setState({
    open: !this.state.open,
    isUpdate: isUpdate,
    userForm: user,
   });
  } else {
   this.setState({
    open: !this.state.open,
   });
  }
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

 customFieldGroups = (fieldGroups) => {
  return (
   <CustomARow
    isUpdate={this.state.isUpdate}
    fieldGroups={fieldGroups}
    handleInput={this.handleInput}
   />
  );
 };

 checkFieldValidations = async () => {
  let isValid = true;
  const { userForm, isUpdate } = this.state;
  const { email, password } = constVals.ObjectKeysValues;

  for (const key in userForm) {
   if (userForm[key] === null || userForm[key] === undefined || userForm[key] === '') {
    isValid = false;
   } else if (key === email && isUpdate === false) {
    isValid = await Commons.checkEmailRegex(userForm[key]);
   } else if (key === password && isUpdate === false) {
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
   const { userForm, isUpdate } = this.state;
   const { noErrors, delayTime } = constVals.ObjectKeysValues;
   const { toggleLoadingGif, GetAllUsersFn } = this.props;

   if (isUpdate) {
    const { updateAnUserFn, userSelected } = this.props;
    const dataForUpdate = {
     id: userSelected.id,
     ...userForm,
     email: undefined,
     password: undefined, //v52xx3: 'undefined' or //
    };

    toggleLoadingGif();
    setTimeout(async () => {
     toggleLoadingGif();
     let data = await updateAnUserFn(dataForUpdate);

     if (data.errCode === noErrors) {
      await GetAllUsersFn();
      this.resetForm();
     }
    }, delayTime);
   } else {
    const { createAccountFn } = this.props;
    const dataForCreate = {
     ...userForm,
    };

    toggleLoadingGif();
    setTimeout(async () => {
     await toggleLoadingGif();
     let data = await createAccountFn(dataForCreate);

     if (data.errCode === noErrors) {
      await GetAllUsersFn();
      this.resetForm();
     }
    }, delayTime);
   }
  }
 };

 resetForm = () => {
  this.setState({
   open: false,
   isUpdate: false,
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
  const { open, userForm, isUpdate } = this.state;
  const { ObjectKeysValues } = constVals;
  const { email, password, firstname, lastname, address } = userForm;

  // v50xx3
  const userManagerFieldGroups = [
   //email-password
   [
    {
     name: ObjectKeysValues.email,
     type: 'email',
     colNumber: 6,
     value: email,
    },
    {
     name: ObjectKeysValues.password,
     type: 'password',
     colNumber: 6,
     value: password,
    },
   ],

   //firstname-lastname
   [
    {
     name: ObjectKeysValues.firstname,
     type: 'text',
     colNumber: 6,
     value: firstname,
    },
    {
     name: ObjectKeysValues.lastname,
     type: 'text',
     colNumber: 6,
     value: lastname,
    },
   ],

   //address
   [
    {
     name: ObjectKeysValues.address,
     type: 'text',
     value: address,
     colNumber: 12,
    },
   ],
  ];

  // v49xx1
  return (
   <Modal
    isOpen={open}
    className='modal-customized'
   >
    <ModalHeader toggle={this.toggleModal}>Add a new user</ModalHeader>
    <ModalBody>
     <Form>
      {
       this.customFieldGroups(userManagerFieldGroups) //v50xx3
      }
     </Form>
    </ModalBody>
    <ModalFooter>
     <Button
      color='secondary'
      onClick={this.resetForm}
     >
      Cancel
     </Button>
     <Button
      color='primary'
      onClick={this.handleSubmit}
     >
      {isUpdate ? 'Update' : 'Create'}
     </Button>
    </ModalFooter>
   </Modal>
  );
 }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
 GetAllUsersFn: () => dispatch(combinedActions.GetAllUsersFn()),
 updateAnUserFn: (newData) => dispatch(combinedActions.updateAnUserFn(newData)),
 createAccountFn: (newData) => dispatch(combinedActions.createAccountFn(newData)),
 toggleLoadingGif: () => dispatch(combinedActions.toggleLoadingGif()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserManagerModal);
