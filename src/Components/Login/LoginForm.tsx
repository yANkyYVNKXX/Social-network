import { Field, reduxForm, InjectedFormProps } from "redux-form"
import { renderField } from "../Utilits/renderField"
import { maxLenght, required } from "../Utilits/Validators"
import style from './Loginform.module.css'
import cn from 'classnames'
import { FC } from "react"
import { Button } from "antd"

const maxLenght32 = maxLenght(32)

type OwnProps = {
    captcha:string
}

type LoginValues = {
    email:string
    password:string
    rememberMe:boolean
    captcha:string
}

 const LoginForm:FC<OwnProps & InjectedFormProps<LoginValues,OwnProps>> = ({handleSubmit, captcha, ...props})=> {
    return (
        <form onSubmit={handleSubmit}>
        <div className={cn(style.login, {[style.loginWcaptcha]:captcha})}>
        <Field validate={[required,maxLenght32]} name="email" component={renderField} placeholder="Username"/>
        <Field validate={required} name= "password" component={renderField}  placeholder="Password" type='password'/>
        <span className={style.RememberMe}><span>RememberMe</span><Field name= "rememberMe" component={renderField}  type='checkbox'/></span>
        {captcha && <span className={style.captcha}><img src={captcha}></img></span>}
        {captcha && <span><Field validate={[required]} name="captcha" component={renderField} placeholder="enter captcha"/></span>}
        <button className='Button' type="submit">Login</button>
        </div>
        <div className={style.error}>{props.error}</div>
        </form>
    )

}

export default reduxForm<LoginValues,OwnProps>({form:'login'})(LoginForm)
