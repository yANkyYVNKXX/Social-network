import { Auth } from "../Api"

let init = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    initApp: true,
}


const AuthReducer = (state=init,action)=>{
    switch (action.type) {
    case 'IS-AUTH' :
    return {
        ...action.data,
        isAuth:action.isAuth,
    }
    case 'INIT-APP':
    return {
        ...state,
        initApp:action.initApp
    }
    default: 
    return state
}
}

export default AuthReducer

export const isAuthAc=(data,isAuth)=>{
    return {
        type:'IS-AUTH',
        data,
        isAuth,
    }
}
const initAppAc = ()=>{
    return {
        type:'INIT-APP',
        initApp:false
    }
}


export const AuthThunk = async (dispatch) => {
     
    
    const response = await Auth()
    
    if (response.data.resultCode===0) {
        dispatch(isAuthAc(response.data.data,true))
    }
    dispatch(initAppAc())
        
 
}