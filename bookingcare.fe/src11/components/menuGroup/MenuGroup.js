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

  //v47xx4
  let usingRoutePath = router.location.pathname;
  // console.log('usingRoutePath 111 ---', usingRoutePath);

  if (usingRoutePath === system || usingRoutePath === `${system}/`) {
   const [userManagerRoute] = routeSupplies.systemRoutes;
   return (
    <Navigate
     to={userManagerRoute.path} //v47xx4
     replace
    />
   );
  }

  // console.log('usingRoutePath 222 ---', usingRoutePath); //v47xx4
  const tempList = menu.map((item, idx) => {
   // v47xx1
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

   // console.log(456); //v47xx2
   return (
    <div
     id={idx}
     key={idx}
     className={`${menuGroupClass} ${isThisRoute ? activeClass : ''}`}
    >
     <FormattedMessage id={item.name} />
     <SubMenu
      subMenu={item.subMenu}
      usingRoutePath={usingRoutePath} //v47xx1
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
