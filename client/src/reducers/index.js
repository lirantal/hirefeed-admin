import { combineReducers } from 'redux';
import visitorsReducer from './visitors';
import profileReducer from './profile';

const rootReducer = combineReducers({
  visitors: visitorsReducer,
  profile: profileReducer
});

export default rootReducer;