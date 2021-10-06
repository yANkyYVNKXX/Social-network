import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderField } from '../Utilits/renderField';
import style from './Search.module.css'

let Search = ({handleSubmit}) => {

     
    return (
      <div className={style.search}>
        <form onSubmit={handleSubmit}>
        <Field name="term" component={renderField} placeholder="Username"/>
        <button type='submit'>Search</button>
        </form>
        </div>
    )

        }

  export default reduxForm ({form:'search'})(Search)

   