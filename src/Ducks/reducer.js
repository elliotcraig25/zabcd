const initialState = {
    z_cur: 'z',
    z_arr: []
}
const reducer = (state = initialState, action)=>{
    const {type, payload}=action
    switch (type){
        case UPDATE_Z_CUR:
            const newState = {...state, z_cur: payload}
            return newState
        // case UPDATE_ARR:
        //     const newState = {...state, z_arr: payload}
        //     return newState
        default:
            return state
    }
}
export default reducer

const UPDATE_Z_CUR = 'UPDATE_Z_CUR'
// const UPDATE_ARR = 'UPDATE_ARR'

export function updateZCur(newZCur){
    return {
        type: UPDATE_Z_CUR,
        payload: newZCur
    }
}

// export function updateZArr(arrItem){
//     return {
//         type: UPDATE_ARR,
//         payload: arrItem
//     }
// }