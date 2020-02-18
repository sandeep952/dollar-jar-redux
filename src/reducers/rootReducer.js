import {combineReducers} from 'redux'
import dollarJarApp from './dollarJarApp'
import welcomePage from './welcomePage'


const rootReducer = combineReducers({
    dollarJarApp,
    welcomePage
})

export default rootReducer