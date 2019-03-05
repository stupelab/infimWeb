import React from 'react';
// import {Link} from 'react-router-dom';
import p5 from 'p5';
// import sketch from '../data/sketch';

import './Styles/DetailCard.css';

class SketchScene extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        url: this.props.url || '',
        canvasName: "canvas-container " + this.props.id || 0,
      };
  }

  componentDidMount() {
    const canvasName = "canvas-container " + this.props.id;
    // this.canvas = new p5(this.props.sketch, "canvas-container" )
    this.canvas = new p5(this.props.sketch, canvasName )
    if( this.canvas.myCustomRedrawAccordingToNewPropsHandler ) {
      this.canvas.myCustomRedrawAccordingToNewPropsHandler(this.props);
    }
  }

  componentWillReceiveProps(newProps) {
    let newP = newProps;
    if (this.props.sketch !== newProps.sketch) {
      this.canvas.removeChild(this.canvas.childNodes[0]);
      this.canvas = new p5(newP, this.wrapper)
    }
    if( this.canvas.myCustomRedrawAccordingToNewPropsHandler ) {
      this.canvas.myCustomRedrawAccordingToNewPropsHandler(newProps);
    }
  }

  shouldComponentUpdate(nextProps) {
    this.canvas.props = nextProps.p5Props
    return false
  }

  componentWillUnmount() {
      this.canvas.closeSketch()
      this.canvas.remove()
  }

  render() {
    return (<div id={this.state.canvasName} className="sketch-section" />)
  }
}

export default SketchScene;
