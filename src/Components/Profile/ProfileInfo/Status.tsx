import React, { Dispatch, FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { sendStatusThunk } from '../../../Redux/ProfilePage-Reducer';
import { AppState } from '../../../Redux/Store';
import style from './Status.module.css'


type MapStateToPropsType = {
  userId: number | null
  status: string
}
type MapDispatchToPropsType = {
  updStatus:(statusText:string,userId:number | null)=>void
}
type OwnProps = {
  isOwner:boolean
}
const Status:FC<MapStateToPropsType & OwnProps & MapDispatchToPropsType> = React.memo( ({userId,status, updStatus, isOwner})=> {
  const [ChangeOfStatus, setStatus] = useState(false)
  const [StatusText, setStatusText] = useState(status)


  const StatusActive = ()=>{
   
   setStatus(true)
  }
  
  useEffect(()=>{
    setStatusText(status)
  },[status])

  const StatusDisabled = ()=>{
    setStatus(false)
    updStatus(StatusText,userId)
    
  }

  const ChangeStatus = (event:any) => {
    if (event.target.value.length < 30) {
   setStatusText(event.target.value)
  }
  }

  return (
<div className={style.status}>
{isOwner ? !ChangeOfStatus ?<span onDoubleClick={StatusActive}>{status?status:<span className={style.notStatus}>(status not set)</span>}</span>:
              <input style={{textAlign:'center'}} onChange={ChangeStatus} onBlur={StatusDisabled} autoFocus={true} value={StatusText}></input>:status?status:<span className={style.notStatus}>(status not set)</span>}
              {isOwner && <p>(double click to update status)</p>}
</div>
  )
}
)

const MapStateToProps = (state:AppState):MapStateToPropsType=>{
  return{
    userId:state.Auth.id,
    status:state.ProfilePage.status
  }
}

const MapDispatchToProps = (dispatch:Dispatch<any>):MapDispatchToPropsType =>{
  return {
    updStatus:(statusText,user)=>dispatch(sendStatusThunk(statusText,user))
  }
}

export default connect<MapStateToPropsType,MapDispatchToPropsType,OwnProps,AppState>(MapStateToProps,MapDispatchToProps)(Status)
