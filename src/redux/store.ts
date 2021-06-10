import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import thunkMiddleware from "redux-thunk";
import {InitialReducer} from "./initialReducer";
import {ProfileReducer, sagaWatcher} from "./profileReducer";


let rootReducer = combineReducers({
    initialPage: InitialReducer,
    profilePage: ProfileReducer,

})
const sagaMiddleware = createSagaMiddleware();
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware), applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(sagaWatcher)

type reducersType = typeof rootReducer
export type AppStateType = ReturnType<reducersType>
declare global {
    interface Window { store: AppStateType; }
}
//@ts-ignore
window.store = store
export default store
