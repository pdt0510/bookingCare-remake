import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import '../styles/base.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import GetAllRoutes from './GetAllRoutes';

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

 render() {
  return (
   <BrowserRouter>
    <div className='app'>{this.state.isCompleted && <GetAllRoutes />}</div>
   </BrowserRouter>
  );
 }
}

const mapStateToProps = ({ appReducer }) => ({
 language: appReducer.language,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
