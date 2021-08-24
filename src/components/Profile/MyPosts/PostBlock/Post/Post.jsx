import React from 'react';
import s from './post.module.css'

const Post = (props) => {
    return (
        <div className={s.items}>
            <div className={s.sign}></div>
            <p className={s.mess_text}>
                {props.message}
                <span className={s.like}>{props.likeCount}</span>
            </p>
        </div>
    )
}
export default Post