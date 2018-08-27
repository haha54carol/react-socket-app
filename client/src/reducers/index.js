
import { combineReducers } from 'redux'
import availablePokemon from './pokemon'
import showModal from './showModal'

const root = combineReducers({
    availablePokemon,
    showModal
})

export default root