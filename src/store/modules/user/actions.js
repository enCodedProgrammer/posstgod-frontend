export function updateProfileRequest(data) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
}

export function updateProfileSuccess(profile) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { profile },
  };
}

export function updateProfilefailure() {
  return {
    type: '@user/UPDATE_PROFILE_FAILURE',
  };
}

export function getUserRequest() {
  return {
    type: '@user/GET_USER_REQUEST',
  };
}

export function getUserFailure() {
  return {
    type: '@user/GET_USER_FAILURE',
  };
}

export function updateTimezoneRequest(workspace, timezone) {
  return {
    type: '@user/UPDATE_TIMEZONE_REQUEST',
    payload: { workspace, timezone },
  };
}

export function updateTimezoneSuccess(timezone) {
  return {
    type: '@user/UPDATE_TIMEZONE_SUCCESS',
    payload: { timezone },
  };
}

export function updateTimezoneFailure() {
  return {
    type: '@user/UPDATE_TIMEZONE_FAILURE',
  };
}
