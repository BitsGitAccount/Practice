import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './todoSlice';

export const store = configureStore({
    reducer: {
        todos: todoReducer
    }
})

// configureStore() → A Redux Toolkit function that sets up the store easily (no boilerplate).
// reducer: {} → Placeholder for now; we’ll add our todo reducer in the next step.
// store.getState() → Lets us see the current state of the store. Should log {} at this point.