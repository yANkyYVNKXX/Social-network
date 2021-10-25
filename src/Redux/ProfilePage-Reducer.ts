
import { AppState, InferActions } from './Store';
import { profileAPI, response } from './../Api';
import { post, profile, profileUPD } from "../Types/Types"
import { ActionsUtilits, actionsUtilits } from "./Utilits-Reducer"
import { Dispatch } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { ResolveThunks } from 'react-redux';


let initialState = {
    posts: [
        { id: 1, text: 'Hi bro' },
        { id: 2, text: 'dsadasdasd' },
        { id: 3, text: 'dasdasdas' },
        { id: 4, text: 'dsadasdsa' },
        { id: 5, text: 'dsadasdsa' },
        { id: 6, text: 'dsadasdsa' },
        { id: 7, text: 'dsadasdsa' },
        { id: 8, text: 'dsadasdsa' },
    ] as Array<post>,
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
            large: null,
        }
    } as profile,
    status: ''
}

type initialStateType = typeof initialState

export default function ProfilePageReducer(state:initialStateType = initialState, action: ActionsProfile):initialStateType {
    switch (action.type) {
        case 'SET-STATE-PROFILE':
            return {
                ...state,
                profile: { ...action.data }
            }
        case 'SET-STATUS':
            return {
                ...state,
                status: action.data
            }
        default:
            return state;
    }
}


export type ActionsProfile = InferActions<typeof actions>

const actions = {
    SetStateProfileAc: (data:profile) => {
        return {
            type: 'SET-STATE-PROFILE',
            data
        } as const
    },
    
    SetStatusAc: (data:string) => {
        return {
            type: 'SET-STATUS',
            data
        } as const
    },

}



export const getProfileThunk = (user:number | null) => {

    return (dispatch:Dispatch<ActionsUtilits | ActionsProfile>) => {
        profileAPI.getProfile(user)
            .then(data => dispatch(actions.SetStateProfileAc(data)))
    }

}

export const getStatusThunk = (user:number) => {
    return (dispatch:Dispatch<ActionsUtilits | ActionsProfile>) => {
        profileAPI.getStatus(user).
            then(data => dispatch(actions.SetStatusAc(data)))
    }
}

export const sendStatusThunk = (StatusText:string, user:number | null) => {
    return (dispatch:Dispatch<ActionsUtilits | ActionsProfile>) => {
        profileAPI.updStatus(StatusText)
            .then(() => profileAPI.getStatus(user).then(data => dispatch(actions.SetStatusAc(data))))
    }
}

export const updProfileThunk = (data:profileUPD, user:number | null) => {

    return (dispatch:Dispatch<ActionsUtilits | ActionsProfile| any>) => {
        return new Promise((resolve, reject) => {
            dispatch(actionsUtilits.isFetchingAc(true))
            profileAPI.updAboutMe(data)
                .then(data => {
                    dispatch(getProfileThunk(user))
                    resolve(data)
                })
                .catch(data => reject(data))
                .then(() => dispatch(actionsUtilits.isFetchingAc(false)))
        })
    }

}

export type updWithPromise = typeof updProfilePhotoThunk

export type ThunkType = ThunkAction<Promise<any>,AppState,unknown, ActionsProfile>

export const updProfilePhotoThunk = (photo:File, user:number | null) => {
    return (dispatch:Dispatch<ActionsUtilits | ActionsProfile | any > ) => {
        return new Promise(async (resolve) => {
            try {
                dispatch(actionsUtilits.isFetchingAc(true))
                const data = await profileAPI.updPhoto(photo)
                dispatch(getProfileThunk(user))
                resolve(data)
            }
            catch (error:any) {
                window.alert(error.response.status)
            }
            finally {
                dispatch(actionsUtilits.isFetchingAc(false))
            }

        })

    }
}