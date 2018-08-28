const onEnterRoom = (payload) => ({
    type: 'USER_ENTER_ROOM',
    payload
})

const setUser = (payload) => ({
    type: 'SET_USER',
    payload
})


export default {
    onEnterRoom,
    setUser
}