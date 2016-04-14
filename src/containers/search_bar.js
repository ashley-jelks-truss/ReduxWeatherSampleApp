import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ' ' };

    this.onInputChange = this.onInputChange.bind(this);
    // Use the bind method here to bind the context this from the onInputChange called in the render method below to be the same this when this.setState is called
    //Do this to carry the the context from it's initial callback to the next, b/c this in the render context != this in the onInputChange method context
  }

  onInputChange(event) {
    console.log(this);
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            placeholder="Get a five-day forecast"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange} />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-primary">Submit</button>
          </span>
        </form>
    );
  }
}
