import { takeLatest, call, put, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import api from '../../../services/api'
import { signInSuccess } from '../../../store/modules/auth/actions'
import {
  getUserFailure,
  updateProfileSuccess,
  updateProfilefailure,
  updateTimezoneSuccess,
  updateTimezoneFailure,
} from './actions'

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data

    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassword ? rest : {}),
    }

    const response = yield call(api.put, 'users', profile)

    toast.success('Profile updated successfully!')

    yield put(updateProfileSuccess(response.data))
  } catch (error) {
    toast.error('Something went wrong while updating the profile!')
    yield put(updateProfilefailure())
  }
}

export function* getUser() {
  try {
    const { data } = yield call(api.get, '/user')

    yield put(signInSuccess(null, data))
  } catch (error) {
    yield put(getUserFailure())
  }
}

export function* updateTimezone({ payload }) {
  const { timezone, workspace } = payload
  try {
    yield call(api.put, `/workspace/${workspace.id}/timezone`, { timezone })
    yield put(updateTimezoneSuccess(timezone))
    toast.success('Timezone updated successfully!')
  } catch (error) {
    toast.error('Something went wrong while updating the timezone!')
    yield put(updateTimezoneFailure())
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
  takeLatest('@user/UPDATE_TIMEZONE_REQUEST', updateTimezone),
  takeLatest('@user/GET_USER_REQUEST', getUser),
])
