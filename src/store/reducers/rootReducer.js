import {SET_TAB} from '../actions/actionTypes';

const initialState = {
  currentTab: 'bus'
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TAB:
      return {
        ...state,
        currentTab: action.payload,
      };

    default:
      return state;
  }
};
