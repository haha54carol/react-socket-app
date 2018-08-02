
import { combineReducers } from 'redux'

const seconds = (state = 'no timer', action) => {
    switch (action.type) {
        case "update_seconds":
            return action.payload
        default:
            return state
    }
}

const twoSeconds = (state = 'no timer', action) => {
    switch (action.type) {
        case "update_2seconds":
            return action.payload
        default:
            return state
    }
}




const root = combineReducers({
    seconds,
    twoSeconds
})

export default root