const initialState = {
    counter: 0,
    isShownCounter: true
}
const counterReducer  = (state = initialState, action) => {
    if(action.type === 'increment'){
        return {
            ...state,
            counter: state.counter + 1
        }
    }

    if(action.type === 'decrement') {
        return {
            ...state,
            counter: state.counter - 1
        }
    }

    if(action.type === 'toggle') {
        return {
            ...state,
            isShownCounter: !state.isShownCounter
        }
    }
    
    if(action.type === 'increase') {
        return {
            ...state,
            counter: state.counter + action.payload
        }
    }

    if(action.type === 'reset') {
        return {
            ...state,
            counter: 0
        }
    }

    return state

}

export default counterReducer