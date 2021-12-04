import React from 'react';
import AuthStack from './AuthStack';
import { Provider } from 'react-redux';
import {store, persistor} from '../redux/store';
import {PersistGate} from 'redux-persist/integration/react'

 
const Routes = () =>{
    return(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AuthStack/>
            </PersistGate>
            
        </Provider>
    )   
}


export default Routes;


