import React, { Component } from 'react';
import './MenuGroup.scss';
import { FormattedMessage } from 'react-intl';
import SubMenu from '../subMenu/SubMenu';
import * as varConsts from './../../utilities/constant';
import withRouterHOC from './../../containers/withRouterHOC';
import * as routeSupplies from './../../supplies/routeSupplies';
import { Navigate } from 'react-router-dom';

class MenuGroup extends Component {
 renderMenuGroup = () => {
  let isThisRoute = false;
  const { menu, router } = this.props;
  const { system } = routeSupplies.paths;
  const { activeClass, menuGroupClass } = varConsts.ObjectKeysValues;

  let usingRoutePath = router.location.pathname;
  if (usingRoutePath === system || usingRoutePath === `${system}/`) {
   const [userManagerRoute] = routeSupplies.systemRoutes;

   return (
    <Navigate
     to={userManagerRoute.path}
     replace
    />
   );
  }

  const tempList = menu.map((item, idx) => {
   if (isThisRoute) {
    isThisRoute = false;
    usingRoutePath = null;
   } else if (isThisRoute === false && usingRoutePath) {
    const { subMenu } = item;
    const length = subMenu.length;

    for (let idx = 0; idx < length; idx++) {
     if (subMenu[idx].link === usingRoutePath) {
      isThisRoute = true;
      break;
     }
    }
   }

   return (
    <div
     id={idx}
     key={idx}
     className={`${menuGroupClass} ${isThisRoute ? activeClass : ''}`}
    >
     <FormattedMessage id={item.name} />
     <SubMenu
      subMenu={item.subMenu}
      usingRoutePath={usingRoutePath}
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

export default withRouterHOC(MenuGroup);
