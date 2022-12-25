import React, { Component } from 'react';
import './MenuGroup.scss';
import { FormattedMessage } from 'react-intl';
import SubMenu from '../subMenu/SubMenu';

class MenuGroup extends Component {
 renderMenuGroup = () => {
  const tempList = this.props.menu.map((item, idx) => {
   return (
    <div
     key={idx}
     className='menuGroup'
    >
     <FormattedMessage id={item.name} />
     <SubMenu subMenu={item.subMenu} />
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
