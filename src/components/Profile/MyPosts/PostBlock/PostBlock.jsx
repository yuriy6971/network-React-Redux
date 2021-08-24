import React from 'react';
import s from './postBlock.module.css'
import Post from './Post/Post';
import UserPosts from './Post/UserPosts';
import { withRouter } from 'react-router-dom'

const PostBlock = (props) => {

// const PostData = [
//     {id : 1, message : "Hello, my friends!", likeCount : 3},
//     {id : 2, message : "i learn react", likeCount : 7},
//     {id : 3, message : "I learn redux twoo", likeCount :5}

// ]

 const postElements = props.posts.map(item => <Post message = {item.message} likeCount = {item.likeCount} />)

 const filterPosts = props.postUsersData.filter(item => item.userId == props.currentId)
 const userPostsElements = filterPosts.map(item => {
     return ( 
         
     <UserPosts  title = {item.title} body = {item.body} />
      )
 })

 if(!props.showPosts){
     return(
         <div>
             {postElements}
         </div>
     )
 }

 return(
    <div>
     
     {postElements }
     
     {userPostsElements}
      
  
  </div>
  )

 }

export default PostBlock

