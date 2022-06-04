import { takeLatest, call, put, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import api from '../../../services/api'
import { invoiceSuccess, invoiceFailure } from './actions'

export function* getInvoices({ payload }) {
  try {
    const { workspaceId } = payload
    const { data } = yield call(
      api.get,
      `/workspace/${workspaceId}/plan/invoice`,
    )
    const transformedData = data.map((invoice) => {
      return {
        id: invoice.id,
        plan_name: invoice.lines.data[0].plan.nickname,
        hosted_invoice_url: invoice.hosted_invoice_url,
        invoice_pdf: invoice.invoice_pdf,
        amount_due: invoice.amount_due,
        amount_paid: invoice.amount_paid,
        status_transitions: invoice.status_transitions,
      }
    })

    yield put(invoiceSuccess({ data: transformedData }))
  } catch (err) {
    toast.error(`Something went wrong while getting the invoices!`)

    yield put(invoiceFailure())
  }
}

export default all([takeLatest('@invoice/INVOICES_REQUEST', getInvoices)])
