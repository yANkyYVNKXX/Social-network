import React from 'react';
import style from './AboutMe.module.css'

const AboutMe = ({profile})=> {
  
  return (
    <div className={style.AboutMe}>
    <ul>
    <li><span>About Me:</span>{profile.aboutMe}</li>
    <li><span>Looking for a job:</span>{profile.lookingForAJob?"yes":"no"}</li>
    <li><span>Description:</span>{profile.lookingForAJobDescription}</li>
    <Contacts profile={profile}/>
    </ul>
   </div>
  )
}

const Contacts = ({profile})=>{
  return(
    <div>
       {Object.keys(profile.contacts).map(key => profile.contacts[key] && <div><span>{key}:</span><a href={'https://'+profile.contacts[key]}>{profile.contacts[key]}</a></div>)}
    </div>
  )
}

export default AboutMe