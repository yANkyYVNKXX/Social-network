import style from './renderField.module.css'
import cn from 'classnames'
import { FC } from 'react'
import { WrappedFieldProps } from 'redux-form'
import { Tooltip } from 'antd'

type Props = {
      type?:string | undefined
      placeholder?:string |undefined
}

export const renderField:FC<WrappedFieldProps & Props> = ({type, placeholder, input, meta:{error, touched}})=>{

    return (
    <span className={cn(style.field)}>
         <Tooltip color='red' visible={touched && error? true:false} placement="right" title={error}><input className={cn({[style.fieldError]:error})} {...input} type={type} placeholder={placeholder}/>
         </Tooltip>
    </span>
    )
  }
