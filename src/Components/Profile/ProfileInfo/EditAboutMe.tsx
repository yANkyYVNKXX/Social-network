import React, { FC } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { profile, profileUPD } from '../../../Types/Types';
import Preloader from '../../Utilits/preloader';
import { renderField } from '../../Utilits/renderField';
import { maxLenght, required, urlValidation } from '../../Utilits/Validators';
import style from './EditAboutMe.module.css'

const maxLenght20 = maxLenght(20)
const maxLenght50 = maxLenght(50)

type ownProps = {
  closeAboutMe:()=>void
  isFetching:boolean
  profile:profile
}
const EditAboutMe:FC<ownProps & InjectedFormProps<profileUPD,ownProps>>= ({profile, handleSubmit, closeAboutMe, isFetching})=> {


  return (
    <form onSubmit={handleSubmit}>
      <div className={style.aboutMe}>
      <Field validate={[required, maxLenght20]} name='fullName' placeholder='Full name' component={renderField} type='text'/>
      <Field validate={[required, maxLenght50]} name='aboutMe' placeholder='About me' component={renderField} type='text'/>
      <span className={style.LookingForAjob}><span style={{marginRight:'10px'}}>looking For A Job:</span><Field name='lookingForAJob' component={renderField} type='checkbox'/></span>
      <Field validate={[required, maxLenght50]} name='lookingForAJobDescription' placeholder='Description' component={renderField} type='text'/>
      
      {Object.keys(profile.contacts).map(key => <Field validate={urlValidation} key={key} name={'contacts.'+key} placeholder={key}  component={renderField} type='text'/>)}
      
      {isFetching ? <Preloader/> :
      <div className={style.buttons}>
      <button type='submit'>Save</button>
      <button onClick={closeAboutMe}>Close</button>
      </div>}
      </div>
   </form>
  )
}

  

export default reduxForm<profileUPD,ownProps>({form:"edit-aboutMe"})(EditAboutMe)