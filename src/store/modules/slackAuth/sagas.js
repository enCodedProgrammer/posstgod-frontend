import { put,call, all, takeLatest } from "@redux-saga/core/effects";
import { setSlackUser } from "./action";
import { GET_SLACK_AUTH } from "./action/slackAction";
import { requestGetUser } from "./requests/slackRequests";

export function* handleGetSlackUser(action){
    try {
        const {data} = yield call(requestGetUser,action.payload)
        yield put(setSlackUser(data))
    } catch (error) {
        console.log(error)
    }
}

export default all([
    takeLatest(GET_SLACK_AUTH,handleGetSlackUser)
])