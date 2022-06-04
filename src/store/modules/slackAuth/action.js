import { SET_SLACK_AUTH } from "./action/slackAction";

export const setSlackUser = (user) => ({
    type: SET_SLACK_AUTH,
    user
});

export const LOGOUT_REQUEST = (user)=> ({
    type: LOGOUT_REQUEST,
    user
});

const INITIALSTATE = {
    user: undefined
}