import { combineReducers } from 'redux';

import articles from './articles';
import opensource from './opensource';
import portfolio from './portfolio';

const rootReducer = combineReducers({
  articles,
  opensource,
  portfolio,
});

export default rootReducer;