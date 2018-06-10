import React, {Component} from 'react';
import style from './SearchInput.css';
import { searchStops } from '../../helpers/fetchUtils'

export class SearchInput extends Component {
  search = async (query) => {
    this.setState({query})
    console.log(await searchStops(query))
  }

  render() {
    return (
      <form className={style.wrapper}
            onSubmit={(e) => {
              e.preventDefault();
              this.search(this.searchInput.value)
            }}
            >
        <input
          className={style.input}
          type="search"
          placeholder="Search stops"
          ref={(searchInput) => { this.searchInput = searchInput }}
        />
        <button className={style.btn}>Search</button>
      </form>

    )
  }
}
