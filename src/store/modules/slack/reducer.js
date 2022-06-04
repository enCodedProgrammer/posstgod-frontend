import produce from 'immer';

const INITIAL_STATE = {
  channels: [],
  settings: null,
  messages: [],
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@slack/GET_CHANNELS_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@slack/LOGOUT_REQUEST': {
        draft.channels = [];
        draft.messages = [];
        break;
      }
      case '@slack/GET_CHANNELS_SUCCESS': {
        draft.channels = action.payload.channels;
        draft.loading = false;
        break;
      }
      case '@slack/GET_CHANNELS_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@slack/GET_SETTINGS_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@slack/GET_SETTINGS_SUCCESS': {
        draft.settings = action.payload.settings;
        draft.loading = false;
        break;
      }
      case '@slack/GET_SETTINGS_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@slack/GET_MESSAGES_REQUEST': {
        draft.loading = false;
        break;
      }
      case '@slack/GET_MESSAGES_SUCCESS': {
        draft.messages = action.payload.messages;
        draft.loading = false;
        break;
      }
      case '@slack/GET_MESSAGES_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@slack/POST_SETTINGS_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@slack/POST_SETTINGS_SUCCESS': {
        draft.settings = action.payload.settings;
        draft.loading = false;
        break;
      }
      case '@slack/POST_SETTINGS_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@slack/POST_MESSAGE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@slack/POST_MESSAGE_SUCCESS': {
        draft.messages = [...draft.messages, action.payload.message];
        draft.loading = false;
        break;
      }
      case '@slack/POST_MESSAGE_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@slack/DELETE_MESSAGE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@slack/DELETE_MESSAGE_SUCCESS': {
        draft.loading = false;
        draft.messages = draft.messages.filter(
          (p) => p._id !== action.payload.messageId
        );
        break;
      }
      case '@slack/DELETE_MESSAGE_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@slack/EDIT_MESSAGE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@slack/EDIT_MESSAGE_SUCCESS': {
        draft.loading = false;
        const filteredMessages = draft.messages.filter(
          (p) => p._id !== action.payload.messageId
        );
        draft.messages = [...filteredMessages, action.payload.message];
        break;
      }
      case '@slack/EDIT_MESSAGE_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
