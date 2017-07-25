//create a new component to produce html

//take generated html and display

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';
const API_KEY = "AIzaSyCjvtL8Og-6jmUz4_DHroBIFDUoNcWz_PY";



class App extends Component  {

	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null 
		};

		this.videoSearch('surfboards');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: 'surboards'}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});

			//this.setState({videos: videos});
		});

	}

	render() {
		const videoSearch =_.debounce((term) => {this.videoSearch(term)}, 300)

		return ( 

			<div>
				
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail  video={this.state.selectedVideo} />
				<VideoList 
				onVideoSelect={selectedVideo => this.setState({selectedVideo})}
				videos={this.state.videos} />

			</div>
		);

	}
	

}

ReactDOM.render(<App />, document.querySelector('.container'));

//last tut: 37