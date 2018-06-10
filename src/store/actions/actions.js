import {SET_TAB, SET_SEARCH} from './actionTypes';

export const setTab = payload => {
  return {
    type: SET_TAB,
    payload
  }
}

export const setSearchResults = payload => {
  return {
    type: SET_SEARCH,
    payload
  }
}
