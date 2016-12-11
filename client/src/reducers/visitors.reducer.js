'use strict';

import * as types from '../actions/actionTypes';

const INTIAL_STATE = { visitors: '' };

export default function (state = INTIAL_STATE, action) {

  switch (action.type) {
    case types.GET_VISITORS:
      let newState = { ...state, visitors: action.visitors };
      return newState;
  }

  return state;

}