let init = {
  dialogs: [
    {
      id: 1,
      nameDialog: 'Omar',
      messages: [{ id: 1, text: 'hi, omar' }, { id: 2, text: 'hi, oleg' }]
    },
    {
      id: 2,
      nameDialog: 'Sergey',
      messages: [{ id: 1, text: 'hi, vcxvcxv' }, { id: 2, text: 'hi, vcxvcxv' }]
    },
    {
      id: 3,
      nameDialog: 'Lev',
      messages: [{ id: 1, text: 'hi, eqwewqe' }, { id: 2, text: 'hi, dsadsad' }]
    },
  ],
  activeDialog: {
    id: 0,
    nameDialog: '',
    messages: []
  },
  textMessage: '',
}

export default function DialogPageReducer(state = init, action) {
  switch (action.type) {

    case 'CHANGE-DIALOG':
      return {
        ...state,
        activeDialog: action.dialog
      }

    case 'SEND-MESSAGE':
      debugger
      if (state.activeDialog.id === 0) {
        alert('Откройте диалог')
      }
      else {
        console.log(state.textMessage)
        let dialogId = state.dialogs.findIndex(item => item.id === state.activeDialog.id);
        let newMessage = { id: 1, text: state.textMessage };
        let copystate = Object.assign({}, state)
        copystate.dialogs[dialogId].messages.push(newMessage);
        copystate.textMessage = '';

        return copystate;
      }
      return state;
    case 'UPD-TEXT-MESSAGE':
      return {
        ...state,
        textMessage: action.text
      }
    default:
      return state;
  }
}

