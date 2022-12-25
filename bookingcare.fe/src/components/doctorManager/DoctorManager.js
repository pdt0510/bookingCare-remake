import React, { Component } from 'react';
import { connect } from 'react-redux';

class DoctorManager extends Component {
 render() {
  return (
   <div>
    <h1>DoctorManager route</h1>
   </div>
  );
 }
}

const mapStateToProps = ({ appReducer }) => ({
 language: appReducer.language,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DoctorManager);
