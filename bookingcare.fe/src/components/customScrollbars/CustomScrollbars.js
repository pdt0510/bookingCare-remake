import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import './CustomScrollbars.scss';

class CustomScrollbars extends Component {
 render() {
  return (
   <Scrollbars
    className='testScrollbars'
    onScroll={this.handleScroll}
    onScrollFrame={this.handleScrollFrame}
    onScrollStart={this.handleScrollStart}
    onScrollStop={this.handleScrollStop}
    onUpdate={this.handleUpdate}
    renderView={this.renderView}
    renderTrackHorizontal={this.renderTrackHorizontal}
    renderTrackVertical={this.renderTrackVertical}
    renderThumbHorizontal={this.renderThumbHorizontal}
    renderThumbVertical={this.renderThumbVertical}
    autoHide
    autoHideTimeout={1000}
    autoHideDuration={200}
    autoHeight
    autoHeightMin={'100vh'} //v51xx2, default 0
    autoHeightMax={200}
    thumbMinSize={60}
    universal={true}
    {...this.props}
   />
  );
 }
}

export default CustomScrollbars;
