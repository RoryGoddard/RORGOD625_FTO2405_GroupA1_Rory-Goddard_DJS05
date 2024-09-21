const state = {
    value: 0
}

const increment = (state) => {
    return {
        ...state,
        value: state.value + 1
    }
}

const decrement = (state) => {
    return {
        ...state,
        value: state.value + 1
    }
}

const reset = (state) => {
    return {
        ...state,
        value: state.value + 1
    }
}


increment()
increment()
increment()
console.log(state)