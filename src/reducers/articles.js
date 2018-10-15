import * as types from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case types.SET_ARTICLES:
      // return Object.assign({}, state, action.events);
      return action.articles;

    default:
      return state;
  }
};
