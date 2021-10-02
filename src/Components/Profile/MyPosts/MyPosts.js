import React from 'react'
import { connect } from 'react-redux'
import style from './MyPosts.module.css'
import Post from './Post/Post'



function MyPosts(props) {

  let ElementTextArea = React.createRef()
  let actionCreatorUPDtext=(text)=>{
    return {
      type:'UPDATE-TEXT',
      message:text
    }
  }
 
  let UpdateText = ()=>
  {
    let text = ElementTextArea.current.value
     
    props.UpdateText(actionCreatorUPDtext(text))
  }
  return (
    <div className={style.MyPosts}>
      <h1>My Posts</h1>
      <div className={style.AddPost}>
        <textarea onChange={UpdateText} placeholder='Что у вас нового?' ref={ElementTextArea} type='text' value={props.messageText}></textarea>
        <button  onClick={props.AddPost}>Add</button>
      </div>
      <div>
       {props.posts.map(posts=><Post posts={posts} key={posts.id}/>)}
      </div>
    </div>
    
  )
 
}

let MapStateToProps = (state)=>{
  return {
   posts: state.ProfilePage.posts,
   messageText: state.ProfilePage.messageText
  }
}
let MapDispatchToProps = (dispatch)=>{
 
  return {
    UpdateText:(action)=>{
      dispatch(action)
    },
    AddPost:()=>{
      dispatch({ type: 'ADD-POST' })
    }
  }
}
const MyPosts_w = connect(MapStateToProps, MapDispatchToProps)(MyPosts)

export default MyPosts_w