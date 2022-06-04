export function getChannelsRequest(rdxUserId) {
  return {
    type: '@slack/GET_CHANNELS_REQUEST',
    payload: { rdxUserId },
  };
}

export function logout() {
  return {
    type: '@slack/LOGOUT_REQUEST',
  }
}

export function getChannelsSuccess(channels) {
  return {
    type: '@slack/GET_CHANNELS_SUCCESS',
    payload: { channels },
  };
}

export function getChannelsFailure() {
  return {
    type: '@slack/GET_CHANNELS_FAILURE',
  };
}

export function getSettingsRequest(workspaceId) {
  return {
    type: '@slack/GET_SETTINGS_REQUEST',
    payload: { workspaceId },
  };
}

export function getSettingsSuccess(settings) {
  return {
    type: '@slack/GET_SETTINGS_SUCCESS',
    payload: { settings },
  };
}

export function getSettingsFailure() {
  return {
    type: '@slack/GET_SETTINGS_FAILURE',
  };
}

export function getMessagesRequest(rdxUserId) {
  return {
    type: '@slack/GET_MESSAGES_REQUEST',
    payload: { rdxUserId },
  };
}

export function getMessagesSuccess(messages) {
  return {
    type: '@slack/GET_MESSAGES_SUCCESS',
    payload: { messages },
  };
}

export function getMessagesFailure() {
  return {
    type: '@slack/GET_MESSAGES_FAILURE',
  };
}

export function postSettingsRequest(settings) {
  return {
    type: '@slack/POST_SETTINGS_REQUEST',
    payload: { settings },
  };
}

export function postSettingsSuccess(settings) {
  return {
    type: '@slack/POST_SETTINGS_SUCCESS',
    payload: { settings },
  };
}

export function postSettingsFailure() {
  return {
    type: '@slack/POST_SETTINGS_FAILURE',
  };
}

export function postMessageRequest(rdxUserId, formData) {
  return {
    type: '@slack/POST_MESSAGE_REQUEST',
    payload: { rdxUserId, formData },
  };
}

export function postMessageSuccess(message) {
  return {
    type: '@slack/POST_MESSAGE_SUCCESS',
    payload: { message },
  };
}

export function postMessageFailure() {
  return {
    type: '@slack/POST_MESSAGE_FAILURE',
  };
}

export function deleteMessageRequest(messageId) {
  return {
    type: '@slack/DELETE_MESSAGE_REQUEST',
    payload: { messageId },
  };
}

export function deleteMessageSuccess(messageId) {
  return {
    type: '@slack/DELETE_MESSAGE_SUCCESS',
    payload: { messageId },
  };
}

export function deleteMessageFailure() {
  return {
    type: '@slack/DELETE_MESSAGE_FAILURE',
  };
}

export function editMessageRequest(messageId) {
  return {
    type: '@slack/EDIT_MESSAGE_REQUEST',
    payload: { messageId },
  };
}

export function editMessageSuccess(messageId) {
  return {
    type: '@slack/EDIT_MESSAGE_SUCCESS',
    payload: { messageId },
  };
}

export function editMessageFailure() {
  return {
    type: '@slack/EDIT_MESSAGE_FAILURE',
  };
}
