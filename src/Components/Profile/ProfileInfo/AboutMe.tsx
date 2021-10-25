import React, { FC } from 'react';
import { contacts, profile } from '../../../Types/Types';
import style from './AboutMe.module.css'


type CustomProps = {
  profile:profile
}

const AboutMe: FC<CustomProps> = ({profile})=> {
  
  return (
    <div className={style.AboutMe}>
    <ul>
    <li><span>About Me:</span>{profile.aboutMe}</li>
    <li><span>Looking for a job:</span>{profile.lookingForAJob?"yes":"no"}</li>
    <li><span>Description:</span>{profile.lookingForAJobDescription}</li>
    <Contacts contacts={profile.contacts}/>
    </ul>
   </div>
  )
}

type CustomPropsForContacts = {
  contacts:contacts
  
}

const Contacts: FC<CustomPropsForContacts> = ({contacts})=>{
  return(
    <div>
       {Object.keys(contacts).map((key) => contacts[key as keyof contacts] && <div><span>{key as keyof contacts}:</span><a href={'https://'+contacts[key as keyof contacts]}>{contacts[key as keyof contacts]}</a></div>)}
    </div>
  )
}

export default AboutMe