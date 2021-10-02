import { getProfile, getStatus, sendStatus } from "../Api"

let init = {
posts: [{ id: 1, text: 'Hi bro' },
{ id: 2, text: 'Hi sister' },
{ id: 3, text: 'Hi sister' },
{ id: 4, text: 'Hi sister' }],
messageText: 'Hello',
profile:
    {
        aboutMe: '',
        contacts: {
        facebook: null,
        website: null,
        vk: null,
        twitter: null,
        instagram: null,
        youtube: null,
        github: null,
        mainLink: null
        },
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: '',
        userId: -1,
        photos: {
        small: null,
        large: null
        }
        },
status:''
}


export default function ProfilePageReducer (state=init, action) {
    switch(action.type) {
    case 'ADD-POST':
    let newPost = {
        id: 5,
        text: state.messageText,
    }
     return {
         ...state,
         posts:[...state.posts, newPost],
         messageText:''
     }
    case 'SET-STATE-PROFILE':
     return {
         ...state, 
         profile: {...action.data}
     }
    case 'UPDATE-TEXT':
        return {
            ...state,
            messageText: action.message,
        }
    case 'SET-STATUS':
        return {
            ...state,
            status:action.data
        }
    default:
        return state;
}
}

const SetStateProfileAc =(response)=> {
    return {
        type:'SET-STATE-PROFILE', 
        data:response
    }
}

const SetStatusAc = (response)=>{
    return {
        type:'SET-STATUS',
        data:response
    }
}

export const getProfileThunk = (user)=>{
  
    return(dispatch)=>{
       getProfile(user)
       .then(response=> dispatch(SetStateProfileAc(response.data)))
    }

}

export const getStatusThunk = (user)=>{
    return(dispatch)=>{
        getStatus(user).
        then (response=>dispatch(SetStatusAc(response.data)))
    }
}

export const sendStatusThunk = (StatusText,user)=>{
    return(dispatch)=>{
        sendStatus(StatusText)
        .then(()=>getStatus(user).then(response=>dispatch(SetStatusAc(response.data))))
    }
}