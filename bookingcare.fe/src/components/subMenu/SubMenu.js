import React, { Component } from 'react';
import './SubMenu.scss';
import { FormattedMessage } from 'react-intl';
import * as varConsts from '../../utilities/constant';
import { Link } from 'react-router-dom';

class SubMenu extends Component {
 getParentEle = (ele) => {
  const { menuGroupClass } = varConsts.ObjectKeysValues;

  while (ele && ele.parentNode) {
   if (ele.classList[0] === menuGroupClass) {
    return ele;
   }
   ele = ele.parentNode;
  }
 };

 removeParentActive = (activedEle) => {
  const { activeClass, menuGroupClass } = varConsts.ObjectKeysValues;

  while (activedEle && activedEle.parentNode) {
   if (activedEle.classList[0] === menuGroupClass) {
    activedEle.classList.remove(activeClass);
    return;
   }
   activedEle = activedEle.parentNode;
  }
 };

 addParentActive = (currentEle) => {
  const { activeClass, menuGroupClass } = varConsts.ObjectKeysValues;

  while (currentEle && currentEle.parentNode) {
   if (currentEle.classList[0] === menuGroupClass) {
    currentEle.classList.add(activeClass);
    return;
   }
   currentEle = currentEle.parentNode;
  }
 };

 //v69xx3
 handleActive = (event) => {
  const { activeClass, menuGroupClass } = varConsts.ObjectKeysValues;
  const currentEle = event.target;
  let currentEleIsNotActived = true;

  if (currentEle) {
   const length = currentEle.classList.length;
   for (let idx = 0; idx < length; idx++) {
    if (currentEle.classList[idx] === activeClass) {
     currentEleIsNotActived = false;
    }
   }
  }

  if (currentEleIsNotActived) {
   const activedEle = document.querySelector(
    `.headerContainer-content .${menuGroupClass} .subMenu .${activeClass}`,
   );

   const currentParent = this.getParentEle(currentEle);
   const activedParent = this.getParentEle(activedEle);

   if (currentParent.id !== activedParent.id) {
    this.removeParentActive(activedEle);
    this.addParentActive(currentEle);
   }

   activedEle.classList.remove(activeClass);
   currentEle.classList.add(activeClass);
  }
 };

 renderSubMenu = () => {
  const { activeClass } = varConsts.ObjectKeysValues;
  const { defaultActive } = this.props;
  const active1st = 0;

  const subMenuList = this.props.subMenu.map((item, idx) => {
   const { name, link } = item;
   return (
    <Link
     to={link}
     key={idx}
     className={`subMenuLink ${defaultActive && idx === active1st ? activeClass : ''}`}
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
