import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars';

class CustomScrollbar extends Component {
    constructor(props){
        super(props);
        this.trackVerticalTrackClassName = this.props.widget ? "track-vertical track-vertical-widget" : "track-vertical";
    }
  render() {
    return (
      <Scrollbars  hideTracksWhenNotNeeded={true}
        renderTrackHorizontal={props => <div {...props} className="track-horizontal"/>}
        renderTrackVertical={props => <div {...props} className={this.trackVerticalTrackClassName} />}
        renderThumbHorizontal={props => <div {...props} className="thumb-horizontal"/>}
        renderThumbVertical={props => <div {...props} className="thumb-vertical"/>}
        renderView={props => <div {...props} className="view"/>}>
        {this.props.children}
      </Scrollbars>
    );
  }
}

export default CustomScrollbar;
