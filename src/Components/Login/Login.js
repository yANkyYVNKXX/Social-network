import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { reduxForm } from "redux-form"
import { Auth, login } from "../../Api"
import { isAuthAc } from "../../Redux/Auth-Reducer"
import LoginForm from "./LoginForm"


 const Login = (props)=> {
     let submit = (values) => {
       login(values.email, values.password)
       .then(()=>Auth().
       then(response=>props.isAuth(isAuthAc(response.data.data,true))
       ))
       .then(()=>console.log('хуй'))
     }

    //if (props.isAuth) return <Redirect to={"/profile/"}/>

    return (
    <div>
        <div>
            <h1>Login</h1>
        </div>
       <LoginForm onSubmit={submit}/>
    </div>
    )

}

const MapDispatchToProps = (dispatch)=>{
    return {
        isAuth:(action)=>dispatch(action)
    }
}
const MapStateToProps = (state) => {
    return {
        isAuth:state.Auth.isAuth,
    }
}
const Login_w = connect(MapStateToProps,MapDispatchToProps)(Login)

export default Login_w 