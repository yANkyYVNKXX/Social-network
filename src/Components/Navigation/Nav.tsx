import style from './Nav.module.css'
import logo from './Img/logo.png'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {LogoutThunk } from '../../Redux/Auth-Reducer';
import { Dispatch, FC } from 'react';
import { AppState } from '../../Redux/Store';
import { Button } from 'antd';


type MapStateToPropsType = {
  isAuth:boolean
  UserName:string | null
}

type MapDispatchToPropsType = {
  Logout:()=>void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

 const Nav:FC<PropsType> = ({isAuth, UserName, Logout})=>{
   const logout = ()=>{
    Logout()
   }
  return (
    <nav className={style.Nav}>
      <div className={style.Logo}>
        <img src={logo}></img>
      </div>
      {isAuth?<div><span>{UserName}</span><Button className='Button' onClick={logout}>logout</Button></div>
      :<NavLink to='/login'><Button className='Button'>Login</Button></NavLink>}
    </nav>
  );
}

const MapStateToProps =(state:AppState):MapStateToPropsType=>{
  return {
    isAuth:state.Auth.isAuth,
    UserName:state.Auth.login
  }
}
const MapDispatchToProps = (dispatch:Dispatch<any>)=>{
  return {
    Logout:()=>dispatch(LogoutThunk)
  }
}
export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppState>(MapStateToProps,MapDispatchToProps)(Nav)