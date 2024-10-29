const redux = require('redux')

const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    } else if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }
    return state;
}

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
    const latestState = store.getState()
    console.log('From subscriber', latestState)
}

console.log(store.getState())

store.subscribe(counterSubscriber)

store.dispatch({ type: 'increment' })
store.dispatch({ type: 'decrement' })