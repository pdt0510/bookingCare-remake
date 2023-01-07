import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.scss';
import MenuGroup from '../../components/menuGroup/MenuGroup';
import { adminMenu } from '../../supplies/routeSupplies';
import Languages from '../../components/languagesComp/Languages';

class Header extends Component {
 render() {
  return (
   <div className='header-content'>
    <MenuGroup menu={adminMenu} />
    <Languages />
   </div>
  );
 }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
