import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';

const EditAboutMe = ({profile, handleSubmit})=> {
  
  const [lookingForAJobCHECKED, updlookingForAJobCHECKED] = useState(false)

  const activeDescriptionLookingFAJ=()=>{
    updlookingForAJobCHECKED(!lookingForAJobCHECKED)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <div><Field name='fullName' placeholder='Full name' component='input' type='text'/></div>
      <div><Field name='aboutMe' placeholder='About me' component='input' type='text'/></div>
      <div>looking For A Job:<Field onChange={()=>activeDescriptionLookingFAJ()} name='lookingForAJob' component='input' type='checkbox'/></div>
      <div><Field disabled={lookingForAJobCHECKED?false:true} name='lookingForAJobDescription' placeholder='Description' component='input' type='text'/></div>
      {Object.keys(profile.contacts).map(key => <div><Field key={key} name={key} placeholder={key}  component='input' type='text'/></div>)}
      <button type='submit'>Save</button>
      </div>
   </form>
  )
}




export default reduxForm({form:"edit-aboutMe"})(EditAboutMe)