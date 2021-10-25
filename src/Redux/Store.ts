import { applyMiddleware, combineReducers, createStore } from "redux";
import ProfilePageReducer from "./ProfilePage-Reducer"
import DialogPageReducer from "./DialogPage-Reducer"
import UsersPageReducer from "./UsersPage-Reducer";
import thunk from "redux-thunk";
import AuthReducer from "./Auth-Reducer";
import { reducer } from "redux-form";
import UtilitsReducer from "./Utilits-Reducer";
import chatReducer from "./Chat-Reducer";

let reducers = combineReducers({
    ProfilePage: ProfilePageReducer,
    DialogPage: DialogPageReducer,
    UsersPage: UsersPageReducer,
    Auth: AuthReducer,
    form:reducer,
    Utilits: UtilitsReducer,
    Chat: chatReducer
})

type reducers = typeof reducers
export type AppState = ReturnType<reducers>

type ActionTypes<T> = T extends { [key: string]: infer U } ? U : never
export type InferActions<T extends {[key:string]:(...args:any[])=>any}> = ReturnType<ActionTypes<T>>

let store = createStore(reducers,applyMiddleware(thunk));
export default store;