import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { NavLink} from 'react-router-dom';
import { compose } from 'redux';
import WithAuthRedirect from '../../hoc/WithAuthRedirect';
import { getUsersThunk } from '../../Redux/UsersPage-Reducer';
import Pagination from '../Utilits/Pagination';
import Preloader from '../Utilits/preloader';
import Search from './Search';
import style from './Users.module.css'
import ava from './../Profile/Img/Avatar.jpg'

let Users = (props) => {

  const [term, updTerm] = useState('')
  
  useEffect(()=>{
    props.getUsers()
    
  },[])
  
  const search = (value)=>{
      
       props.getUsers(null,value.term)
       updTerm(value.term)

  }

    return (
      <div>
        <div className={style.header}>
      
      <Search onSubmit={search}/>
      </div>
      <div className={style.content}>
     
      <div className={style.users}>    
        <Pagination term={term}/>
        {props.isFetching ? 
        <span className={style.preloader}><Preloader /></span>
        :props.users.map( u=> 
         <NavLink to={'profile/'+u.id}>
          <div className={style.Block}>
            <span><img src={u.photos.small ? u.photos.small:ava} className={style.Avatar}></img></span>
            <p>{u.name}</p>
            </div>
            </NavLink>
        )}
        </div>

        
       
        </div>
        </div>
    )

        }

let MapStateToProps = (state)=>{
    return {
      users:state.UsersPage.items,
      TotalUsers:state.UsersPage.totalCount,
      CurrentPage:state.UsersPage.currentPage,
      ButtonDisabled:state.Utilits.ButtonDisabled,
      isFetching:state.Utilits.isFetching,
      isAuth:state.Auth.isAuth
    }
}

let MapDispatchToProps = (dispatch)=>{

  return {
    getUsers:(current, term)=> dispatch(getUsersThunk(current, term))
}
}

export default Users = compose (
  WithAuthRedirect,
  connect(MapStateToProps,MapDispatchToProps))(Users)
