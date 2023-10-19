import { applyMiddleware ,combineReducers ,legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk'
import  auth  from './reducers';


const rootReducer = combineReducers(
    auth
)

export const store = createStore(rootReducer, applyMiddleware(thunk) )

export type RootState = ReturnType<typeof store.getState>  // тип состояния 
export type AppDispatch = typeof store.dispatch            // тип диспатча 
   
