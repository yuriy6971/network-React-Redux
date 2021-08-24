import React from 'react'
import s from './profileInfo.module.css'
import Preloader from '../../common/Preloader.jsx'
import userSplash from '../../../assets/images/images.jpg'


const ProfileInfo = (props) => {

    const showPosts = () =>{
        props.funcShowPosts()
    }

    if (!props.profile) {
        return <div className={s.profile_info}>

            <img className={s.pics} src="https://cdn.pixabay.com/photo/2021/01/07/18/19/boat-5898153__340.jpg" alt="pics" />
            <div className={s.user_info}>
                <p>Please, go to users page.</p>
            </div>

        </div>
    }

    return (
        <div className={s.profile_info}>
            <img className={s.pics} src="https://cdn.pixabay.com/photo/2021/01/07/18/19/boat-5898153__340.jpg" alt="pics" />
            <div className={s.user_info}>
                <div className={s.avatar}>
                    <img className={s.pics_user} src={!props.profile.photo ? userSplash : props.profile.photo} alt="user_photo" />
                    <div className={s.user_name}>{props.profile.username}</div>
                    <div> <span>userId: </span> {props.profile.id}</div>
                </div>
                <div className={s.name_email}>
                    <p className={s.name}> <span>name: </span> {props.profile.name}</p>
                    <p className={s.email}> <span>email: </span> {props.profile.email} </p>
                    <div className = {s.block}>
                        <button onClick = {showPosts} className={s.butt_post}>My Posts</button>
                    </div>
                </div>
                <div className={s.address}>
                    <p><span>street: </span>{props.profile.address.street} </p>
                    <p><span>suite: </span>{props.profile.address.suite} </p>
                    <p><span>city: </span>{props.profile.address.city}</p>
                </div>
                <div className={s.geo}>
                    <p><span>lat: </span>{props.profile.address.geo.lat}</p>
                    <p><span>lng: </span>{props.profile.address.geo.lng}</p>
                </div>


            </div>
        </div>
    )
}

export default ProfileInfo