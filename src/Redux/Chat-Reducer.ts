import { InferActions } from "./Store"

type message = {
    userId:number
    userName:string
    message:string
    photo: null | string
}

const initialState = {
    items:[] as Array<message>
}

type InitialState = typeof initialState

const INITCHAT = 'INIT-CHAT'
const NULLCHAT = 'NULL-CHAT'

const chatReducer = (state=initialState, action:Actions):InitialState=>{
    switch(action.type)
    { 
       case INITCHAT:
           return{
               ...state,
               items:[...state.items,...action.payload]
           }
           
        case NULLCHAT:
        return{
                ...state,
                items:[]
         }   
       default: 
           return state
    }

}

type Actions = InferActions<typeof actions>

export const actions = {
   initchatAC: (payload:any)=>{
    return {
        type:INITCHAT,
        payload
    } as const
   },
   nullchatAC: ()=>{
    return {
        type:NULLCHAT,
    } as const
   }
}



export default chatReducer