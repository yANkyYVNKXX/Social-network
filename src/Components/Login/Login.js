import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { LoginThunk } from "../../Redux/Auth-Reducer"
import Preloader from "../Utilits/preloader"
import LoginForm from "./LoginForm"


const Login = ({ Login, isAuth, userId, isFetching, captcha }) => {
    let submit = (values) => {
        Login(values)
    }

    if (isAuth) return <Redirect to={'/profile/' + userId} />

    if (isFetching) return <Preloader/>

    return (
        <div>
            <div>
                <h1>Login</h1>
            </div>
            <LoginForm onSubmit={submit} captcha={captcha}/>
        </div>
    )

}

const MapDispatchToProps = (dispatch) => {
    return {
        Login: (values) => dispatch(LoginThunk(values))
    }
}

const MapStateToProps = (state) => {
    return {
        isAuth: state.Auth.isAuth,
        userId: state.Auth.id,
        isFetching: state.Utilits.isFetching,
        captcha: state.Auth.captcha
    }
}

const Login_w = connect(MapStateToProps, MapDispatchToProps)(Login)

export default Login_w