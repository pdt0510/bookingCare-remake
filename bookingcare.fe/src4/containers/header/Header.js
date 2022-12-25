import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.scss';

class Header extends Component {
 state = {};

 render() {
  return (
   <div className='header-content'>
    <h4>header-content</h4>
    <button
     type='button'
     className='btn btn-danger'
    >
     test
    </button>
   </div>
  );
 }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
