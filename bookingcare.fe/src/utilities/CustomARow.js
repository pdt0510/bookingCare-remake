import React, { Component } from 'react';
import EyeComp from '../components/eyeComp/EyeComp';
import { Col, Row, FormGroup, Label, Input } from 'reactstrap';
import * as constVals from './constant';

// v50xx3
class CustomARow extends Component {
 state = {
  isHide: true,
 };

 triggerEyes = () => {
  this.setState({
   isHide: !this.state.isHide,
  });
 };

 renderEyes = () => {
  return (
   <EyeComp
    isHide={this.state.isHide}
    triggerEyes={this.triggerEyes}
   />
  );
 };

 renderLabel = (name) => {
  const { isUpdate } = this.props;
  const { password } = constVals.ObjectKeysValues;

  if (name === password && isUpdate === false) {
   return (
    <div className='password-eyes'>
     <Label for={`${name}For`}>{name}</Label>
     {this.renderEyes()}
    </div>
   );
  } else return <Label for={`${name}For`}>{name}</Label>;
 };

 renderInput = (aCol) => {
  const { isUpdate } = this.props;
  const { name, type, value } = aCol;
  const { password, email } = constVals.ObjectKeysValues;
  const passwordType = name === password && this.state.isHide ? 'password' : 'text';
  const disabled = isUpdate && (name === password || name === email) ? true : false;

  return (
   <Input
    type={name === password ? passwordType : type}
    name={name}
    value={value}
    id={`${name}For`}
    autoComplete={name === password ? 'off' : 'on'} //v50xx4
    onChange={this.props.handleInput}
    disabled={disabled}
   />
  );
 };

 customARow = (list, key) => {
  return (
   <Row key={key}>
    {list.map((aCol, idx) => {
     const { name, colNumber } = aCol;
     return (
      <Col
       key={idx}
       md={colNumber}
      >
       <FormGroup>
        {this.renderLabel(name)}
        {this.renderInput(aCol)}
       </FormGroup>
      </Col>
     );
    })}
   </Row>
  );
 };

 handleFormRow = (fieldGroups) => {
  const tempList = fieldGroups.map((aGroup, idx) => {
   return this.customARow(aGroup, idx);
  });

  return tempList;
 };

 render() {
  return <div>{this.handleFormRow(this.props.fieldGroups)}</div>;
 }
}

export default CustomARow;
