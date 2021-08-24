import React from 'react';
import s from './myPosts.module.css'
import PostBlock from './PostBlock/PostBlock';

const MyPosts = (props) => {

    let newPostElement = React.createRef()

    const addPost = () => {
        if(props.postText != ""){ 
        props.addPost()
         }
    }

    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    return (
        <div className={s.my_posts}>
            <div className={s.title} ></div>
            <div className={s.input_text}>
                <textarea name="text" cols="70" rows="3" placeholder="введите текст " value={props.postText} ref = {newPostElement} onChange = {onPostChange} />
                <button className={s.butt} type="butoon" onClick={addPost} >Add Post</button>

            </div>
            <PostBlock posts={props.posts}  postUsersData = {props.postUsersData} currentId = {props.currentId} showPosts = {props.showPosts} />
        </div>

    )
}

export default MyPosts