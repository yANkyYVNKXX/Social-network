import { InferActions } from "./Store"

let initialState = {
    ButtonDisabled:false,
    isFetching:false,
    }

const FETCHING = 'FETCHING'
const BUTTONSDISABLED = 'BUTTONS-DISABLED'
type initialStateType = typeof initialState


export default function UtilitsReducer(state:initialStateType = initialState, action: ActionsUtilits):initialStateType {
  switch (action.type) {
    case FETCHING:
        return {
          ...state,
          isFetching:action.data,
        }
      case BUTTONSDISABLED:
      return {
        ...state,
        ButtonDisabled:action.data,
      }
    default:
      return state;
  }
}

export type ActionsUtilits = InferActions<typeof actionsUtilits>

export const actionsUtilits = {
  ButtonDisabledAc: (data:boolean)=>({type:'BUTTONS-DISABLED',data}),
  isFetchingAc: (data:boolean)=>({type:'FETCHING',data})
}

 
