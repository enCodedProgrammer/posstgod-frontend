export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token, user, roles) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user, roles },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}

export function recoverPasswordRequest(email) {
  return {
    type: '@auth/RECOVER_PASSWORD_REQUEST',
    payload: { email },
  };
}

export function recoverPasswordFailure() {
  return {
    type: '@auth/RECOVER_PASSWORD_FAILURE',
  };
}
