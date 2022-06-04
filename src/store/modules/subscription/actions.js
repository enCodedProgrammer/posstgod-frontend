export function subscriptionRequest({
  workspace,
  paymentMethodId,
  planId,
  clearCard,
  coupon,
}) {
  return {
    type: '@subscription/SUBSCRIPTION_REQUEST',
    payload: {
      workspace,
      paymentMethodId,
      planId,
      clearCard,
      coupon,
    },
  }
}

export function subscriptionSuccess({ paymentMethodId, planId }) {
  return {
    type: '@subscription/SUBSCRIPTION_SUCCESS',
    payload: { paymentMethodId, planId },
  }
}

export function subscriptionFailure() {
  return {
    type: '@subscription/SUBSCRIPTION_FAILURE',
  }
}

export function subscriptionCancelRequest({ workspace, planId }) {
  return {
    type: '@subscription/SUBSCRIPTION_CANCEL_REQUEST',
    payload: {
      workspace,
      planId,
    },
  }
}

export function subscriptionCancelSuccess({ data }) {
  return {
    type: '@subscription/SUBSCRIPTION_CANCEL_SUCCESS',
    payload: {
      data,
    },
  }
}

export function subscriptionCancelFailure() {
  return {
    type: '@invoice/SUBSCRIPTION_CANCEL_FAILURE',
  }
}
