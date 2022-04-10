const initialState = {
    isAuthenticated: false
}

const authReducer = (state = initialState, action) => {
    console.log(action.type, 'sdfsfsdf')
    if(action.type === 'login') {
        return {
            ...state,
            isAuthenticated: true
        }
    }


    if(action.type === 'logout') {
        return {
            ...state,
            isAuthenticated: false
        }
    }

    return state

}

export default authReducer