import { FC } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AppState } from '../../Redux/Store';
import style from './Menu.module.css'



type MapStateToPropsType = {
  UserId: number | null
}

 const Menu: FC<MapStateToPropsType>= ({UserId}) => {

  return (
    <div className={style.Menu}>
      <ul>
      <li>
          <NavLink to={'/profile/' + UserId} activeClassName={style.Active}>Profile</NavLink>
        </li>
        <li>
          <NavLink to='/dialogs' activeClassName={style.Active}>Messages</NavLink>
        </li>
        <li>
          <NavLink to='/хуй' activeClassName={style.Active}>Music</NavLink>
        </li>
        <li>
          <NavLink to='/пизда' activeClassName={style.Active}>Setting</NavLink>
        </li>
        <li>
          <NavLink to='/users' activeClassName={style.Active}>Users</NavLink>
        </li>
      </ul>
    </div>
  );
}

const MapStateToProps = (state:AppState):MapStateToPropsType=>{
  return {
    UserId: state.Auth.id
  }
}

export default connect<MapStateToPropsType, {}, {},AppState>(MapStateToProps,{})(Menu)

