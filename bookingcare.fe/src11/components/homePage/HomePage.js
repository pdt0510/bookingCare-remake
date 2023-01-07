import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomePage extends Component {
 render() {
  return <h1>HomePage route</h1>;
 }
}

const mapStateToProps = ({ appReducer }) => ({
 language: appReducer.language,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

class Notfound extends Component {
 render() {
  return (
   <div>
    <h1>Not Found Page</h1>
   </div>
  );
 }
}

export { Notfound };
