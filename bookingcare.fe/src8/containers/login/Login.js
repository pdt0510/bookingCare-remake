import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Login.scss';

class Login extends Component {
 render() {
  return (
   <div className='LoginContainer-content'>
    <h1>LoginContainer page</h1>
   </div>
  );
 }
}

const mapStateToProps = ({ appReducer }) => ({
 language: appReducer.language,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
