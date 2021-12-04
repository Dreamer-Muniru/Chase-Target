import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AuthReducer from './reducers/AuthReducer';
import {AsyncStorage} from 'react-native'
import {persistStore, persistReducer} from 'redux-persist'

const persistConfig ={
    key: "root",
    storage: AsyncStorage
}


const persistedReducer = persistReducer(persistConfig, AuthReducer)
let store = createStore(persistedReducer, applyMiddleware(thunk))

let persistor = persistStore(store)
export  {store, persistor};