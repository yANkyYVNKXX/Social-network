import style from './renderField.module.css'
import cn from 'classnames'

export const renderField = ({type, placeholder, input, meta:{error, touched}})=>{

    return (
    <span className={cn(style.field)}>
          <input className={cn({[style.fieldError]:error})} {...input} type={type} placeholder={placeholder}/>
          {touched && error? <span tooltip={error} className={cn(style.error)}></span>:''}

    </span>
    )
  }
