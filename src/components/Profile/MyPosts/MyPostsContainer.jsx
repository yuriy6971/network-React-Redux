import React from 'react'
import MyPosts from './MyPosts.jsx'
import {connect} from 'react-redux'
import { UPDATE_NEW_POST_TEXTActionCreator, ADD_POSTActionCreator } from '../../../redux/profile_reducer.js'


const mapStateToProps = (state) => {
    return {
        posts : state.profilePage.postData,
        postText : state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText : (text) => {
            const action = UPDATE_NEW_POST_TEXTActionCreator(text);
            dispatch(action)
        },
        addPost : () => {
            dispatch (ADD_POSTActionCreator());
        }

    }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts)

// const MyPostsContainer = (props) => {
//     return (
//         <div>
//             <div>MMM</div>
//             <MyPosts name = "Vasya" />
//         </div>
//     )

    
// }


export default MyPostsContainer