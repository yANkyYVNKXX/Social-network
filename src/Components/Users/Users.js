import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import WithAuthRedirect from '../../hoc/WithAuthRedirect';
import { getUsersThunk } from '../../Redux/UsersPage-Reducer';
import Pagination from '../Utilits/Pagination';
import Preloader from '../Utilits/preloader';
import style from './Users.module.css'

let Users = (props) => {
  
  useEffect(()=>{
    props.getUsers()
    
  },[])
     
    return (
      <div>
      <div>
        <Pagination/>
        {props.isFetching ? 
        <Preloader/>
        :props.users.map( u=> 
        <div className={style.Block} key={u.id}>
        <div><img src={u.photos.small} className={style.Avatar}></img></div>
        <NavLink to={'profile/'+u.id}><div><h1>{u.name}</h1></div></NavLink>
        <div>{u.status}</div>
        </div>
        )}
        </div>
        </div>
    )

        }

let MapStateToProps = (state)=>{
    return {
      users:state.UsersPage.items,
      TotalUsers:state.UsersPage.totalCount,
      CurrentPage:state.UsersPage.currentPage,
      ButtonDisabled:state.UsersPage.ButtonDisabled,
      isFetching:state.UsersPage.isFetching,
      isAuth:state.Auth.isAuth
    }
}

let MapDispatchToProps = (dispatch)=>{

  return {
    getUsers:(current)=> dispatch(getUsersThunk(current))
}
}

export default Users = compose (
  WithAuthRedirect,
  connect(MapStateToProps,MapDispatchToProps))(Users)
