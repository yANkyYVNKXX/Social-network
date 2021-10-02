import style from './Profile.module.css'
import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import { getProfileThunk, getStatusThunk } from '../../Redux/ProfilePage-Reducer';
import { compose } from 'redux';
import WithAuthRedirect from '../../hoc/WithAuthRedirect';


class Profile extends React.Component {

  
  setProfile (user) { 
    this.props.setStateProfile(user)
    this.props.getStatus(user)
  }

  componentDidMount(){
   this.setProfile(this.props.match.params.userID)}
  
  
  componentDidUpdate(prevProps){
    if (this.props.match.params.userID != prevProps.match.params.userID)
    {this.setProfile(this.props.match.params.userID)}

  }

  render (){
    return(
    <div className={style.Content}>
      <ProfileInfo profile={this.props.profile}/>
      <MyPosts />
    </div>
    )
  }
}

let MapDispatchToProps = (dispatch)=>{
return {
  setStateProfile:user=>dispatch(getProfileThunk(user)),
  getStatus:user=>dispatch(getStatusThunk(user))
}

}
let MapStateToProps = (state)=>{
  return {
    profile: state.ProfilePage.profile,
    Status: state.ProfilePage.status,
    isAuth:state.Auth.isAuth
  }
}

export default compose(
  WithAuthRedirect,
  withRouter,
  connect(MapStateToProps,MapDispatchToProps)
)(Profile)
