import React, { Component } from 'react';
import { connect } from 'react-redux';
import { testAxiosConnection } from '../../services/userService';

class UserManager extends Component {
 componentDidMount = async () => {
  const data = await testAxiosConnection();
  console.log('data ---', data); // v69xx4
 };

 render() {
  return (
   <div>
    <h1>UserManager route</h1>
   </div>
  );
 }
}

const mapStateToProps = ({ appReducer }) => ({
 language: appReducer.language,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UserManager);
