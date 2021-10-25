import React, { Dispatch, FC, useState } from 'react';
import style from './Modal.module.css'
import cn from 'classnames'
import { connect } from 'react-redux';
import { updProfilePhotoThunk } from '../../../Redux/ProfilePage-Reducer';
import Preloader from '../../Utilits/preloader'
import { AppState } from '../../../Redux/Store';
import { response } from '../../../Api';
import { ThunkDispatch } from 'redux-thunk';

type CustomProps = {
    modal:boolean
    updModal:(arg:boolean)=>void
}

type MapStateToPropsType = {
    userId:number | null
    isFetching:boolean
}

type MapDispatchToPropsType = {
    updProfilePhoto:(photo:File,user:number | null)=> any
}

const Modal:FC<CustomProps & MapStateToPropsType & MapDispatchToPropsType> = ({modal, updModal, userId,updProfilePhoto, isFetching})=> {
  
    const photo = React.createRef() as any
    const [errMsg, updErrMsg] = useState([] as Array<string>)

    const changePhoto = ()=> {
    
        let formData = new FormData();
        formData.append('image', photo.current.files[0])
        updProfilePhoto(formData as any, userId)
        .then((data:response)=>{
            if (data.resultCode == 0)
            {
                updModal(false)
            }
             updErrMsg(data.messages) 
        })
        
    }

    const closeModal = ()=>{
        updModal(false)
        updErrMsg([]) 
    }

  return (
    <div className={modal ? cn(style.Modal, style.ModalActive):style.Modal}>
    <div className={modal ? cn(style.ModalContent, style.ModalContentActive):style.ModalContent}>
     {isFetching ? <Preloader/>: 
     <div className={style.content}>
            <input ref={photo} type="file"/>
            <span>{errMsg}</span>
            <div className={style.buttons}>
            <button onClick={changePhoto}>Accept</button>
            <button onClick={closeModal}>Close</button>
            </div>
            
     </div>}
     
     </div>
     </div>
  )
}


const MapStateToProps = (state:AppState):MapStateToPropsType=>{
    return {
    userId:state.Auth.id,
    isFetching:state.Utilits.isFetching
    }
}

const MapDispatchToProps = (dispatch:Dispatch<any>):MapDispatchToPropsType =>{
    return {
        updProfilePhoto:(photo:File,user:number | null)=>dispatch(updProfilePhotoThunk(photo,user))
    }
}

export default connect< MapStateToPropsType, MapDispatchToPropsType, CustomProps, AppState>(MapStateToProps,MapDispatchToProps)(Modal)