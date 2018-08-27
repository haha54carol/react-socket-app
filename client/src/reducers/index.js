
import { combineReducers } from 'redux'
import availablePokemon from './pokemon'

const root = combineReducers({
    availablePokemon,
})

export default root