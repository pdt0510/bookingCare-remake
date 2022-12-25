import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as combinedActs from './store/actions';

class App extends Component {
 testAction = () => {
  const number = 1;
  this.props.testActionFn(number);
 };

 render() {
  return (
   <div className='App'>
    <h1>Hi from PDT</h1>
    <h3>{this.props.testValue}</h3>
    <button
     type='button'
     className='btn btn-primary'
     onClick={this.testAction}
    >
     test action
    </button>
   </div>
  );
 }
}

const mapStateToProps = ({ userReducer }) => ({
 testValue: userReducer.testValue,
});

const mapDispatchToProps = (dispatch) => ({
 testActionFn: (value) => dispatch(combinedActs.testActionFn(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
