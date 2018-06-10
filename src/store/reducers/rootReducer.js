import { SET_SEARCH, SET_TAB } from '../actions/actionTypes'

const initialState = {
  currentTab: 'bus',
  searchResult: ''
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TAB:
      return {
        ...state,
        currentTab: action.payload,
      };
    case SET_SEARCH:
      return {
        ...state,
        searchResult: action.payload,
      };

    default:
      return state;
  }
};
