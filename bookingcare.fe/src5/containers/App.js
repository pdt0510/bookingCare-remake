import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as combinedActs from '../store/actions';
import './App.scss';
import '../styles/base.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import HeaderContainer from './header/HeaderContainer';

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

 renderingApp = () => {
  return (
   <div className='app-content'>
    <HeaderContainer />
   </div>
  );
 };

 render() {
  return <>{this.state.isCompleted && this.renderingApp()}</>;
 }
}

const mapStateToProps = ({ appReducer }) => ({
 language: appReducer.language,
});

const mapDispatchToProps = (dispatch) => ({
 testActionFn: (value) => dispatch(combinedActs.testActionFn(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
