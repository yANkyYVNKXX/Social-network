import { Field, reduxForm } from "redux-form"


 const LoginForm = (props)=> {
    return (
        <form onSubmit={props.handleSubmit}>
        <div><Field name="email" component="input" placeholder="Username"/></div>
        <div><Field name= "password" component="input"  placeholder="Password"/></div>
        <button type="submit">login</button>
        </form>
    )

}

const LoginForm2 = reduxForm({form:'login'})(LoginForm)

export default LoginForm2 