import { combineReducers } from 'redux';
import cookie from './cookie';

const rootReducer = combineReducers({
  cookie
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
