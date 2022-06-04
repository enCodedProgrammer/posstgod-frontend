import produce from 'immer'

const INITIAL_STATE = {
  planId: null,
  paymentMethodId: null,
}

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@subscription/SUBSCRIPTIONS_REQUEST': {
        draft.loading = true
        break
      }
      case '@subscription/SUBSCRIPTION_SUCCESS': {
        draft.loading = false
        draft.planId = action.payload.planId
        draft.paymentMethodId = action.payload.paymentMethodId
        break
      }
      case '@subscription/SUBSCRIPTION_FAILURE': {
        draft.loading = false
        break
      }
      case '@subscription/SUBSCRIPTION_CANCEL_REQUEST': {
        draft.loading = false
        draft.planId = action.payload.planId
        break
      }
      case '@subscription/SUBSCRIPTION_CANCEL_SUCCESS': {
        draft.loading = false
        break
      }
      case '@subscription/SUBSCRIPTION_CANCEL_FAILURE': {
        draft.loading = false
        break
      }
      default:
    }
  })
}
