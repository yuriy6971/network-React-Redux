import React from "react";
import Users from './Users.jsx'
import {connect} from "react-redux"
import { followAc, unfollowAC, getUsersThunkCreator, getUsersPostsThunkCreator } from "../../redux/users_reducer.js";
import {hidePostsActionCreator} from '../../redux/profile_reducer.js'
import Preloader from "../common/Preloader.jsx";



class UsersClass extends React.Component {
    constructor(props){
        super(props)
    }
   componentDidMount(){
       this.props.getUsersThunk()
       this.props.getUsersPostThunk()
       this.props.funcHidePosts()
     //  this.props.setFriends(this.props.users)
   
   }

   componentDidUpdate(){ 
       console.log('ku-ku')
    }


   render() {
       return <div>
           {this.props.isFetching ? <Preloader/> : null}
           <Users users = {this.props.users} follow = {this.props.follow}
           unfollow = {this.props.unfollow} boollfollowed = {this.props.boollfollowed} />
       </div>
   }

}



let mapStateToProps = (state) => {
    return {
        users :state.usersPage.users,
        isFetching : state.usersPage.isFetching,
        boollfollowed : state.usersPage.boollfollowed
       // friends : state.usersPage.friends
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow : (userId) => {
            dispatch(followAc(userId))
        },

        unfollow : (userId) => {
            dispatch(unfollowAC(userId))
        },

     
        getUsersThunk : () => {
            dispatch(getUsersThunkCreator())
        },
         getUsersPostThunk : ()=> {
             dispatch(getUsersPostsThunkCreator())
         },
         funcHidePosts : () => {
             dispatch(hidePostsActionCreator())
         },
        //  setFriends : (dataFriends) => {
        //      dispatch(setFriendsActionCreator(dataFriends))
        //  }
    
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (UsersClass)

export default UsersContainer
