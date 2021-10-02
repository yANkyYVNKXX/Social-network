import {getUsers} from '../Api'

let init = {
    items: [],
    totalCount:0,
    currentPage:1,
    ButtonDisabled:false,
    isFetching:false,
    }



export default function UsersPageReducer(state = init, action) {
  switch (action.type) {
    
    case 'SET-STATE':
      return {
        ...state,
        items:[...action.data.items],
        totalCount:action.data.totalCount,
        ButtonDisabled:false,
        isFetching:false
      }
    case 'FETCHING':
        return {
          ...state,
          isFetching:true,
        }
    case 'CHANGE-PAGE':
      return {
        ...state,
        currentPage:action.current
      }
      case 'BUTTONS-DISABLED':
      return {
        ...state,
        ButtonDisabled:true
      }
    default:
      return state;
  }
}



const SetStateAc = (data)=> ({type:'SET-STATE',data})
const ChangePageAc = (current)=>({type:'CHANGE-PAGE',current})
const ButtonDisabledAc = ()=>({type:'BUTTONS-DISABLED'})
const isFetchingAc = ()=>({type:'FETCHING'})


export const getUsersThunk = (current)=> {
  return (dispatch)=>{
    dispatch(ButtonDisabledAc())
    dispatch(isFetchingAc())
    getUsers(current)
    .then(response=>{
    dispatch(SetStateAc(response.data))
    if (current===undefined){}
    else {
    dispatch(ChangePageAc(current))
  }})}}