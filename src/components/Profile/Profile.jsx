import React from 'react'
import s from './profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'
import MyPosts from './MyPosts/MyPosts.jsx'



const Profile = (props) => {
    return (
        <div className = {s.content}>
            <ProfileInfo profile = {props.profile} funcShowPosts = {props.funcShowPosts} />
            <MyPosts  posts = {props.posts} postText = {props.postText} updateNewPostText = {props.updateNewPostText} addPost = {props.addPost} postUsersData = {props.postUsersData} currentId = {props.currentId} showPosts = {props.showPosts} />

            {/* <MyPostsConcontainer /> */}
        </div>
    )
} 
export default Profile