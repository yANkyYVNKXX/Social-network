
let init = {
    ButtonDisabled:false,
    isFetching:false,
    }



export default function UtilitsReducer(state = init, action) {
  switch (action.type) {
    case 'FETCHING':
        return {
          ...state,
          isFetching:action.data,
        }
      case 'BUTTONS-DISABLED':
      return {
        ...state,
        ButtonDisabled:action.data
      }
    default:
      return state;
  }
}


export const ButtonDisabledAc = (data)=>({type:'BUTTONS-DISABLED',data})
export const isFetchingAc = (data)=>({type:'FETCHING',data})

