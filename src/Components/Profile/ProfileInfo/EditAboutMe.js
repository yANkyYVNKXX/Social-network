import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Preloader from '../../Utilits/preloader';
import { renderField } from '../../Utilits/renderField';
import { maxLenght, maxLenght25, required, urlValidation } from '../../Utilits/Validators';
import style from './EditAboutMe.module.css'

const maxLenght20 = maxLenght(20)
const maxLenght50 = maxLenght(50)
const EditAboutMe = ({profile, handleSubmit, closeAboutMe, isFetching})=> {


  return (
    <form onSubmit={handleSubmit}>
      <div className={style.aboutMe}>
      <span><Field validate={[required, maxLenght20]} name='fullName' placeholder='Full name' component={renderField} type='text'/></span>
      <span><Field validate={[required, maxLenght50]} name='aboutMe' placeholder='About me' component={renderField} type='text'/></span>
      <span>looking For A Job:<Field name='lookingForAJob' component={renderField} type='checkbox'/></span>
      <span><Field validate={[required, maxLenght50]} name='lookingForAJobDescription' placeholder='Description' component={renderField} type='text'/></span>
      
      {Object.keys(profile.contacts).map(key => <span><Field validate={urlValidation} key={key} name={'contacts.'+key} placeholder={key}  component={renderField} type='text'/></span>)}
      
      {isFetching ? <Preloader/> :
      <div className={style.buttons}>
      <button type='submit'>Save</button>
      <button onClick={closeAboutMe}>Close</button>
      </div>}
      </div>
   </form>
  )
}

  

export default reduxForm({form:"edit-aboutMe"})(EditAboutMe)