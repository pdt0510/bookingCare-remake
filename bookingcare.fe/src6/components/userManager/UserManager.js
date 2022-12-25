import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserManager extends Component {
 render() {
  const { isIndex } = this.props;
  return (
   <div>
    <h1>UserManager route {isIndex ? ' defaulted by index' : ''}</h1>
   </div>
  );
 }
}

const mapStateToProps = ({ appReducer }) => ({
 language: appReducer.language,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UserManager);
