import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/styles.scss';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import { parentRoutes, paths, systemRoutes } from '../supplies/routeSupplies';
import LoadingGif from '../components/loadingGif/LoadingGif';

class App extends Component {
 state = {
  isCompleted: false,
 };

 componentDidMount = async () => {
  const isCheck = await this.handlePersistorState();
  if (isCheck) {
   this.setState({
    isCompleted: true,
   });
  }
 };

 handlePersistorState = () => {
  return new Promise((resolve, reject) => {
   try {
    const { bootstrapped } = this.props.persistor.getState();
    if (bootstrapped) {
     resolve(true);
    } else resolve(false);
   } catch (error) {
    reject(error);
   }
  });
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

 renderParentRoutes = (list) => {
  const tempList = list.map((route, idx) => {
   const { path, element } = route;
   return (
    <Route
     key={idx}
     path={path}
     element={element}
    >
     {path === paths.system && this.renderChildRoutes(systemRoutes)}
    </Route>
   );
  });

  return <Routes>{tempList}</Routes>;
 };

 render() {
  return (
   <div className='app'>
    {this.state.isCompleted &&
     parentRoutes &&
     parentRoutes.length > 0 &&
     this.renderParentRoutes(parentRoutes)}
    {this.props.isLoadingSymbol && <LoadingGif />}
   </div>
  );
 }
}

const mapStateToProps = ({ appReducer, userReducer }) => ({
 language: appReducer.language,
 isLoadingSymbol: appReducer.isLoadingSymbol,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
