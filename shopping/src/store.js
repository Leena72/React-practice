import {combineReducers} from 'redux';
import { createStore } from 'redux';
import productReducer from './productReducer';
import shoppingCartReducer from './shoppingCartReducer'
import totalReducer from './totalReducer';
import {BillingAddress} from './BillingAddress';

const rootReducer = combineReducers({
    productReducer,
    shoppingCartReducer,
    totalReducer,
   
    BillingAddress,
})

export const store = createStore(
    rootReducer,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );