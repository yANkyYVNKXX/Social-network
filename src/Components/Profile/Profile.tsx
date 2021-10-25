import style from './Profile.module.css'
import React, { ComponentType, Dispatch } from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps, RouteProps} from 'react-router-dom';
import { getProfileThunk, getStatusThunk, updProfileThunk } from '../../Redux/ProfilePage-Reducer';
import { compose } from 'redux';
import WithAuthRedirect from '../../hoc/WithAuthRedirect';
import { profile, profileUPD } from '../../Types/Types';
import { AppState } from '../../Redux/Store';


type MapStateToPropsType = {
  profile: profile
  Status: string
  isFetching: boolean
  userId: number | null
}

type MapDispatchToPropsType = {
  setStateProfile:(user:number)=> void
  getStatus:(user:number)=> void
  updProfile:(data: profileUPD, user:number | null)=> void
}


type withRouterProps = {
  userID:string 
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<withRouterProps>

class Profile extends React.Component<PropsType> {

   
  setProfile (user:number) { 
    this.props.setStateProfile(user)
    this.props.getStatus(user)
  }

  componentDidMount(){
   this.setProfile(parseInt(this.props.match.params.userID))}
  
  
  componentDidUpdate(prevProps:PropsType){
    if (this.props.match.params.userID != prevProps.match.params.userID)
    {this.setProfile(parseInt(this.props.match.params.userID))}

  }

  render (){
    return(
    <div>
      <ProfileInfo userId={this.props.userId} profile={this.props.profile} updProfile={this.props.updProfile} isFetching={this.props.isFetching}/>
    </div>
    )
  }
}

let MapDispatchToProps = (dispatch:Dispatch<any>):MapDispatchToPropsType=>{
return {
  setStateProfile:(user:number)=>dispatch(getProfileThunk(user)),
  getStatus:(user:number)=>dispatch(getStatusThunk(user)),
  updProfile:(data:profileUPD,user:number | null)=>dispatch(updProfileThunk(data,user))
}

}
let MapStateToProps = (state:AppState):MapStateToPropsType=>{
  return {
    profile: state.ProfilePage.profile,
    Status: state.ProfilePage.status,
    isFetching: state.Utilits.isFetching,
    userId: state.Auth.id
  }
}

export default compose<ComponentType>(
  WithAuthRedirect,
  withRouter,
  connect<MapStateToPropsType,MapDispatchToPropsType,unknown,AppState>(MapStateToProps,MapDispatchToProps)
)(Profile) 
