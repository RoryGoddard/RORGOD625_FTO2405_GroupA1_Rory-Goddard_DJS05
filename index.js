function newStore(reducer) {
    let state = 0;
    let subscribers = 0;

    const getState = function () {
        return state;
    };

    const subscribe = function (subscriber) {
        subscribers.push(subscriber);
    };
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
        value: state.value - 1
    }
}

const reset = (state) => {
    return {
        ...state,
        value: 0
    }
}



increment(state)
increment(state)
increment(state)
console.log(state)