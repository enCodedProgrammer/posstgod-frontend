import { call, put } from "@redux-saga/core/effects";
import { setSlackUser } from "../action/slackAction";
import { createBrowserHistory } from 'history'
import Cookie from 'js-cookie'
import api from "../../../../services/api";

const history = createBrowserHistory()
// export function* handleGetSlackUser({payload}) {
//     const {code} = payload

//     try {
//         const response = yield call(api.post, {
//             code
//         })
//         const { data } = response
//         // Cookie.set('data', JSON.stringify(data), { expires: 7})
//         yield put(setSlackUser(data))
//         history.push('/dashboard')
//     } catch (error) {
//         console.log(error)
//     }
// }