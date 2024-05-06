// Actions
export const increaseNumber = 'INCREASE_NUMBER'
export const decreaseNumber = 'DECREASE_NUMBER'
export const setZeroNumber = 'SET_ZERO_NUMBER'
export const rotateCounterBox = 'ROTATE_COUNTER-BOX'

// Reducer
export default function reducer(state = 0, action) {
    switch (action.type) {
        case increaseNumber: {
            return state + 1
        }
        case decreaseNumber: {
            return state - 1
        }
        case setZeroNumber: {
            return 0
        }
        case rotateCounterBox: {
            state = typeof state === 'number' ? false : state ? true : false 
            return !state
        }
        default: return state
    }
}

// Action Creators
export const increaseNumberAction = () => {
    return {
        type: increaseNumber
    }
}
export const decreaseNumberAction = () => {
    return {
        type: decreaseNumber
    }
}
export const setZeroNumberAction = () => {
    return {
        type: setZeroNumber
    }
}
export const rotateCounterBoxAction = () => {
    return {
        type: rotateCounterBox,

    }
}