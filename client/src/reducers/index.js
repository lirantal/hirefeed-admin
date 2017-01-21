import { combineReducers } from 'redux';
import visitorsReducer from './visitors';

const rootReducer = combineReducers({
  visitors: visitorsReducer
});

export default rootReducer;