import * as types from '../actions/actionTypes';

export default function (state = [], action) {
  switch (action.type) {
    case types.VISITORS_GET:
      let newState = [ ...action.visitors ];
      return newState;

    default:
      return state;
  }
}