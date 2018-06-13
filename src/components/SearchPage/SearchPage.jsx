import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Stop } from '../Stop/Stop';

export class SearchPageComponent extends Component {
  render () {
    const { searchResult } = this.props;
    if (searchResult && searchResult.matches && searchResult.matches.length > 0) {
      return searchResult.matches.map((result, index) => <Stop key={index} {...result} />);
    } else {
      return 'No results';
    }
  }
}

const mapStateToProps = (state) => ({
  searchResult: state.searchResult
});

export const SearchPage = withRouter(connect(mapStateToProps)(SearchPageComponent));

SearchPageComponent.propTypes = {
  searchResult: PropTypes.string
};
