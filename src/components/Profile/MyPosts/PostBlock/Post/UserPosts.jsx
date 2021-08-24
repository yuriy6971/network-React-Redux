import React from 'react'
import s from './post.module.css'


const UserPosts = (props) => {
    return <div className = {s.posts}>
        <hr />
        <div  className = {s.title}>{props.title}: </div>
        <div className = {s.body}>{props.body} </div>

    </div>
}

export default UserPosts