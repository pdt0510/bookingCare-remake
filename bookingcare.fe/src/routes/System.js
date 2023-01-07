import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import Header from '../containers/header/Header';
import { paths } from './../supplies/routeSupplies';

class System extends Component {
 navigatetoLogin = () => {
  return (
   <Navigate
    to={paths.login}
    replace
   />
  );
 };

 render() {
  const isLoggedInTemp = true;
  return (
   <>
    <Header />
    {isLoggedInTemp ? <Outlet /> : this.navigatetoLogin()}
    {/* {this.props.isLoggedIn ? <Outlet /> : this.navigatetoLogin()} */}
   </>
  );
 }
}

const mapStateToProps = (state) => {
 const { userReducer } = state;
 return {
  isLoggedIn: userReducer.isLoggedIn,
 };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(System);
