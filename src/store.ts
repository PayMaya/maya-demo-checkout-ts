import { combineReducers } from 'redux'
import { configureStore } from "@reduxjs/toolkit"
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2"
import thunk from 'redux-thunk'
import { cart, currentUser } from './reducers'

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2
}

const persistentReducer = combineReducers({
    cart: persistReducer<Cart, any>(persistConfig, cart),
    currentUser: persistReducer<User, any>(persistConfig, currentUser)
})

export const updateStore = () => 
    configureStore({
        reducer: persistentReducer,
        middleware: [thunk]
    })