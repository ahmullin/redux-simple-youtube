// still need to include react library because we will need to translate JSX into JS

import React, { Component } from 'react';


// we will define a component that will generate an HTML input a user can type into


class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: "" }
    this.onInputChange = this.onInputChange.bind(this)
  }

  render() {
    return (
      <div>
        <input
        value={this.state.term}
        onChange={this.onInputChange}/>
      </div>
    )
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }
}

// class-based component, which means it can keep track of its own state
// we can either write React.Component or Component since we imported Component from 'react'

// we also need to export our element so that our other components have access to it
export default SearchBar;
// any other file that imports our SearchBar will have access to it
