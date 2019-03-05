import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink, Link } from 'react-router-dom';

import {Transition} from 'react-transition-group'
import {TweenLite} from 'gsap/TweenLite'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ACTIONS from '../actions';

import {CSSPlugin} from'gsap/CSSPlugin'

import './Styles/Header.css';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          isLoading: false,
          isAnimatingHome: false,
          isAnimatingProjects: false,
          isAnimatingAbout: false,
          isHome: true,
          isProjects: false,
          homeStyle: {},
        };
    }

    mapNumber(num_in, in_min, in_max, out_min, out_max) {
      return (num_in - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.loading){
          this.setState({ isLoading: nextProps.loading });
        }
    }

    hoverHomeElement(e) {
      const ref = this.refs['home'];
      const mouse = {x: e.screenX, y: e.screenY};
      const element = {
        x: ReactDOM.findDOMNode(ref).getBoundingClientRect().x + ReactDOM.findDOMNode(ref).getBoundingClientRect().width/2,
        y: ReactDOM.findDOMNode(ref).getBoundingClientRect().y + ReactDOM.findDOMNode(this.refs['header']).getBoundingClientRect().height + ReactDOM.findDOMNode(ref).getBoundingClientRect().height
      }
      const elementW = ReactDOM.findDOMNode(ref).getBoundingClientRect().width;
      const elementH = ReactDOM.findDOMNode(ref).getBoundingClientRect().height;

      const distance = {x: element.x - mouse.x, y:element.y - mouse.y};
      const elementWidth = 80;
      this.homeStyle = {
        transform: `rotateX(${this.mapNumber(distance.x*0.8,-elementW/2,elementW/2,-20,20)}deg) rotateY(${this.mapNumber(distance.y*0.8,-elementH/2,elementH/2,25,-25)}deg)`,
        color: "#8b00ff",
        fontSize: "24px",
        fontWeight: "bold"
      }
      this.setState({isAnimatingHome: true})
    }

    hoverProjectsElement(e) {
      const ref = this.refs['projects'];
      const mouse = {x: e.screenX, y: e.screenY};
      const element = {
        x: ReactDOM.findDOMNode(ref).getBoundingClientRect().x + ReactDOM.findDOMNode(ref).getBoundingClientRect().width/2,
        y: ReactDOM.findDOMNode(ref).getBoundingClientRect().y + ReactDOM.findDOMNode(this.refs['header']).getBoundingClientRect().height + ReactDOM.findDOMNode(ref).getBoundingClientRect().height
      }
      const elementW = ReactDOM.findDOMNode(ref).getBoundingClientRect().width;
      const elementH = ReactDOM.findDOMNode(ref).getBoundingClientRect().height;

      const distance = {x: element.x - mouse.x, y:element.y - mouse.y};
      // console.log("mouseY:  " + mouse.y)
      // console.log("elementpositionY:  " + element.y )
      // console.log("elementHeight:  " + elementH)
      // console.log("headerH:   " + ReactDOM.findDOMNode(this.refs['header']).getBoundingClientRect().height);
      // console.log("distanceY:   " + distance.y)
      this.projectsStyle = {
        transform: `rotateX(${this.mapNumber(distance.x*0.8,-elementW/2,elementW/2,-20,20)}deg) rotateY(${this.mapNumber(distance.y*0.8,-elementH/2,elementH/2,25,-25)}deg)`,
        color: "#8b00ff",
        fontSize: "24px",
        fontWeight: "bold"
      }
      this.setState({isAnimatingProjects: true})
    }

    hoverAboutElement(e) {
      const ref = this.refs['about'];
      const mouse = {x: e.screenX, y: e.screenY};
      const element = {
        x: ReactDOM.findDOMNode(ref).getBoundingClientRect().x + ReactDOM.findDOMNode(ref).getBoundingClientRect().width/2,
        y: ReactDOM.findDOMNode(ref).getBoundingClientRect().y + ReactDOM.findDOMNode(this.refs['header']).getBoundingClientRect().height + ReactDOM.findDOMNode(ref).getBoundingClientRect().height
      }
      const elementW = ReactDOM.findDOMNode(ref).getBoundingClientRect().width;
      const elementH = ReactDOM.findDOMNode(ref).getBoundingClientRect().height;

      const distance = {x: element.x - mouse.x, y:element.y - mouse.y};

      this.aboutStyle = {
        transform: `rotateX(${this.mapNumber(distance.x*0.8,-elementW/2,elementW/2,-20,20)}deg) rotateY(${this.mapNumber(distance.y*0.8,-elementH/2,elementH/2,25,-25)}deg)`,
        color: "#8b00ff",
        fontSize: "24px",
        fontWeight: "bold"
      }
      this.setState({isAnimatingAbout: true})
    }

    render(){
        const { loading } = this.props;
        const { isAnimatingHome, isAnimatingAbout, isAnimatingProjects } = this.state;
        return (
          <div className="header">
            <Link ref='header' to="/" className="home-link">
              <img  className="logo" src="../data/logo.png" alt="Ínfim Collective" />
            </Link>
            <div className="nav" >
                <Transition
                  in={isAnimatingHome} timeout={1000}
                  onExit={node => TweenLite.to(node, 1, {transform:"rotateX(0) rotateY(0)", color: "black", fontSize: "16px", fontWeight: "normal"})}
                  onEnter={node => TweenLite.to(node, 1, this.homeStyle)}
                >
                  <Link ref='home'
                      to="/"
                      className="nav-page"
                      onMouseMove={this.hoverHomeElement.bind(this)}
                      onMouseOut={()=>{ this.setState({isAnimatingHome: false}) }}
                      >HOME
                  </Link>
                </Transition>
                <Transition
                  in={isAnimatingProjects} timeout={1000}
                  onExit={node => TweenLite.to(node, 1, {transform:"rotateX(0) rotateY(0)", color: "black", fontSize: "16px", fontWeight: "normal"})}
                  onEnter={node => TweenLite.to(node, 1, this.projectsStyle)}
                >
                  <Link ref='projects'
                      to="/projects"
                      className="nav-page"
                      onMouseMove={this.hoverProjectsElement.bind(this)}
                      onMouseOut={()=>{ this.setState({isAnimatingProjects: false}) }}
                      >PROJECTS
                  </Link>
                </Transition>
                <Transition
                  in={isAnimatingAbout} timeout={1000}
                  onExit={node => TweenLite.to(node, 1, {transform:"rotateX(0) rotateY(0)", color: "black", fontSize: "16px", fontWeight: "normal"})}
                  onEnter={node => TweenLite.to(node, 1, this.aboutStyle)}
                >
                  <Link ref='about'
                      to="/about"
                      className="nav-page"
                      onMouseMove={this.hoverAboutElement.bind(this)}
                      onMouseOut={()=>{this.setState({isAnimatingAbout: false}) }}
                      >ABOUT
                  </Link>
                </Transition>
            </div>
            {loading ? <span className="loader" /> : null}
         </div>

        );
    }
}


export function mapDispatchToProps(dispatch) {
    return bindActionCreators(ACTIONS, dispatch);
}

export function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
