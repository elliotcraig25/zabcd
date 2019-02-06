const initialState = {
    z_cur: 'z',
}
const reducer = (state = initialState, action)=>{
    const {type, payload}=action
    switch (type){
        case UPDATE_Z_CUR:
            const newState = {...state, z_cur: payload}
            return newState
        default:
            return state
    }
}
export default reducer

const UPDATE_Z_CUR = 'UPDATE_Z_CUR'

export function updateZCur(newZCur){
    return {
        type: UPDATE_Z_CUR,
        payload: newZCur
    }
}