import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as combinedActs from '../store/actions';
import './App.scss';
import '../styles/base.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import AdminSystem from '../routes/AdminSystem';
import HomePage, { Notfound } from './../components/homePage/HomePage';
import { paths, systemRoutes } from './../supplies/routeSupplies';

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
   const { path, element, isIndex } = childRoute;
   let child = null;

   if (isIndex) {
    child = (
     <Route
      key={idx}
      index
      element={element}
     />
    );
   } else {
    child = (
     <Route
      key={idx}
      path={path}
      element={element}
     />
    );
   }
   return child;
  });

  return tempList;
 };

 render() {
  const { allPaths, home, system } = paths;

  // v69xx1
  return (
   <div className='app'>
    <Routes>
     <Route
      path={home}
      element={<HomePage />}
     />

     <Route
      path={system}
      element={<AdminSystem />}
     >
      {/* v69xx2 */}
      {this.state.isCompleted && this.renderChildRoutes(systemRoutes)}
     </Route>

     <Route
      path={allPaths}
      element={<Notfound />}
     />
    </Routes>
   </div>
  );
 }
}

const mapStateToProps = ({ appReducer }) => ({
 language: appReducer.language,
});

const mapDispatchToProps = (dispatch) => ({
 testActionFn: (value) => dispatch(combinedActs.testActionFn(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
