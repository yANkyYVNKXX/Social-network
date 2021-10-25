import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { LoginThunk } from "../../Redux/Auth-Reducer"
import Preloader from "../Utilits/preloader"
import LoginForm from "./LoginForm"
import React, { Dispatch, FC } from 'react'
import { AppState } from "../../Redux/Store"


type MapStateToPropsType = {
    isAuth: boolean
    userId: number | null
    isFetching: boolean
    captcha: string
}

type MapDispatchToPropsType = {
    Login: (values:any)=> void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

const Login:FC<PropsType> = ({ Login, isAuth, userId, isFetching, captcha }) => {
    let submit = (values:any) => {
        Login(values)
    }

    if (isAuth) return <Redirect to={'/profile/' + userId} />

    if (isFetching) return <Preloader/>

    return (
        <div>
            <div>
                <h1>Login</h1>
            </div>
            <LoginForm captcha={captcha} onSubmit={submit} />
        </div>
    )

}

const MapDispatchToProps = (dispatch:Dispatch<any>):MapDispatchToPropsType => {
    return {
        Login: (values:any) => dispatch(LoginThunk(values))
    }
}

const MapStateToProps = (state:AppState):MapStateToPropsType => {
    return {
        isAuth: state.Auth.isAuth,
        userId: state.Auth.id,
        isFetching: state.Utilits.isFetching,
        captcha: state.Auth.captcha
    }
}

const Login_w = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppState>(MapStateToProps, MapDispatchToProps)(Login)

export default Login_w