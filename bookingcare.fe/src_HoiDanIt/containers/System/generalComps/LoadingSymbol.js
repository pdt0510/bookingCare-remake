import React, { Component } from 'react';
import { Vortex } from 'react-loader-spinner';
import './LoadingSymbol.scss';

class LoadingSymbol extends Component {
  render() {
    return (
      <span className='active-loading-symbol'>
        <Vortex
          visible={true}
          height='80'
          width='80'
          ariaLabel='vortex-loading'
          wrapperStyle={{}}
          wrapperClass='vortex-wrapper'
          colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
        />
        <span>Loading...</span>
      </span>
    );
  }
}

export default LoadingSymbol;
