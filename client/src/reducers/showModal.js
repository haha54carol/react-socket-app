const showModal = (state = true, action) =>{
    switch (action.type){
        case 'USER_ENTER_ROOM':
            return !state
        case 'CLOSE_MODAL':
            return false
        default:
            return state
    }
}


export default showModal