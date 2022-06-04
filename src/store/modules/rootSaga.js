import { all,takeLatest } from 'redux-saga/effects';
// user-org
import auth from './auth/sagas';
import user from './user/sagas';
import slack from './slack/sagas';
import slackAuth from './slackAuth/sagas'
import subscription from './subscription/sagas';
import invoice from './invoice/sagas';

export default function* rootReducer() {
  return yield all([auth, user, slackAuth,slack, subscription, invoice]);
}
