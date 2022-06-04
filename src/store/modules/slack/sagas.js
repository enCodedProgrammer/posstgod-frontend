import {
  takeLatest,
  call,
  put,
  all,
  delay,
  takeEvery,
} from 'redux-saga/effects'
import { toast } from 'react-toastify'
import moment from 'moment'
import api from '../../../services/api'
import {
  getChannelsSuccess,
  getChannelsFailure,
  getSettingsSuccess,
  getSettingsFailure,
  postSettingsSuccess,
  postSettingsFailure,
  postMessageSuccess,
  postMessageFailure,
  deleteMessageSuccess,
  deleteMessageFailure,
  editMessageSuccess,
  editMessageFailure,
  getMessagesFailure,
  getMessagesSuccess,
} from './actions'
import { store } from '../../../store'
import history from '../../../services/history'

export function* getChannels({ payload }) {
  try {
    const { rdxUserId } = payload

    // api.interceptors.request.use((config) => {
    //   const { token } = store.getState().slackAuth.user
    //   config.headers.Authorization = `Bearer ${token}`

    //   return config
    // })

    const { data } = yield call(api.get, `/workspace/${rdxUserId}/channels`)

    yield put(getChannelsSuccess(data))
  } catch (err) {
    yield put(getChannelsFailure())

    toast.error('Something went wrong while getting the channels!')
  }
}

// export function* logout() {

// }
export function* getSettings({ payload }) {
  try {
    const { workspaceId } = payload

    const { data } = yield call(api.get, `/workspace/${workspaceId}/scheduling`)

    yield put(getSettingsSuccess(data))
  } catch (err) {
    yield put(getSettingsFailure())

    toast.error('Something went wrong while getting workspace settings!')
  }
}

function* scheduleDeleteMessage(message) {
  const then = moment(message.slack_message_post_at).utcOffset(+0)
  const duration = moment.duration(then.diff(moment()));
  console.log("duration", duration)

    // .message.slack_message_post_at
    // .diff(moment.utc(), 'milliseconds')

  yield delay(duration)
  yield put(deleteMessageSuccess(message._id))
}

export function* getMessage({payload}) {
  try {
    const { rdxUserId } = payload
    const { data } = yield call(api.get, `/message/${rdxUserId}`)
    yield put(getMessagesSuccess(data.data))

    for (const message of data.data) {
      yield scheduleDeleteMessage(message)
    }
  } catch (error) {
    // toast.error('Something went wrong while getting the messages!')
    yield put(getMessagesFailure())
  }
}

export function* postSettings({ payload }) {
  try {
    const { settings } = payload

    const { data } = yield call(
      api.post,
      `/workspace/${settings.workspace_id}/scheduling`,
      settings,
    )

    yield put(postSettingsSuccess(data))

    toast.success('Settings updated successfully!')
  } catch (err) {
    yield put(postSettingsFailure())

    toast.error(`Something went wrong while updating settings!`)
  }
}

export function* postMessage({ payload }) {
  try {
    const { rdxUserId, formData } = payload

    const { data } = yield call(
      api.post,
      `/workspace/${rdxUserId}/schedule`,
      formData,
      { 'Content-Type': 'multipart/form-data' },
    )

    yield put(postMessageSuccess(data))

    toast.success('Message scheduled successfully!')

    yield scheduleDeleteMessage(data)
  } catch (err) {
    yield put(postMessageFailure())
    if (err.response) {
      if (err.response.status === 403) {
        toast.error(`You must subscribe to a plan to execute this action!`)
        history.push('/billing')
      } else {
        toast.error(
          `Error while scheduling a message: ${err.response.data.message}`,
        )
      }
    } else {
      toast.error(`Something went wrong while scheduling the message!`)
    }
  }
}

export function* deleteMessage({ payload }) {
  const { messageId } = payload

  try {
    yield call(api.delete, `/message/${messageId}`)

    yield put(deleteMessageSuccess(messageId))
    toast.success('Scheduled Message Deleted')
  } catch (error) {
    toast.error('Something went wrong while deleting the message')
    yield put(deleteMessageFailure())
  }
}

export function* editMessage({ payload }) {
  const { messageId } = payload

  try {
    yield call(api.patch, `/message/${messageId}`)

    yield put(editMessageSuccess(messageId))
    toast.success('Scheduled Message Edited')
  } catch (error) {
    toast.error('Something went wrong while editing the message')
    yield put(editMessageFailure())
  }
}

export default all([
  takeLatest('@slack/GET_CHANNELS_REQUEST', getChannels),
  takeLatest('@slack/GET_SETTINGS_REQUEST', getSettings),
  takeLatest('@slack/GET_MESSAGES_REQUEST', getMessage),
  takeLatest('@slack/POST_SETTINGS_REQUEST', postSettings),
  takeLatest('@slack/POST_MESSAGE_REQUEST', postMessage),
  takeLatest('@slack/DELETE_MESSAGE_REQUEST', deleteMessage),
  takeLatest('@slack/EDIT_MESSAGE_REQUEST', editMessage),
  takeEvery('SCHEDULE_DELETE_MESSAGE', scheduleDeleteMessage),
])
