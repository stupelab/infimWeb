import React from 'react';
import { Link } from 'react-router-dom';

import {TweenLite} from 'gsap/TweenLite'

import {Transition} from 'react-transition-group'

class ProjectCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isHovered: false,
          isImgLoaded: false
        };
        this.animationTime = 0.85; //time in seconds
    }

    handleMouse(id) {
       this.setState({imageSelectedId: id});
    }

    render(){
        const { project } = this.props;
        const { isImgLoaded } = this.state;
        const mainImage = project.images.find(img => img.isMain === true);
        const displayedImg = isImgLoaded ? (mainImage ? mainImage.url : "../data/noimg.jpg") : "../data/noimg.jpg";

        const styleEnter = {
          filter:"grayScale(100%)",
        };
        const styleExit = {
          filter:"grayScale(0%)"
        };

        return (
            <Link to={`/project/${project.id}`} className="nav-page">
              <span
                className="project-card"
                onMouseEnter={() => {this.setState({isHovered: true}); }}
                onMouseLeave={() => {this.setState({isHovered: false}); }}
              >
                <span className="project-info">
                      <Transition
                        in={this.state.isHovered} timeout={this.animationTime}
                        onEnter={node => TweenLite.to(node, this.animationTime, {right:"0%"})}
                        onExit={node => TweenLite.to(node, this.animationTime, {right:"100%"})}
                      >
                          <div className="title">{project.title.title}</div>
                      </Transition>
                      <Transition
                        in={this.state.isHovered} timeout={this.animationTime}
                        onEnter={node => TweenLite.to(node, this.animationTime, {left:"0%"})}
                        onExit={node => TweenLite.to(node, this.animationTime, {left:"100%"})}
                      >
                          <span className="subtitle">{project.title.subtitle}</span>
                      </Transition>
                      <Transition
                        in={this.state.isHovered} timeout={this.animationTime}
                        onEnter={node => TweenLite.to(node, this.animationTime, {bottom:"0px"})}
                        onExit={node => TweenLite.to(node, this.animationTime, {bottom:"-150px"})}
                      >
                          <span className="location">{project.credits.location}</span>
                      </Transition>
                  </span>
                  <Transition
                    in={this.state.isHovered} timeout={this.animationTime}
                    onEnter={node => TweenLite.to(node, this.animationTime, styleEnter)}
                    onExit={node => TweenLite.to(node, this.animationTime, styleExit)}
                  >
                    <img
                      className="project-image"
                      src={displayedImg}
                      alt={project.title.title}
                      onLoad={ () => { debugger; this.setState({ isImgLoaded: true })}}
                    />
                  </Transition>
              </span>
            </Link>

        );
    }
}

export default ProjectCard;
