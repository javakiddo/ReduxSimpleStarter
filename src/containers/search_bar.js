import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      term: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

  }

  onInputChange(event)
  {
    this.setState({term: event.target.value});

  }
  onFormSubmit(event)
  {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});

  }

  render()
  {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input type="text" className="form-control" onChange={this.onInputChange} value={this.state.term} placeholder="Give a five day forcast" aria-label="Search for..."/>
        <span class="input-group-btn">
          <button class="btn btn-secondary" type="button">Submit</button>
        </span>
      </form>

    );
  }

}

function mapDispatchToProps(dispatch) {

  return bindActionCreators({
    fetchWeather
  }, dispatch);

}

export default connect(null, mapDispatchToProps)(SearchBar);
