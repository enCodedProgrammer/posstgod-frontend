import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'POSTGOD',
      storage,
      whitelist: ['auth', 'user', 'slack','slackAuth'],
    },
    reducers
  );

  return persistedReducer;
};
