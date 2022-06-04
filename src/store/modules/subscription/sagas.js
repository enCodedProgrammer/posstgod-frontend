import { takeLatest, call, put, all } from 'redux-saga/effects'
import moment from 'moment'
import { toast } from 'react-toastify'
import api from '../../../services/api'
import {
  subscriptionSuccess,
  subscriptionFailure,
  // subscriptionCancelRequest,
  subscriptionCancelSuccess,
  subscriptionCancelFailure,
} from './actions'
import { getUserRequest } from '../user/actions'
import { invoicesRequest } from '../invoice/actions'
import { store } from '../../../store'

export function* subscribe({ payload }) {
  try {
    const { paymentMethodId, planId, clearCard, workspace, coupon } = payload

    api.interceptors.request.use((config) => {
      const { token } = store.getState().auth
      config.headers.Authorization = `Bearer ${token}`

      return config
    })

    const { data } = yield call(api.post, `/workspace/${workspace._id}/plan`, {
      payment_method_id: paymentMethodId,
      plan_id: planId,
      coupon,
    })

    clearCard()

    const date = moment().add(1, 'month').format('MM/DD/YYYY')

    toast.success(`Thank you for signing up for our monthly plan.
    Your next billing period will be on ${date}
    You will be charged $ ${data.plan.price} monthly.`)

    yield put(subscriptionSuccess({ paymentMethodId, planId }))
    yield put(getUserRequest())
    yield put(invoicesRequest({ workspaceId: workspace._id }))
  } catch (err) {
    console.error(err)
    if (err.response) {
      toast.error(
        `It was not possible to finish this operation: ${err.response.data.message}`,
      )
    } else {
      toast.error(`Something went wrong while subscribing to a plan!`)
    }
    yield put(subscriptionFailure())
  }
}

export function* subscriptionCancel({ payload }) {
  try {
    console.log('we are trying to cancel plan')
    const { planId, workspace } = payload

    api.interceptors.request.use((config) => {
      const { token } = store.getState().auth
      config.headers.Authorization = `Bearer ${token}`

      return config
    })

    const { data } = yield call(
      api.delete,
      `/workspace/${workspace._id}/plan`,
      {
        plan_id: planId,
      },
    )

    toast.success(
      `Your subscription has been successfully canceled. Its sad to see you leave. We'll miss you.`,
    )

    yield put(subscriptionCancelSuccess({ data }))
    yield put(getUserRequest())
    yield put(invoicesRequest({ workspaceId: workspace._id }))
  } catch (err) {
    console.error(err)
    if (err.response) {
      toast.error(
        `It was not possible to finish this operation: ${err.response.data.message}`,
      )
    } else {
      toast.error(`Something went wrong while canceling this subscription!`)
    }
    yield put(subscriptionCancelFailure())
  }
}

export default all([
  takeLatest('@subscription/SUBSCRIPTION_REQUEST', subscribe),
  takeLatest('@subscription/SUBSCRIPTION_CANCEL_REQUEST', subscriptionCancel),
])
