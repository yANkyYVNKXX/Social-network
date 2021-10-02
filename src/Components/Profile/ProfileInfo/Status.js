import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { sendStatus } from '../../../Api';
import { sendStatusThunk } from '../../../Redux/ProfilePage-Reducer';

const Status = React.memo( (props)=> {
  const [ChangeOfStatus, setStatus] = useState(false)
  const [StatusText, setStatusText] = useState(props.status)


  const StatusActive = ()=>{
   
   setStatus(true)
  }
  
  useEffect(()=>{
    setStatusText(props.status)
  },[props.status])

  const StatusDisabled = ()=>{
    setStatus(false)
    props.sendStatus(StatusText,props.userId)
    
  }

  const ChangeStatus = (event) => {
   setStatusText(event.target.value)
  }

  return (
<div>
<span>Status:</span>
{!ChangeOfStatus ?<span onDoubleClick={StatusActive}>{props.status?props.status:<span>-----</span>}</span>:
              <input onChange={ChangeStatus} onBlur={StatusDisabled} autoFocus={true} value={StatusText}></input>}
  
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
