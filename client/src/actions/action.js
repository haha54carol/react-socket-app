const onEnterRoom = (payload) => ({
    type: 'USER_ENTER_ROOM',
    payload
})

const closeModal = () => ({
    type: 'CLOSE_MODAL'
})


export default {
    onEnterRoom,
    closeModal
}