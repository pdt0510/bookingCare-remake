import React, { Component } from 'react';
import './MenuGroup.scss';
import { FormattedMessage } from 'react-intl';
import SubMenu from '../subMenu/SubMenu';
import * as varConsts from '../../utilities/constant';

class MenuGroup extends Component {
 renderMenuGroup = () => {
  let defaultActive = 0;
  const { activeClass, menuGroupClass } = varConsts.ObjectKeysValues;

  const tempList = this.props.menu.map((item, idx) => {
   return (
    <div
     id={idx}
     key={idx}
     className={`${menuGroupClass} ${idx === defaultActive ? activeClass : ''}`}
    >
     <FormattedMessage id={item.name} />
     <SubMenu
      subMenu={item.subMenu}
      defaultActive={idx === defaultActive}
     />
    </div>
   );
  });
  return tempList;
 };

 render() {
  return <div className='menuGroup-content'>{this.renderMenuGroup()}</div>;
 }
}

export default MenuGroup;
