import { takeLatest, call, put, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import api from '../../../services/api'
import history from '../../../services/history'
import { signInSuccess, signFailure, recoverPasswordFailure } from './actions'

export function* signIn({ payload }) {
  try {
    const { email, password } = payload

    const { data } = yield call(api.post, '/user/login', {
      email,
      password,
    })

    const { user, token } = data

    api.defaults.headers.Authorization = `Baerer ${token}`

    yield put(signInSuccess(token, user))
    history.push('/billing')
  } catch (err) {
    toast.error('Error in Authentication, check your email and password')
    yield put(signFailure())
  }
}

export function setToken({ payload }) {
  if (!payload) return
  const { token } = payload.auth
  if (token) {
    api.defaults.headers.Authorization = `Baerer ${token}`
  }
}

export function signOut() {
  history.push('/')
}

export function* recoverPassword({ payload }) {
  try {
    const { email } = payload

    const res = yield call(api.post, '/user/email/password', { email })

    if (res.status === 200) {
      toast.success('Email containing password sent successfully!')
    }

    history.push('/login')
  } catch (err) {
    toast.error('Error in Password Recovery. Check if the email is correct.')
    yield put(recoverPasswordFailure())
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
  takeLatest('@auth/RECOVER_PASSWORD_REQUEST', recoverPassword),
])
