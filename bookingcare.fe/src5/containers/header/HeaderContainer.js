import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HeaderContainer.scss';
import MenuGroup from '../../components/menuGroup/MenuGroup';
import { adminMenu } from '../../supplies/headerMenu';

class HeaderContainer extends Component {
 render() {
  return (
   <div className='headerContainer'>
    <MenuGroup menu={adminMenu} />
   </div>
  );
 }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
