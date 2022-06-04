export const GET_SLACK_AUTH = "GET_SLACK_AUTH"
export const SET_SLACK_AUTH = "SET_SLACK_AUTH"
export const LOGOUT= "LOGOUT_REQUEST"

// slack auth actions
export const getSlackAuth = (code) => ({
    type: GET_SLACK_AUTH,
    payload:{code}
})

export const setSlackUser = (user) => ({
    type: SET_SLACK_AUTH,
    user
})

// export const LOGOUT_REQUEST = (user)=> ({
//     type: LOGOUT_REQUEST,
//     user
// });

const initialState={
    user:undefined
}


// slackauth reducer
export default (state=initialState, action)=>{
    switch(action.type){
        case SET_SLACK_AUTH:
            const {user} = action
            return {...state,user}
        default:
            return state
    }
}