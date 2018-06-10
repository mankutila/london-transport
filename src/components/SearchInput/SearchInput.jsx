import React, {Component} from 'react';
import style from './SearchInput.css';
import { searchStops } from '../../helpers/fetchUtils'
import {setSearchResults} from '../../store/actions/actions'
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

export class SearchInputComponent extends Component {
  search = async (query) => {
    const {history, setSearchResult} = this.props;
    setSearchResult(await searchStops(query));
    history.push('/search');
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
        <button className={style.btn} title="Search stops">Search</button>
      </form>

    )
  }
}

const mapStateToProps = (state) => ({
  searchResult: state.searchResult
});

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchResult: query => {
      dispatch(setSearchResults(query));
    }
  }
};

export const SearchInput = withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchInputComponent));