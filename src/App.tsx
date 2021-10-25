import Nav from "./Components/Navigation/Nav";
import Menu from "./Components/Menu/Menu";
import Dialogs from "./Components/Dialogs/Dialogs";
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Users from "./Components/Users/Users";
import Login from "./Components/Login/Login";
import { connect } from "react-redux";
import { AuthThunk} from "./Redux/Auth-Reducer";
import { Dispatch, FC, useEffect } from 'react'
import Preloader from "./Components/Utilits/preloader";
import { AppState } from "./Redux/Store";
import Profile from "./Components/Profile/Profile";
import { Layout } from "antd";
import 'antd/dist/antd.css';
import Chat from "./Components/Chat/Chat";
import { QueryParamProvider } from 'use-query-params';

const { Header, Content, Footer, Sider } = Layout;

type MapStateToPropsType = {
  initApp:boolean
    userId:number | null
    isAuth:boolean
}

type MapDispatchToPropsType = {
  Auth:()=> void
}


let App:FC<MapStateToPropsType & MapDispatchToPropsType> = ({Auth,initApp,userId,isAuth})=> {

   useEffect(()=>{
     
     Auth()
    
   },[userId])
  
    if (initApp) return <Preloader/>
    

    return(
      <BrowserRouter>
      <QueryParamProvider ReactRouterRoute={Route}>
      <div className='container'>
      
<Layout style={{backgroundColor:'#f5f5f5'}}>

    <Header style={{height:'100px', backgroundColor: '#5d8aa8',
  boxShadow: '0px 5px 5px grey', marginBottom:'20px'}}>
    <Nav />
    </Header>
    <Layout style={{backgroundColor:'#f5f5f5'}} >
      <Sider className='Menu'>
      <Menu />
      </Sider>
      <Layout style={{ padding: '0 24px 24px',backgroundColor:'#f5f5f5' }}>
        <Content style={{ padding: '50px'}}>
          <Switch>
      <Redirect exact path={'/'} to={'/profile/'+ userId}/>
      <Redirect exact path={'/profile/'} to={'/profile/'+ userId}/>
      <Route path='/profile/:userID' render={()=> <Profile/>}/>
      <Route path='/dialogs' render={()=> <Dialogs/>}/>
      <Route path='/users' render={()=> <Users/>}/>
      <Route path='/login' render={()=> <Login/>}/>
      </Switch>
        </Content>
      </Layout>
    </Layout>
    
  </Layout>
  {isAuth && <Chat/>}
 </div>
 </QueryParamProvider>
    </BrowserRouter>
    
    )
}


const MapDispatchToProps = (dispatch:Dispatch<any>):MapDispatchToPropsType => {
 return {
   Auth:()=>dispatch(AuthThunk)
 }
}

const MapStateToProps = (state:AppState):MapStateToPropsType => {
  return {
    initApp:state.Auth.initApp,
    userId:state.Auth.id,
    isAuth:state.Auth.isAuth
  }
 }

 export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppState>(MapStateToProps,MapDispatchToProps)(App)


 