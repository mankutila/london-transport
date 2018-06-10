import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

export class SearchPageComponent extends Component {
  render() {
    console.log(this.props.searchResult);
    return 'abc'
  }
}

const mapStateToProps = (state) => ({
  searchResult: state.searchResult
});

export const SearchPage = withRouter(connect(mapStateToProps)(SearchPageComponent));