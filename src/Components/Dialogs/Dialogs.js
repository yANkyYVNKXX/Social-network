import React from 'react';
import { connect } from 'react-redux';
import style from './Dialogs.module.css'
import Messages from './Messages/Messages';

function Dialogs(props) {
  let ElementTextArea = React.createRef()
  let UpdText = ()=>{
    props.UpdateText({type:'UPD-TEXT-MESSAGE', text:ElementTextArea.current.value})
  }
  let onChangeDialog = (obj)=>{
   props.ChangeDialog({type:'CHANGE-DIALOG', dialog:obj})
  }
  return (
    <div className={style.Content}>
      <div>
      {props.dialogs.map( dialogs=> <div onClick={()=>(onChangeDialog(dialogs))}>{dialogs.nameDialog}</div>)}
      </div>
      <div>
        {props.activeDialog.messages.map(messages =><Messages messages={messages} />)}
        <textarea ref={ElementTextArea} onChange={UpdText} value={props.textMessage}></textarea>
        <button onClick={props.SendMessage}>send</button>  
       </div>
      
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    dialogs: state.DialogPage.dialogs,
    activeDialog: state.DialogPage.activeDialog,
    textMessage: state.DialogPage.textMessage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    ChangeDialog: (action)=>{
      dispatch(action)
    },
    SendMessage: ()=>{
      dispatch({type:'SEND-MESSAGE'})
    },
    UpdateText: (action)=>{
     dispatch(action)
    }
  }
}

const Dialogs_w = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default Dialogs_w;