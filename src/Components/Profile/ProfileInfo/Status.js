import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { sendStatusThunk } from '../../../Redux/ProfilePage-Reducer';
import style from './Status.module.css'


const Status = React.memo( ({userId,status, sendStatus, isOwner})=> {
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
    sendStatus(StatusText,userId)
    
  }

  const ChangeStatus = (event) => {
    if (event.target.value.length < 30) {
   setStatusText(event.target.value)
  }
  }

  return (
<div className={style.status}>
{isOwner ? !ChangeOfStatus ?<span onDoubleClick={StatusActive}>{status?status:<span>-----</span>}</span>:
              <input onChange={ChangeStatus} onBlur={StatusDisabled} autoFocus={true} value={StatusText}></input>:status?status:<span>-----</span>}
              {isOwner && <p>(double click to update status)</p>}
</div>
  )
}
)

const MapStateToProps = (state)=>{
  return{
    userId:state.Auth.id,
    status:state.ProfilePage.status
  }
}

const MapDispatchToProps = (dispatch) =>{
  return {
    sendStatus:(StatusText,user)=>dispatch(sendStatusThunk(StatusText,user))
  }
}

export default connect (MapStateToProps,MapDispatchToProps)(Status)
