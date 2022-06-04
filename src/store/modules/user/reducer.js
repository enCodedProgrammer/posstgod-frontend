import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.user;
        draft.roles = action.payload.roles;
        break;
      }
      case '@user/UPDATE_PROFILE_SUCCESS': {
        draft.profile = action.payload.profile;
        break;
      }
      case '@user/UPDATE_TIMEZONE_SUCCESS': {
        draft.profile.workspaces[0].slack_timezone = action.payload.timezone;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.profile = null;
        break;
      }
      case '@auth/GET_USER_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/GET_USER_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
