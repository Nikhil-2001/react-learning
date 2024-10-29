import {createStore}  from 'redux'
import {configureStore, createSlice} from '@reduxjs/toolkit'

export const INCREMENT = 'increment'

const initialCounterState = {counter: 0, showCounter: true}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter = state.counter + action.payload
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
})

const initialAuthState = {
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        }
    }
})


// const counterReducer = (state = { counter: 0, showCounter: initialState }, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     } else if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     } else if (action.type === 'increase') {
//         return {
//             counter: state.counter + action.increaseby,
//             showCounter: state.showCounter
//         }
//     } else if (action.type === 'toggle'){
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }
//     return state;
// }

const store = configureStore({reducer : { counter: counterSlice.reducer, auth: authSlice.reducer}})

// const counterSubscriber = () => {
//     const latestState = store.getState()
// }

// store.subscribe(counterSubscriber)
export const counterActions = counterSlice.actions
export const authActions = authSlice.actions

export default store;