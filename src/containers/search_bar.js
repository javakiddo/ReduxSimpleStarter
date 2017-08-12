import React, {Component} from 'react';

export default class SearchBar extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      term: ''
    };

  }

  render()
  {
    return (
      <form className="input-group">
        <input type="text" className="form-control" placeholder="Give a five day forcast" aria-label="Search for..."/>
        <span class="input-group-btn">
          <button class="btn btn-secondary" type="button">Submit</button>
        </span>
      </form>

    );
  }

}
