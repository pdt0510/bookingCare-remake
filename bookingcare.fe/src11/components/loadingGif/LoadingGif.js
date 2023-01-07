import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './LoadingGif.scss';

// v46xx2
class LoadingGif extends Component {
 render() {
  return (
   <div className='loadingGif-content'>
    <div className='loadingGif-img'></div>
   </div>
  );
 }
}

export default LoadingGif;
