import style from './ProfileInfo.module.css'
import Ava from '../Img/Avatar.jpg'
import React, { useState } from 'react';
import Status from './Status';
import AboutMe from './AboutMe';
import EditAboutMe from './EditAboutMe';

export default function ProfileInfo({profile}) {

  const [editMod, updEditMode] = useState(false)

  const editModeActive = ()=>{
    updEditMode(true)
  }
  
  const saveAboutMe = (data) => {
    console.log(data)
    updEditMode(false)
  }
  

  return (
<div className={style.Profile}>

      <div className={style.Avatar}>
      <h2>{profile.fullName}</h2>
        <img src={profile.photos.small==null?Ava:profile.photos.small}></img>
        
      </div>
      
      <div className={style.Questionnaire}>
        <ul>
        <li></li>
        <div><Status/></div>
        {!editMod?<div><AboutMe profile={profile}/></div>:<EditAboutMe profile={profile} onSubmit={saveAboutMe}/>}
        <div>{!editMod && <button onClick={editModeActive}>Edit profile</button>}</div>
        </ul>
        </div>
      </div>
  )
}

