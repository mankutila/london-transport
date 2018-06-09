import React, {Component} from 'react';
import style from './SearchInput.css';
import { searchStops } from '../../helpers/fetchUtils'

export class SearchInput extends Component {
  state = {
    query: ''
  }

  search = async (query) => {
    this.setState({query})
    console.log(await searchStops(query))
  }

  render() {
    return (
      <div>
        <input
          type="search"
          placeholder="Search stops"
          ref={(searchInput) => { this.searchInput = searchInput }}
        />
        <button onClick={(e) => {
          e.preventDefault();
          this.search(this.searchInput.value)}
        }>
          Search
        </button>
      </div>

    )
  }


}
