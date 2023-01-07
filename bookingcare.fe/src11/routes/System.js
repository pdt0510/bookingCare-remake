import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import Header from '../containers/header/Header';
import { paths } from './../supplies/routeSupplies';

class System extends Component {
 //v46xx3
 navigatetoLogin = () => {
  return (
   <Navigate
    to={paths.login}
    replace
   />
  );
 };

 render() {
  const isLoggedInTesting = true;
  return (
   <>
    <Header />
    {isLoggedInTesting ? <Outlet /> : this.navigatetoLogin()}
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
