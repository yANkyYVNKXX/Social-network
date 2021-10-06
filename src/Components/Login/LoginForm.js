import { Field, reduxForm } from "redux-form"
import { renderField } from "../Utilits/renderField"
import { maxLenght, required } from "../Utilits/Validators"
import style from './Loginform.module.css'
import cn from 'classnames'

const maxLenght32 = maxLenght(32)

 const LoginForm = ({handleSubmit, captcha, ...props})=> {
    return (
        <form onSubmit={handleSubmit}>
        <div className={cn(style.login, {[style.loginWcaptcha]:captcha})}>
        <span><Field validate={[required,maxLenght32]} name="email" component={renderField} placeholder="Username"/></span>
        <span><Field validate={required} name= "password" component={renderField}  placeholder="Password" type='password'/></span>
        <span>RememberMe<Field name= "rememberMe" component={renderField}  type='checkbox'/></span>
        {captcha && <span className={style.captcha}><img src={captcha}></img></span>}
        {captcha && <span><Field validate={[required]} name="captcha" component={renderField} placeholder="enter captcha"/></span>}
        <button type="submit">login</button>
        </div>
        <div className={style.error}>{props.error}</div>
        </form>
    )

}

export default reduxForm({form:'login'})(LoginForm)
