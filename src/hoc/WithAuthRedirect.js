import { connect } from "react-redux"
import { Redirect } from "react-router"
import React from "react"


const WithAuthRedirect = (Component) => {

  const RedirectLogin = (props)=>{
    
    if (!props.isAuth) return <Redirect to="/login"/>
    
    return <Component/>
  }

  let MapStateToProps = (state)=>{
    return {
      isAuth:state.Auth.isAuth
    }
}
 
 let connectedRedirectLogin = connect(MapStateToProps)(RedirectLogin)
 return connectedRedirectLogin

}


 export default WithAuthRedirect