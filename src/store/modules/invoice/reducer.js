import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  isLoading: false,
  error: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@invoice/INVOICES_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@invoice/INVOICES_SUCCESS': {
        draft.loading = false;
        draft.data = action.payload;
        break;
      }
      case '@invoice/INVOICES_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
