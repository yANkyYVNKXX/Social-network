import { stopSubmit } from "redux-form"
import { Auth, getCaptcha, login } from "../Api"
import { isFetchingAc } from "./Utilits-Reducer"

let init = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    initApp: true,
    captcha:'',
}


const AuthReducer = (state = init, action) => {
    switch (action.type) {
        case 'IS-AUTH':
            return {
                ...action.data,
                isAuth: action.isAuth,
            }
        case 'INIT-APP':
            return {
                ...state,
                initApp: action.initApp
            }
        case 'INIT-APP':
            return {
                ...state,
                initApp: action.initApp
             }
        case 'CAPTCHA':
            return {
                ...state,
                captcha:action.url
            }
        default:
            return state
    }
}

export default AuthReducer

export const isAuthAc = (data, isAuth) => {
    return {
        type: 'IS-AUTH',
        data,
        isAuth,
    }
}
const initAppAc = () => {
    return {
        type: 'INIT-APP',
        initApp: false
    }
}

const captchaAc = (url) => {
    return {
        type: 'CAPTCHA',
        url
    }
}


export const AuthThunk = async (dispatch) => {


    const response = await Auth()

    if (response.data.resultCode === 0) {
        dispatch(isAuthAc(response.data.data, true))
    }
    dispatch(initAppAc())


}

export const LoginThunk = (values) => {
    return (dispatch) => {
           
    
        dispatch(isFetchingAc(true))
        login(values.email, values.password, values.rememberMe, values.captcha)
            .then(response => { 
                if (response.data.resultCode == 0)
                {
                dispatch(AuthThunk)
                dispatch(isFetchingAc(false))
                }
                if (response.data.resultCode == 1) {
                                  
                    dispatch(isFetchingAc(false))
                    dispatch(stopSubmit("login", {_error:response.data.messages[0]}))
                }
                if (response.data.resultCode == 10)
                {
                    dispatch(isFetchingAc(false))
                    getCaptcha().then(response=>dispatch(captchaAc(response.data.url)))
                }
            }
            )
            
    }
}