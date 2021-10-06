import {getUsers} from '../Api'
import { ButtonDisabledAc, isFetchingAc } from './Utilits-Reducer';

let init = {
    items: [],
    totalCount:0,
    currentPage:1,
    }



export default function UsersPageReducer(state = init, action) {
  switch (action.type) {
    
    case 'SET-STATE':
      return {
        ...state,
        items:[...action.data.items],
        totalCount:action.data.totalCount,
      }
    case 'CHANGE-PAGE':
      return {
        ...state,
        currentPage:action.current
      }
    default:
      return state;
  }
}



const SetStateAc = (data)=> ({type:'SET-STATE',data})
const ChangePageAc = (current)=>({type:'CHANGE-PAGE',current})


export const getUsersThunk = (current,term)=> {
  return async (dispatch)=>{
    dispatch(ButtonDisabledAc(true))
    dispatch(isFetchingAc(true))
    const response = await getUsers(current,term)
    dispatch(SetStateAc(response.data))
    dispatch(ButtonDisabledAc(false))
    dispatch(isFetchingAc(false))
    if (current!==undefined){dispatch(ChangePageAc(current))}
    
    
  
}
}