import { InferActions, AppState } from './Store';
import { Dispatch } from "redux"
import {  stopSubmit } from "redux-form"
import { AuthAPI, securityAPI } from "../Api"
import { actionsUtilits, ActionsUtilits} from "./Utilits-Reducer"
import { ThunkAction } from 'redux-thunk';

const ISAUTH = 'IS-AUTH'
const INITAPP = 'INIT-APP'
const CAPTCHA = 'CAPTCHA'

let initialState = {
    id: null as null | number,
    login: null as null | string,
    email: null as null | string,
    isAuth: false,
    initApp: true,
    captcha:'',
}

type initialStateType = typeof initialState



const AuthReducer = (state:initialStateType = initialState, action:Actions):initialStateType => {
    switch (action.type) {
        case ISAUTH:
            return {
                ...state,
                ...action.data,
                isAuth: action.isAuth,
            }
        case INITAPP:
            return {
                ...state,
                initApp: action.initApp
            }
        case CAPTCHA:
            return {
                ...state,
                captcha:action.url
            }
        default:
            return state
    }
}

export default AuthReducer


export type dataAuth = {
    id: number | null
    login:  string | null
    email:  string | null
}


type Actions = InferActions<typeof actions>

const actions = {
    isAuthAc: (data:dataAuth, isAuth:boolean) => {
        return {
            type: ISAUTH,
            data,
            isAuth,
        } as const
    },
     
    
    initAppAc: (initApp:boolean) => {
        return {
            type: INITAPP,
            initApp
        } as const
    },
    
    
    captchaAc: (url:string) => {
        return {
            type:CAPTCHA,
            url
        } as const
    },
}




export const AuthThunk = async (dispatch:Dispatch<Actions>) => {


    const data = await AuthAPI.Auth()

    if (data.resultCode === 0) {
        dispatch(actions.isAuthAc(data.data, true))
    }
    dispatch(actions.initAppAc(false))


}


type loginValue = {
    email:string
    password:string
    rememberMe:boolean
    captcha:string
}




export const LoginThunk = (values:loginValue) => {
    return (dispatch:any) => {
           
        dispatch(actionsUtilits.isFetchingAc(true))
        AuthAPI.login(values.email, values.password, values.rememberMe, values.captcha)
            .then(data => { 
                if (data.resultCode == 0)
                {
                dispatch(AuthThunk)
                dispatch(actionsUtilits.isFetchingAc(false))
                }
                if (data.resultCode == 1) {
                                  
                    dispatch(actionsUtilits.isFetchingAc(false))
                    dispatch(stopSubmit("login", {_error:data.messages[0]}))
                }
                if (data.resultCode == 10)
                {
                    dispatch(actionsUtilits.isFetchingAc(false))
                    securityAPI.getCaptcha().then(data=>dispatch(actions.captchaAc(data.url)))
                }
            }
            )
            
    }
}

export const LogoutThunk = (dispatch:Dispatch<Actions>) => {
    AuthAPI.Logout()
    .then(data=>{
        if (data.resultCode == 0) {
            dispatch(actions.isAuthAc({id:null,login:null,email:null},false))
        }  
    })
        

}
