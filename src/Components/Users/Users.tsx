import React, { ComponentType, Dispatch, FC, useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import WithAuthRedirect from '../../hoc/WithAuthRedirect';
import { actions, followThunk, getUsersThunk, unfollowThunk } from '../../Redux/UsersPage-Reducer';
import Pagination from '../Utilits/Pagination';
import Preloader from '../Utilits/preloader';
import Search from './Search';
import style from './Users.module.css'
import ava from './../Profile/Img/Avatar.jpg'
import { AppState } from '../../Redux/Store';
import { users } from '../../Types/Types';
import { NumberParam, StringParam, useQueryParam} from 'use-query-params';


type MapState = {
  users: Array<users>
  isFetching: boolean
  isAuth: boolean
  currentPage:number | null | undefined
}

type MapDispatch = {
  getUsers: (current: number | undefined | null, term: string | null | undefined ) => void
}

let Users: FC<MapState & MapDispatch> = ({ getUsers, isFetching, users, currentPage }) => {

  const [сurrent, updCurrent] = useQueryParam('page', NumberParam)

 
  const portionSize = 10
  const [term, updTerm] = useQueryParam('term', StringParam)
  const [{startPage,endPage}, updPagesLength] = useState({startPage: 1,endPage:portionSize})

  console.log(term)
  useEffect(() => {
    getUsers(сurrent, term)
    updCurrent(currentPage)
  }, [])
  

  const dispatch = useDispatch()

  const search = (value: { term: string }) => {

    getUsers(undefined, value.term)
    
    if (value.term) {
      updTerm(value.term)
    }
    else 
    {
      updTerm(undefined)
    }
    updPagesLength({startPage:1,endPage:portionSize})
    dispatch(actions.ChangePageAc(1))
    updCurrent(currentPage)
  }

  const follow = (userId: number, e: React.FormEvent<EventTarget>) => {
    let button = e.target as HTMLInputElement
    dispatch(followThunk(userId, button))
  }

  const unfollow = (userId: number, e: React.FormEvent<EventTarget>) => {
    let button = e.target as HTMLInputElement
    dispatch(unfollowThunk(userId, button))

  }

  return (
    <div>
      <div className={style.header}>

        <Search onSubmit={search} initialValues={{term:term} as any}/>
        <div className={style.Pagination}>
        <Pagination term={term} startPage={startPage} endPage={endPage} updPagesLength={updPagesLength} portionSize={portionSize} updCurrent={updCurrent}/>
        </div>
      </div>
      <div className={style.content}>

        
          
          <div className={style.users}>
          {isFetching ?
            <span className={style.preloader}><Preloader /></span>
            : users.map((u: users) =>

              <div className={style.Block}>
               
                <span><img src={u.photos.small ? u.photos.small : ava} className={style.Avatar}></img></span>
                <div className={style.infoUser}>

                <NavLink to={'profile/' + u.id}><p className={style.userName}>{u.name}</p></NavLink>

                <span className={style.elipsiss}>{u.status}</span>

                {!u.followed ? <button className={style.Follow} onClick={(e) => follow(u.id, e)}>Follow</button> : 
                <button className={style.Unfollow} onClick={(e) => unfollow(u.id, e)}>Unfollow</button>}
                
                </div>
              </div>


            )}
        </div>



      </div>
    </div>
  )

}

let MapStateToProps = (state: AppState): MapState => {
  return {
    users: state.UsersPage.items,
    isFetching: state.Utilits.isFetching,
    isAuth: state.Auth.isAuth,
    currentPage: state.UsersPage.currentPage
  }
}

let MapDispatchToProps = (dispatch: Dispatch<any>): MapDispatch => {

  return {
    getUsers: (current: number | undefined | null, term: string | null | undefined) => dispatch(getUsersThunk(current, term))
  }
}

export default compose<ComponentType>(
  WithAuthRedirect,
  connect<MapState, MapDispatch, unknown, AppState>(MapStateToProps, MapDispatchToProps))(Users)
