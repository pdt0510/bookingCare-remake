import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import './Login.scss';
import Commons from '../../utilities/Commons';
import * as combinedActions from '../../store/actions';
import Languages from '../../components/languagesComp/Languages';
import * as Utils from './../../utilities/index';
import { FormattedMessage, injectIntl } from 'react-intl';
import { paths } from './../../supplies/routeSupplies';
import withRouterHOC from '../withRouterHOC';

class Login extends Component {
 state = {
  email: 'tintuc271@gmail.com',
  password: 'PhanTai@123',
  apiMes: '',
  emailMess: '',
  passwordMess: '',
  isHide: true,
 };

 navigateToSystem = () => {
  this.props.router.navigate(paths.system, { replace: true }); //v46xx3
 };

 handleLogged = async () => {
  const { email, password } = this.state;
  const isEmail = await Commons.checkEmailRegex(email);
  const isPassword = await Commons.checkPasswordRegex(password);

  if (isEmail && isPassword) {
   this.props.toggleLoadingGif(); //v46xx2
   const result = await this.props.userLoginFn({ email, password });
   const { noErrors } = constVals.ObjectKeysValues;

   if (result.errCode === noErrors) {
    setTimeout(() => {
     this.navigateToSystem();
     this.props.toggleLoadingGif(); //v46xx2
    }, Utils.ObjectKeysValues.delayTime);

    this.resetForm();
   } else {
    this.setMessToForm(result.message);
   }
  } else {
   const { emailErr, passwordErr } = Utils.clientMessages;
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

 renderMessageL = (mesL) => {
  return this.props.intl.formatMessage({ id: mesL });
 };

 render() {
  const { email, password, emailMess, passwordMess, apiMes, isHide } = this.state;
  const { loginL, passwordL, forgottenL, orSignInWithL, yourEmailL, yourPasswordL } =
   Utils.loginLangs;

  return (
   <div className='login-content'>
    <div className='login-bgr'>
     <form className='login-form'>
      {/* v46xx1 */}
      <Languages hideLangsWord={true} />
      <div className='login-header'>
       <FormattedMessage id={loginL} />
      </div>
      <div className='login-body'>
       <div className='form-group'>
        <label htmlFor='emailHtmlFor'>Email</label>
        <input
         type='text'
         id='emailHtmlFor'
         className='form-control'
         placeholder={this.renderMessageL(yourEmailL)}
         name='email'
         value={email}
         onChange={this.handleInput}
        />
        <span className='login-mess'>{emailMess && emailMess}</span>
       </div>
       <div className='form-group'>
        <div className='group-flex'>
         <label htmlFor='passwordHtmlFor'>
          <FormattedMessage id={passwordL} />
         </label>
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
         placeholder={this.renderMessageL(yourPasswordL)}
         name='password'
         value={password}
         autoComplete='on'
         onChange={this.handleInput}
        />
        <span className='login-mess'>{passwordMess && passwordMess}</span>
        <span className='login-mess'>{apiMes && apiMes}</span>
       </div>
       <div className='forgotten-password'>
        <FormattedMessage id={forgottenL} />
       </div>

       <div
        className='BTN BTN-success btn-login'
        onClick={this.handleLogged}
       >
        <FormattedMessage id={loginL} />
       </div>
      </div>
      <div className='login-footer'>
       <span>
        <FormattedMessage id={orSignInWithL} />
       </span>
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

const mapStateToProps = ({ appReducer, userReducer }) => ({
 language: appReducer.language,
 isLoggedIn: userReducer.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
 userLoginFn: (info) => dispatch(combinedActions.userLoginFn(info)),
 toggleLoadingGif: () => dispatch(combinedActions.toggleLoadingGif()),
});

export default compose(
 injectIntl,
 withRouterHOC,
 connect(mapStateToProps, mapDispatchToProps),
)(Login); //v46xx3
