import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Outlet } from 'react-router-dom';
import HeaderContainer from '../containers/header/HeaderContainer';

class AdminSystem extends Component {
 render() {
  return (
   <div>
    <HeaderContainer />
    <Outlet />
   </div>
  );
 }
}

const mapStateToProps = ({ appReducer }) => ({
 language: appReducer.language,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AdminSystem);
