import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { actions } from "../../Redux/Chat-Reducer"
import Preloader from "../Utilits/preloader"
import { getChat, getMyId } from "../Utilits/Selectors"
import { CloseOutlined, WechatOutlined } from '@ant-design/icons'



const Chat = () => {


    const MessagesElement = useRef<HTMLDivElement | null>(null)

    const InitialMessages = (response: any) => {
        dispatch(actions.initchatAC(JSON.parse(response.data)))
        MessagesElement.current?.scrollIntoView()
    }

  
    const [message, updMessage] = useState('')
    const [buttonDisabled, updButtonDisabled] = useState(true)
    const [isFetching, updIsFetching] = useState(true)
    const [isFetchingSend, updIsFetchingSend] = useState(false)
    const [isChatting, updChatting] = useState(false)
    const dispatch = useDispatch()
    const chat = useSelector(getChat)
    const myId = useSelector(getMyId)

    useEffect(() => {
        const chatWS = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
        chatWS.onopen = () => {
            updButtonDisabled(false)
            updIsFetching(false)
        }
        chatWS.addEventListener('message', InitialMessages)
        return () => {
            dispatch(actions.nullchatAC())
            chatWS.removeEventListener('message', InitialMessages)
        }
    }, [])


    const sendMessage = () => {
        if (message) {
            updIsFetchingSend(true)
            const chatWS = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
            chatWS.onopen = () => {
                chatWS.send(message)
                updMessage('')
                updIsFetchingSend(false)

            }
        }
    }


    return (

        <div className='Chat_wrapper'>
            {!isChatting ? <div className='Chat_icon'><WechatOutlined style={{ fontSize: '50px' }} onClick={() => updChatting(true)} /></div> :
                <div className='Chat'>
           
                    <div className='Chat_title'><h2>Online chat</h2><span><CloseOutlined onClick={() => updChatting(false)} /></span></div>
                    <div className='Messages_container'>
                        {isFetching ? <Preloader /> : <div className='Chat_messages'>
                            {chat.items.map(u =>u.userId == myId?
                            <span className='Chat_message'>
                              <div className='myMessage_container'><span>{u.userName}</span><img src={u.photo as string | undefined}></img></div>
                                <div className='myMessage'>
                                    <div className='myMessage_background'>
                                    <span>{u.message}</span>
                                    </div>
                                    </div>
                            </span>
                            :
                                <span className='Chat_message'>
                                   <span style={{marginRight:'10px'}}><img src={u.photo as string | undefined}></img></span><span className='userName'>{u.userName}</span>
                                    <div className='message'>
                                    <div className='message_background'>
                                        <span>{u.message}</span>  
                                        </div>
                                        </div>
                                </span>
                            )}

                        </div>}
                        <div ref={MessagesElement}></div>
                    </div>

                    <div className='Chat_footer'><input onChange={(e) => { updMessage(e.target.value) }} value={message}></input>
                        {isFetchingSend ? <Preloader /> : ''}
                        <button disabled={buttonDisabled} onClick={sendMessage}>send</button></div>
                </div>}
        </div>

    )

}

export default Chat