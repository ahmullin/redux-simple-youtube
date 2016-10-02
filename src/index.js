// Goal: create new component that will produce some html
// after created, we want to make sure it gets inserted into the dom via our html document

// when writing in ES6 we have access to JS modules, which means we need to import/export to give files access to one another, we need the react library to create and manage our components
import React from 'react';
// we also need to be able to touch the DOM directy and render our components to the DOM, thus we need the react-dom library
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

// need to access our search bar component that we exported from our search_bar  file
import SearchBar from './components/search_bar'

// need API key to access YouTube API
const API_KEY = 'AIzaSyBWZ33IllqGOwsIvlBJdXCYJp30yAxDzW0'

// example: YTSearch({key: API_KEY, term: 'surfboards'}, function(data){ console.log(data)});

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};
// const is an ES6 syntax, similar to var, but cannot overwrite value
// inside the function we have something that looks like html, this is called JSX, a subset of JS that allows us to write what looks like html but is really JS
// Webpack and Babel allow us to translate JSX to be interpreted by browser
// this is a class component, we can think of it as a factory that produces instances of the actual components that get rendered to the DOM
// to pass an instance of the component, not the class we need to instantiate first, which we can do with <App/> (if nothing is inside we can use self-closing tags)

// ES6 also allows us to drop the function keyword and instead use an 'arrow function'



// in order to render an instance of our App class, we need to tell ReactDOM where to put it, so we find the container div in our html document and make our component a child of that div

ReactDOM.render(<App />, document.querySelector('.container'));
