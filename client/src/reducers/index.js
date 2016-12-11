'use strict';

import { combineReducers } from 'redux';
import VisitorsReducer from './visitors.reducer';

const reducer = combineReducers({
  visitors: VisitorsReducer,
});

export default reducer;