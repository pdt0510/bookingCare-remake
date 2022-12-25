import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as combinedActs from '../store/actions';
import Header from './header/Header';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'; //v54xx1
import '../styles/base.scss';
import TranslationHoc from '../hoc/TranslationHoc';
import { FormattedMessage } from 'react-intl';
import { testLangs } from '../utilities/groupedLangs';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToastComp from '../components/toast/ToastComp';

class App extends Component {
 state = {
  isCompleted: false,
 };

 componentDidMount = async () => {
  const isCheck = await this.handlePersistorState(); //v54xx1
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

 testAction = () => {
  const number = 1;
  this.props.testActionFn(number);
 };

 renderingApp = () => {
  const { testL } = testLangs;
  const toastSuccess = () => toast.success(' success !', { autoClose: 500 });
  const toastError = () => toast.error(' error !'); //v54xx4

  return (
   <TranslationHoc>
    <div className='app-content'>
     <Header />
     <button
      type='button'
      className='btn btn-success btnGeneral'
      onClick={this.testAction}
     >
      test redux; redux-persist
     </button>
     <span>{this.props.testValue}</span>
     <h1 className='testScss'>Test SCSS</h1>
     <h1>
      multi langs: <FormattedMessage id={testL} />
     </h1>
     <button
      className='btn btn-danger'
      onClick={toastError}
     >
      toastError
     </button>
     <button
      className='btn btn-success'
      onClick={toastSuccess}
     >
      toastSuccess
     </button>
     {/* v54xx4 */}
     <ToastComp />
    </div>
   </TranslationHoc>
  );
 };

 render() {
  return <>{this.state.isCompleted && this.renderingApp()}</>;
 }
}

const mapStateToProps = ({ userReducer, appReducer }) => ({
 testValue: userReducer.testValue,
 // started: appReducer.started, //v37xx8
 language: appReducer.language,
});

const mapDispatchToProps = (dispatch) => ({
 testActionFn: (value) => dispatch(combinedActs.testActionFn(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
