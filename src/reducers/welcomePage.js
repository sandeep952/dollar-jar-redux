import * as actionTypes from '../actions/actionTypes'

let initialState ={
    username:""
}
const welcomePage = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_USERNAME:
            return {
                ...state,
                username: action.username
            }

        default:
            return state
    }
}

export default welcomePage;