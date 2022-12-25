import React, { Component } from 'react';
import './SubMenu.scss';
import { FormattedMessage } from 'react-intl';
import * as utils from '../../utilities/constant';
import { Link } from 'react-router-dom';

class SubMenu extends Component {
 handleActive = (event) => {
  const { activeClass } = utils.ObjectKeysValues;

  const eleActived = document.querySelector(`.headerContainer .menuGroup .subMenu .${activeClass}`);
  if (eleActived) eleActived.classList.remove(activeClass);

  const ele = event.target;
  ele.classList.add(activeClass);
 };

 renderSubMenu = () => {
  const subMenuList = this.props.subMenu.map((item, idx) => {
   const { name, link } = item;

   // v69xx1
   return (
    <Link
     to={link}
     key={idx}
     className='subMenuLink'
     onClick={this.handleActive}
    >
     <FormattedMessage id={name} />
    </Link>
   );
  });
  return subMenuList;
 };

 render() {
  return <ul className='subMenu'>{this.renderSubMenu()}</ul>;
 }
}

export default SubMenu;
