import { SET_SLACK_AUTH } from "./action/slackAction";
import {LOGOUT_REQUEST} from "./action";

const INITIALSTATE = {
    user: undefined
}
export default (state = INITIALSTATE, action) => {
    switch (action.type) {
        case SET_SLACK_AUTH:
            const { user } = action
            return { ...state, user }
        case LOGOUT_REQUEST: {
            const { user } = action
            return { ...state, user }
        break;
          }
        default:
            return state
            
    }
}