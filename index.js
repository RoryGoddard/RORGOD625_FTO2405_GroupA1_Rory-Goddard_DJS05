function newStore(reducer) {
    let state = null;
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

    return {
        getState,
        subscribe,
        unsubscribe,
        dispatch
    };
}

const counterReducer = (state = 0, action)



increment(state)
increment(state)
increment(state)
console.log(state)