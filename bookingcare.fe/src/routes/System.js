import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Outlet } from 'react-router-dom';
import HeaderContainer from '../containers/header/HeaderContainer';

class System extends Component {
 render() {
  return (
   <>
    <HeaderContainer />
    <Outlet />
   </>
  );
 }
}

const mapStateToProps = ({ appReducer }) => ({
 language: appReducer.language,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(System);
