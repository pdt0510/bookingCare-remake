import React, { Component } from 'react';
import './EyeComp.scss';

class EyeComp extends Component {
 toggleEyes = () => {
  this.props.triggerEyes();
 };

 renderEyes = () => {
  return this.props.isHide ? <i className='fas fa-eye-slash' /> : <i className='fas fa-eye'></i>;
 };

 render() {
  return (
   <div
    className='eyeComp-content'
    onClick={this.toggleEyes}
   >
    {this.renderEyes()}
   </div>
  );
 }
}

export default EyeComp;
