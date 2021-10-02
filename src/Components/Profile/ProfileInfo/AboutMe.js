import React from 'react';

const AboutMe = ({profile})=> {
  
  return (
    <div>
   <div><span>Full Name:</span>{profile.fullName}</div>
   <div><span>About Me:</span>{profile.aboutMe}</div>
   <div><span>Looking for a job:</span>{profile.lookingForAJob?"yes":"no"}</div>
   {profile.lookingForAJob && <div><span>Description:</span>{profile.lookingForAJobDescription}</div>}
    <Contacts profile={profile}/>
   </div>
  )
}

const Contacts = ({profile})=>{
  return(
    <div>
       {Object.keys(profile.contacts).map(key => <div><span>{key}:</span><span>{profile.contacts[key]}</span></div>)}
    </div>
  )
}

export default AboutMe