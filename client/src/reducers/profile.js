import * as types from '../actions/actionTypes';

export default function (state = '', action) {
  switch (action.type) {
    case types.PROFILE_ADD:
      // returns the new state
      return { ...state, company: action.company };

    default:
      // if no switch answers the case return an empty state by default
      return state;
  }
}