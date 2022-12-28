import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Login.scss';

class Login extends Component {
 state = {
  isHide: true,
 };

 handleEye = () => {
  this.setState({
   isHide: !this.state.isHide,
  });
 };

 render() {
  const { isHide } = this.state;
  return (
   <div className='login-content'>
    <div className='login-bgr'>
     <form className='login-form'>
      <div className='login-header'>Login</div>
      <div className='login-body'>
       <div className='form-group'>
        <label htmlFor='usernameHtmlFor'>User name</label>
        <input
         type='text'
         className='form-control'
         id='usernameHtmlFor'
         placeholder='Your name...'
        />
       </div>
       <div className='form-group'>
        <div className='group-flex'>
         <label htmlFor='passwordHtmlFor'>Password</label>
         <div
          className='login-eye'
          onClick={this.handleEye}
         >
          {isHide ? <i className='fas fa-eye-slash' /> : <i className='fas fa-eye'></i>}
         </div>
        </div>
        <input
         type={isHide ? 'password' : 'text'}
         className='form-control'
         id='passwordHtmlFor'
         placeholder='Your password...'
        />
        <a
         href='##'
         className='forgotten-password'
        >
         Forgotten password ?
        </a>
       </div>
       <div className='BTN BTN-success btn-login'>Login</div>
      </div>
      <div className='login-footer'>
       <span>or Sign in with</span>
       <div className='login-icons'>
        <i className='fab fa-facebook facebook-color'></i>
        <i className='fab fa-google-plus google-color'></i>
       </div>
      </div>
     </form>
    </div>
   </div>
  );
 }
}

const mapStateToProps = ({ appReducer }) => ({
 language: appReducer.language,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
