import { AppState } from "../../Redux/Store";

export const getChat = (state:AppState) => state.Chat

export const getMyId = (state:AppState)=> state.Auth.id