import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { usersAPI } from '../Api'
import { profile, users, Users } from '../Types/Types';
import { AppState, InferActions } from './Store';
import { ActionsUtilits, actionsUtilits } from './Utilits-Reducer';


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SETUSERS = 'SET-USERS'
const CHANGEPAGE = 'CHANGE-PAGE'

let initialState = {
    items: [] as Array <users>,
    totalCount:0,
    currentPage:1 as number | undefined | null,
    }

type initialStateType = typeof initialState

export default function UsersPageReducer(state:initialStateType = initialState, action:Actions):initialStateType {
  switch (action.type) {
    
    case SETUSERS:
      return {
        ...state,
        items:[...action.data.items],
        totalCount:action.data.totalCount,
      }
    case CHANGEPAGE:
      return {
        ...state,
        currentPage:action.current
      }
    case FOLLOW: {
      const index = state.items.findIndex(u=>u.id == action.userId)
      state.items[index].followed = action.followed
      return {
        ...state,
        items:[...state.items]
      }
    }
    case UNFOLLOW: {
      const index = state.items.findIndex(u=>u.id == action.userId)
      state.items[index].followed = action.followed
      return {
        ...state,
        items:[...state.items]
      }
    }
    default:
      return state;
  }
}

type Actions = InferActions<typeof actions>



export let actions = {
  SetUsersAc:(data:Users)=> ({type: SETUSERS, data} as const),
  ChangePageAc:(current:number | undefined | null)=>({type: CHANGEPAGE, current} as const),
  FollowAc:(userId:number, followed:boolean)=>({type: FOLLOW, userId, followed} as const),
  UnfollowAc:(userId:number, followed:boolean)=>({type: UNFOLLOW, userId, followed} as const)
}



type ThunkType = ThunkAction<Promise<void>,AppState,unknown, Actions>

export const getUsersThunk = (current:number | undefined | null,term:string | null | undefined):ThunkType=> {
  return async (dispatch:Dispatch<Actions | ActionsUtilits>)=>{
    dispatch(actionsUtilits.ButtonDisabledAc(true))
    dispatch(actionsUtilits.isFetchingAc(true))
    const response = await usersAPI.getUsers(current,term)
    dispatch(actions.SetUsersAc(response.data))
    dispatch(actionsUtilits.ButtonDisabledAc(false))
    dispatch(actionsUtilits.isFetchingAc(false))
    if (current!==undefined){dispatch(actions.ChangePageAc(current))}  
}
}

export const followThunk = (userId:number, button:HTMLInputElement)=>{
  return (dispatch:Dispatch<Actions>)=>{
    button.disabled = true
    usersAPI.follow(userId)
    .then (()=>dispatch(actions.FollowAc(userId, true)))
    .catch((e)=>alert(e))
    .finally(()=>button.disabled = false)
}
}

export const unfollowThunk = (userId:number, button:HTMLInputElement)=>{
  return (dispatch:Dispatch<Actions>)=>{
    button.disabled = true
    usersAPI.unfollow(userId)
    .then (()=>dispatch(actions.UnfollowAc(userId, false)))
    .catch((e)=>alert(e))
    .finally(()=>button.disabled = false)
  }
}