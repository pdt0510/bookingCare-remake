import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { parentRoutes, paths, systemRoutes } from '../supplies/routeSupplies';

class GetAllRoutes extends Component {
 state = {
  parentRoutes: parentRoutes,
  systemRoutes: systemRoutes,
 };

 renderChildRoutes = (list) => {
  const tempList = list.map((childRoute, idx) => {
   const { path, element, index } = childRoute;
   return (
    <Route
     key={idx}
     index={index}
     path={index ? null : path}
     element={element}
    />
   );
  });

  return tempList;
 };

 renderAllRoutes = (list) => {
  const tempList = list.map((route, idx) => {
   const { path, element } = route;
   return (
    <Route
     key={idx}
     path={path}
     element={element}
    >
     {path === paths.system && this.renderChildRoutes(this.state.systemRoutes)}
    </Route>
   );
  });
  return <Routes>{tempList}</Routes>;
 };

 render() {
  const { parentRoutes } = this.state;
  return <>{parentRoutes && parentRoutes.length > 0 && this.renderAllRoutes(parentRoutes)}</>;
 }
}

export default GetAllRoutes;
