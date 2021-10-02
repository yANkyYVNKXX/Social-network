import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import style from './Menu.module.css'


 let Menu = (props) => {

  return (
    <div className={style.Menu}>
      <ul>
      <li>
          <NavLink to={'/profile/' + props.UserId} activeClassName={style.Active}>Profile</NavLink>
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

const MapStateToProps = (state)=>{
  return {
    UserId: state.Auth.id
  }
}

const MapDispatchToProps = (dispatch)=> {
  return {

  }
}

Menu = connect(MapStateToProps,MapDispatchToProps)(Menu)

export default Menu
