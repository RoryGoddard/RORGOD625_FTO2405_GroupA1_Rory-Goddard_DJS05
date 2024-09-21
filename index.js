function newStore(reducer) {
    let state = 0;
    let subscribers = [];

    // Get the state
    const getState = function () {
        return state;
    };

    // Add a subscriber function to the subscribers array
    const subscribe = function (subscriber) {
        subscribers.push(subscriber);
    };

    // Remove a subscriber function from the subscribers array
    const unsubscribe = function (subscriber) {
        subscribers.filter(item => item !== subscriber);
    };

    // Dispatch an action to modify the state
    const dispatch = function (action) {
        state = reducer(state, action); // Reducer updates the state
        subscribers.forEach(subscriber => subscriber()) // Notify all subscribers of update to state
    }
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