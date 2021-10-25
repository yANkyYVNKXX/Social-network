import { connect } from "react-redux"
import { Redirect } from "react-router"
import { FC } from "react"
import { AppState } from "../Redux/Store"


type MapState = {
  isAuth:boolean
}

const WithAuthRedirect = (Component:FC) => {

  const RedirectLogin = ({isAuth}:MapState)=>{
    
    if (!isAuth) return <Redirect to="/login"/>
    
    return <Component/> 
  }

  let MapStateToProps = (state:AppState):MapState=>{
    return {
      isAuth:state.Auth.isAuth
    }
}
 
 let connectedRedirectLogin = connect(MapStateToProps)(RedirectLogin)
 return connectedRedirectLogin

}


 export default WithAuthRedirect