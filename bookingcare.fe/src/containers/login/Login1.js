import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Login.scss';
import Commons from '../../utilities/Commons';
import * as userServ from '../../services/userService';

//Login1
class Login extends Component {
 state = {
  email: '',
  password: '',
  apiMes: '',
  emailMess: '',
  passwordMess: '',
  isHide: true,
 };

 handleLogged = async () => {
  const { email, password } = this.state;
  const isEmail = await Commons.checkEmailRegex(email);
  const isPassword = await Commons.checkPasswordRegex(password);

  if (isEmail && isPassword) {
   const result = await userServ.loginUserFn({ email, password }); // v45xx1
   if (result.errCode === 0) {
    this.resetForm();
   } else {
    this.setMessToForm(result.message);
   }
  } else {
   const emailErr = 'Email is not correct';
   const passwordErr = 'At least 8 chars, including of upper/lower/number/special (@ * , ! ...)';
   this.setMessToForm(
    null,
    isEmail === false ? emailErr : null,
    isPassword === false ? passwordErr : null,
   );
  }
 };

 setMessToForm = (apiMes = null, emailMess = null, passwordMess = null) => {
  this.setState({
   apiMes: apiMes ? apiMes : '',
   emailMess: emailMess ? emailMess : '',
   passwordMess: passwordMess ? passwordMess : '',
  });
 };

 resetForm = () => {
  this.setState({
   apiMes: '',
   emailMess: '',
   passwordMess: '',
  });
 };

 handleInput = (event) => {
  const { name, value } = event.target;
  this.setState({
   [name]: value,
  });
 };

 toggleEyes = () => {
  this.setState({
   isHide: !this.state.isHide,
  });
 };

 renderEyes = () => {
  return this.state.isHide ? <i className='fas fa-eye-slash' /> : <i className='fas fa-eye'></i>;
 };

 render() {
  const { email, password, emailMess, passwordMess, apiMes, isHide } = this.state;

  return (
   <div className='login-content'>
    <div className='login-bgr'>
     <form className='login-form'>
      <div className='login-header'>Login</div>
      <div className='login-body'>
       <div className='form-group'>
        <label htmlFor='emailHtmlFor'>Email</label>
        <input
         type='text'
         id='emailHtmlFor'
         className='form-control'
         placeholder='Your email...'
         name='email'
         value={email}
         onChange={this.handleInput}
        />
        <span className='login-mess'>{emailMess && emailMess}</span>
       </div>
       <div className='form-group'>
        <div className='group-flex'>
         <label htmlFor='passwordHtmlFor'>Password</label>
         <div
          className='login-eye'
          onClick={this.toggleEyes}
         >
          {this.renderEyes()}
         </div>
        </div>
        <input
         type={isHide ? 'password' : 'text'}
         id='passwordHtmlFor'
         className='form-control'
         placeholder='Your password...'
         name='password'
         value={password}
         onChange={this.handleInput}
        />
        <span className='login-mess'>{passwordMess && passwordMess}</span>
        <span className='login-mess'>{apiMes && apiMes}</span>
       </div>
       <a
        href='##'
        className='forgotten-password'
       >
        Forgotten password ?
       </a>
       <div
        className='BTN BTN-success btn-login'
        onClick={this.handleLogged}
       >
        Login
       </div>
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
