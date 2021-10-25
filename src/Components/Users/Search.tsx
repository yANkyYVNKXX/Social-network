import React, { FC } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { renderField } from '../Utilits/renderField';
import style from './Search.module.css'

type SearchValue = {
  term:string
}

let Search:FC<InjectedFormProps<SearchValue>> = ({handleSubmit}) => {

     
    return (
      <div className={style.search}>
        <form onSubmit={handleSubmit}>
        <Field name="term" component={renderField} placeholder="Username"/>
        <button type='submit'>Search</button>
        </form>
        </div>
    )

        }

  export default reduxForm<SearchValue,unknown>({form:'search'})(Search)

   