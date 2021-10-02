import style from './Nav.module.css'
import logo from './Img/logo.png'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Logout } from '../../Api';
import { isAuthAc } from '../../Redux/Auth-Reducer';


 function Nav(props) {
   const logout = ()=>{
    Logout()
    .then(response=>props.Auth(isAuthAc(response.data.data,false)))
   }
  return (
    <nav className={style.Nav}>
      <div className={style.Logo}>
        <img src={logo}></img>
      </div>
      {props.isAuth?<div>{props.UserName}<button onClick={logout}>logout</button></div>
      :<NavLink to='/login'><button>Login</button></NavLink>}
    </nav>
  );
}

const MapStateToProps =(state)=>{
  return {
    isAuth:state.Auth.isAuth,
    UserName:state.Auth.login
  }
}
const MapDispatchToProps = (dispatch)=>{
  return {
    Auth:(action)=>dispatch(action)
  }
}
Nav = connect(MapStateToProps,MapDispatchToProps)(Nav)
export default Nav