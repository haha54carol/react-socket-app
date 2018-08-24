
const initState = {
    Pikachu: true,
    Charmander:true,
    Bulbasaur: true,
    Squirtle: true
}

const availablePokemon = (state = initState, action) =>{
    switch (action.type){
        case 'SELECTEDUSER':
            return {...state, [action.payload]:false}

       default:
           return state
    }
}

export default availablePokemon