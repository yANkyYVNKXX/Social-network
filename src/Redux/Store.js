import { applyMiddleware, combineReducers, createStore } from "redux";
import ProfilePageReducer from "./ProfilePage-Reducer"
import DialogPageReducer from "./DialogPage-Reducer"
import UsersPageReducer from "./UsersPage-Reducer";
import thunk from "redux-thunk";
import AuthReducer from "./Auth-Reducer";
import { reducer } from "redux-form";

let reducers = combineReducers({
    ProfilePage: ProfilePageReducer,
    DialogPage: DialogPageReducer,
    UsersPage: UsersPageReducer,
    Auth: AuthReducer,
    form:reducer,
})

let store = createStore(reducers,applyMiddleware(thunk));
export default store;