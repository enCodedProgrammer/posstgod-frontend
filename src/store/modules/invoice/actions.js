export function invoicesRequest({ workspaceId }) {
  return {
    type: '@invoice/INVOICES_REQUEST',
    payload: { workspaceId },
  };
}

export function invoiceSuccess({ data }) {
  return {
    type: '@invoice/INVOICES_SUCCESS',
    payload: data,
  };
}

export function invoiceFailure() {
  return {
    type: '@invoice/INVOICES_FAILURE',
  };
}
