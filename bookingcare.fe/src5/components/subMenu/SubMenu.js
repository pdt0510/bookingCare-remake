import React, { Component } from 'react';
import './SubMenu.scss';
import { FormattedMessage } from 'react-intl';
import * as utils from '../../utilities/constant';

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
   return (
    <li
     key={idx}
     onClick={this.handleActive}
    >
     <FormattedMessage id={item.name} />
    </li>
   );
  });
  return subMenuList;
 };

 render() {
  return <ul className='subMenu'>{this.renderSubMenu()}</ul>;
 }
}

export default SubMenu;
