import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProjectCard from '../Components/ProjectCard';

import ACTIONS from '../actions';

import './Styles/ProjectsList.css';


export class ProjectsList extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
        newList: false,
        isHovered: false,
      };
      this.startState = { autoAlpha: 1, y: -1.5 };
      this.endState = { autoAlpha: 0.6, y: 0 };
  }
  onSetAppState = (newState, cb) => this.setState(newState, cb);
  // onSliderChange = (event) => this.setState({ slider: +event.target.value })

  componentDidMount(){
    const { fetchProjects } = this.props;
    fetchProjects();
  }

  componentWillMount() {
      this.setState({newList: !this.state.newList})
  }

  componentWillUnmount() {
    const { cleanProjects } = this.props;
    cleanProjects();
    this.setState({newList: !this.state.newList})
  }


  componentWillReceiveProps(nextProps){
    if(nextProps.projects){
      this.setState({ projects: nextProps.projects });
    }
  }

  renderCards() {
      const {fetchProject, history, projects} = this.props;
      if(!projects) return <div>No projects available</div>
      const projectsList = projects.map((project) => {
        return (
            <ProjectCard key={project.id} project={project} fetchProject={fetchProject} history={history}/>
        )
      });

      return (
          <div className="projects-list">{projectsList} </div>
        );
  }

  render() {
    // const { slider } = this.state;
    return (
      <div className="infim-home">
          {this.renderCards()}
      </div>
    );
  }
}



export function mapDispatchToProps(dispatch) {
    return bindActionCreators(ACTIONS, dispatch);
}

export function mapStateToProps(state) {
    return {
      projects: state.projectsData.projects,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList);
