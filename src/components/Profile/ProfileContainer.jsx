import React from 'react';
import Profile from './Profile.jsx';
import { connect } from 'react-redux';
import { setUserProfileActionCreator, AddPostActionCreator, UpdateNewPostTextActionCreator,setCurrentIdActionCreator,cleanPostDataActionCreator, showPostsActionCreator } from '../../redux/profile_reducer.js'
import { withRouter } from 'react-router-dom'

class ProfileContainer extends React.Component {

    constructor(props) {
        super(props)
    }
     

     
    
    componentDidMount() {
        let userNum = this.props.match.params.userId - 1
        let browserUserId = this.props.match.params.userId
        // if (!userNum) {
        //     userNum = null
        // }
        this.props.setCurrentId(browserUserId)
        this.props.setUserProfile(this.props.users[userNum])

    }
    componentWillMount(){
        if(this.props.posts.length != 0){ 
            this.props.cleanPostData()
            
        }
    }

    render() {
        return <div>
            <Profile {...this.props} profile={this.props.profile} posts={this.props.posts} postText={this.props.postText}
                updateNewPostText={this.props.updateNewPostText} addPost={this.props.addPost} postUsersData={this.props.postUsersData} currentId = {this.props.currentId}  showPosts = {this.props.showPosts}funcShowPosts = {this.props.funcShowPosts} />
        </div>


    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        users: state.usersPage.users,
        posts: state.profilePage.postData,
        postText: state.profilePage.newPostText,
        postUsersData: state.usersPage.postUsersData,
        currentId : state.profilePage.currentId,
        showPosts : state.profilePage.showPosts

    }
}

let mapDispatchToProps = (dispatch) => {
    return {

        setUserProfile: (profile) => {
            dispatch(setUserProfileActionCreator(profile))
        },
        updateNewPostText: (text) => {
            const action = UpdateNewPostTextActionCreator(text);
            dispatch(action)
        },
        addPost: () => {
            dispatch(AddPostActionCreator());
        },
        setCurrentId: (stringId) => {
            dispatch(setCurrentIdActionCreator(stringId))
        },
        cleanPostData : () => {
            dispatch(cleanPostDataActionCreator())
        },
        funcShowPosts : () => {
           dispatch(showPostsActionCreator())
        }

    }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent)