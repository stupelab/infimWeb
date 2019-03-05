import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ThreeScene from '../Components/ThreeScene';

import ACTIONS from '../actions';

import './Styles/PodcastList.css';

export class Home extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        searchText: '',
        isLoading: true,
      };
  }

  // searchPodcasts() {
  //     const { searchText, numResults } = this.state;
  //     return (
  //       <div className="searcher-bar">
  //         <span className="search-module">
  //           <div className="number-results">{numResults}</div>
  //           <input
  //               type="text"
  //               className="input-search-podcast"
  //               name="searchText"
  //               value={searchText || ''}
  //               onChange={ (e) => { this.searcherPodcasts(e.target.value); }}
  //               placeholder="Filter podcasts..."
  //           />
  //         </span>
  //       </div>);
  // }

  // searcherPodcasts(searchText) {
  //   const { podcasts } = this.props;
  //   const podcastFiltered = podcasts.filter((podcast) =>  podcast.title.toLowerCase().includes(searchText.toLowerCase()) || podcast.author.toLowerCase().includes(searchText.toLowerCase()) );
  //   const numResults = podcastFiltered.length
  //   this.setState({ numResults, podcastFiltered, searchText });
  // }

  render() {
    return (
      <div className="infim-home">
        <ThreeScene />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
