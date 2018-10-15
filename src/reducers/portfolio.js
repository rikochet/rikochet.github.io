import * as types from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case types.SET_PORTFOLIO:
      // return Object.assign({}, state, action.events);
      return action.portfolioItems;

    default:
      return state;
  }
};
