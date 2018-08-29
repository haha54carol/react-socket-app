let initState = {
    Pikachu: true,
    Charmander:true,
    Bulbasaur: true,
    Squirtle: true
}

const availablePokemon = (state = initState, action) =>{
    switch (action.type){
        case 'USER_ENTER_ROOM':
            return {...state, [action.payload]:false}
       default:
           return state
    }
}


export default availablePokemon
