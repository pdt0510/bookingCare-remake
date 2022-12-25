import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HeaderContainer.scss';
import MenuGroup from '../../components/menuGroup/MenuGroup';
import { adminMenu } from '../../supplies/menuApp';

class HeaderContainer extends Component {
 switchLang = () => {};
 render() {
  return (
   <div className='headerContainer'>
    <MenuGroup menu={adminMenu} />
   </div>
  );
 }
}

const mapStateToProps = ({ appReducer }) => ({
 language: appReducer.language,
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
