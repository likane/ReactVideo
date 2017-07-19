//create a new component to produce html

//take generated html and display

import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyCjvtL8Og-6jmUz4_DHroBIFDUoNcWz_PY";

const App =  () => {
	return ( 

		<div>
			
			<SearchBar />

		</div>
	);


}

ReactDOM.render(<App />, document.querySelector('.container'));

//last tut: 15