import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ACTIONS from '../actions';

import './Styles/ProjectDetail.css';

export class ProjectDetail extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      };
  }

  componentWillMount(){
      const { fetchProject } = this.props;
      fetchProject(this.props.match.params.id);
  }

  renderDescription(){
    const { project: {title, description} } = this.props;
    return (
      <div className="project-info-section">
        <div className="title">
          <h1>{title.title}</h1>
          <h2>{title.subtitle}</h2>
        </div>
        <div className="description">{description}</div>
      </div>
    );
  }

  renderCredits(){
    // credits: {
    //   client: 'Zebra BCN',
    //   technologies: ['Openframeworks', 'OpenCV'],
    //   data: '01/January/2018',
    //   location: 'Hotel OD Barcelona',
    // },
    const { project: { credits } } = this.props;
    const technoTags = credits.technologies.map((t, idx) => {
      return <span key={idx} className="tag-techno"><span>{t}</span></span>
    })
    return (
      <div className="project-credits">
        <div className="title">Credits</div>
        <div className="client">{`Client: ${credits.client}`}</div>
        <div className="location">{`Location: ${credits.location}`}</div>
        <div className="date">{`Date: ${credits.data}`}</div>
        <div className="location">{credits.partners ? `Partners: ${credits.partners}` : null}</div>
        <div className="technologies">{technoTags}</div>
      </div>
    );

  }

  renderImage(){
    const { project } = this.props;
    const mainImage = project.images.find(img => img.isMain === true);
    const otherImages = project.images.map((img, idx) =>
      { if (img === mainImage) return null
        const content = img.isVideo ? (
          <video  key={idx} className="project-main-image"  loop autoPlay>
            <source src={img.url} />
            Your browser does not support HTML5 video.
          </video>
        ) : (
          <img className="project-main-image" src={img.url} key={idx} alt={img.url}/>
        );

        return content;
      });
    return (
      <div className="project-image-section">
        {mainImage ? <img className="project-main-image" src={mainImage.url} alt={mainImage.url}/> : null}
        {otherImages}
      </div>
    );
  }

  render(){
    const {project} = this.props;
    if (!project) return <span>'no data available'</span>
    // {
    //   id: 8,
    //   title: 'instalacio 2',
    //   description:'Loren Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." ',
    //   client: 'Zebra BCN',
    //   technologies: ['Openframeworks', 'OpenCV'],
    //   data: '01/January/2018',
    //   location: 'Hotel OD Barcelona',
    //   images: [{
    //     url: '../data/kinect2.png',
    //     isMain: true,
    //   }, {
    //     url: '../data/kinect2.png',
    //     isMain: false,
    //   }]
    // }
    return(
      <div className="project-detail">
        {this.renderImage()}
        {this.renderDescription()}
        {this.renderCredits()}
      </div>
    );

  }
}

export function mapDispatchToProps(dispatch) {
    return bindActionCreators(ACTIONS, dispatch);
}

export function mapStateToProps(state) {
    return {
        project: state.projectsData.project,
        loading: state.projectsData.loading,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail);
