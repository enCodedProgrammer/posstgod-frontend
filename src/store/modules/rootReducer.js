import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
// user-org
import auth from './auth/reducer';
import user from './user/reducer';
import slack from './slack/reducer';
import subscription from './subscription/reducer';
import slackAuth from './slackAuth/reducers'
import invoice from './invoice/reducer';
import slackAction from './slackAuth/action/slackAction';
const appReducer = combineReducers({
  auth,
  user,
  slack,
  subscription,
  invoice,
  slackAuth
});

const rootReducer = (state, action) => {
  if (action.type === '@auth/SIGN_OUT') {
    // cleaning all persisted data

    storage.removeItem('persist:POSTGOD');
    // storage.removeItem('persist:otherKey')

    // reseting all states
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
