import React, { useState } from 'react';
import style from './Modal.module.css'
import cn from 'classnames'
import { connect } from 'react-redux';
import { updProfilePhotoThunk } from '../../../Redux/ProfilePage-Reducer';
import Preloader from '../../Utilits/preloader'

const Modal = ({modal, updModal, userId,updProfilePhoto, isFetching})=> {
  
    const photo = React.createRef()
    const [errMsg, updErrMsg] = useState(undefined)

    const changePhoto = ()=> {
    
        let formData = new FormData();
        formData.append('image', photo.current.files[0])
        updProfilePhoto(formData, userId)
        .then((response)=>{
            if (response.data.resultCode == 0)
            {
                updModal(false)
            }
             updErrMsg(response.data.messages) 
        })
        
    }

    const closeModal = ()=>{
        updModal(false)
        updErrMsg(undefined) 
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


const MapStateToProps = (state)=>{
    return {
    userId:state.Auth.id,
    isFetching:state.Utilits.isFetching
    }
}

const MapDispatchToProps = (dispatch) =>{
    return {
        updProfilePhoto:(photo,user)=>dispatch(updProfilePhotoThunk(photo,user))
    }
}

export default connect(MapStateToProps,MapDispatchToProps)(Modal)