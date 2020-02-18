import * as actionTypes from '../../actions/actionTypes'
export const changeUsername = (username) => {
    return {
      type: actionTypes.CHANGE_USERNAME,
      username
    }
}