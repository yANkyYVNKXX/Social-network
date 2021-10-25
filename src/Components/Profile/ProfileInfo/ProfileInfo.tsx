import style from './ProfileInfo.module.css'
import Ava from '../Img/Avatar.jpg'
import { FC, useEffect, useState } from 'react';
import Status from './Status';
import AboutMe from './AboutMe';
import EditAboutMe from './EditAboutMe';
import Modal from './Modal';
import { profile, profileUPD } from '../../../Types/Types';
import { response } from '../../../Api';

type CustomProps = {

  profile:profile
  updProfile: (data:profileUPD, userId:number | null)=> any
  isFetching: boolean
  userId: number | null
}

 const ProfileInfo:FC<CustomProps> = ({ profile, updProfile, isFetching, userId})=> {

  const [editMod, updEditMode] = useState(false)
  const [modal, updModal] = useState(false)
  const [isOwner, updOwner] = useState(false)
  const editModeActive = () => {
    updEditMode(true)
  }

  useEffect(()=>{
          if (profile.userId === userId) {
            updOwner(true)
          }
          else updOwner(false)
  },[profile.userId])

  const saveAboutMe = (data:any) => {
    updProfile(data, profile.userId)
    .then((data:response)=>{
     if (data.resultCode == 0)
     {
      updEditMode(false)
     }
    })
    .catch((error:any)=>{
        alert (error.response) 
    })
  }

  return (
    
   <div>
     <Modal modal={modal} updModal={updModal}/>
    <div className={style.Profile}>
     
  
      <div className={style.Avatar}>
        <h2>{profile.fullName}</h2>
        <div className={style.ImageSettings}>
             
             {isOwner && <svg className={style.svg} onClick={()=>updModal(true)} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
             <title>Изменить фото</title>
             <path d="M13.325 15.775a4 4 0 1 1 1.662-1.114l1.314 1.843a5.267 5.267 0 0 1 2.289.236l1.058-1.765c-2.153-1.683-2.19-4.248 0-5.95l-1.05-1.75C15.9 8.248 13.522 6.864 13.076 4h-2.15C10.48 6.833 8.127 8.263 5.4 7.276l-1.05 1.75c2.154 1.682 2.19 4.247.001 5.95l1.05 1.75c2.699-.974 5.077.41 5.523 3.274H14a1 1 0 0 1 0 2h-4a1 1 0 0 1-1-1c0-2.344-1.5-3.217-3.524-2.12a1 1 0 0 1-1.334-.366l-2-3.335a1 1 0 0 1 .382-1.393c1.956-1.06 1.927-2.528 0-3.572a1 1 0 0 1-.382-1.393l2-3.335a1 1 0 0 1 1.334-.365C7.524 6.23 9 5.318 9 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1c0 2.344 1.5 3.217 3.524 2.12a1 1 0 0 1 1.334.366l2 3.335a1 1 0 0 1-.382 1.393c-1.956 1.06-1.927 2.528 0 3.572a1 1 0 0 1 .382 1.393l-2 3.335a1 1 0 0 1-1.334.365c-.734-.397-1.664-.525-2.356-.307a1 1 0 0 1-1.115-.373l-1.728-2.424zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
             </svg>}
        <img src={profile.photos.large == null ? Ava : profile.photos.large}></img>
        </div>
        <Status isOwner={isOwner}/>
      </div>
      <div className={style.AboutMe}>
        {!editMod ? <AboutMe profile={profile} /> : <EditAboutMe isFetching={isFetching} closeAboutMe={()=>updEditMode(false)} initialValues={profile} profile={profile} onSubmit={saveAboutMe} />}
        {!editMod && isOwner && <button className={style.editButton} onClick={editModeActive}>Edit profile</button>}
      </div>
    </div>
    </div>
  )
}

export default ProfileInfo

