import * as types from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case types.SET_OPENSOURCE:
      // return Object.assign({}, state, action.events);
      return action.openSourceItems;

    default:
      return state;
  }
};
