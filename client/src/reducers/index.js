
import { combineReducers } from 'redux'
import availablePokemon from './pokemon'
import user from './user'

const root = combineReducers({
    availablePokemon,
    user
})

export default root