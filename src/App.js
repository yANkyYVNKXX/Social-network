import Profile from "./Components/Profile/Profile";
import Nav from "./Components/Navigation/Nav";
import Menu from "./Components/Menu/Menu";
import Dialogs from "./Components/Dialogs/Dialogs";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Users from "./Components/Users/Users";
import Login from "./Components/Login/Login";
import { connect } from "react-redux";
import { AuthThunk} from "./Redux/Auth-Reducer";
import React, { useEffect } from 'react'
import Preloader from "./Components/Utilits/preloader";

let App = ({Auth,initApp,userId})=> {

   useEffect(()=>{
     
     Auth()
    
   },[])
  
    if (initApp) return <Preloader/>
    

    return(
    <BrowserRouter>
    <div className="Wrapper_App">
      <Nav />
      <Menu />
      <div className="Wrapper_Content">
      <Switch>
      <Redirect exact path='/' to={'/profile/'+ userId}/>
      <Route path='/profile/:userID' render={()=> <Profile/>}/>
      <Route path='/dialogs' render={()=> <Dialogs/>}/>
      <Route path='/users' render={()=> <Users/>}/>
      <Route path='/login' render={()=> <Login/>}/>
      </Switch>
      </div>
    </div>
    </BrowserRouter>
    )
}


const MapDispatchToProps = (dispatch) => {
 return {
   Auth:()=>dispatch(AuthThunk)
 }
}

const MapStateToProps = (state) => {
  return {
    initApp:state.Auth.initApp,
    userId:state.Auth.id
  }
 }

App = connect(MapStateToProps,MapDispatchToProps)(App)
export default App