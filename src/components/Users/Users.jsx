import React from "react"
import s from "./users.module.css"
import { NavLink } from 'react-router-dom';
import userSplash from '../../assets/images/images.jpg';



const Users = (props) => {



    return (
        <div className={s.wrapper}>



            {
                props.users.map((item,index) => <div key={index.toString()} >
                    <div className={s.container}>
                        <div className={s.avatar}>
                            <NavLink to={'/profile/' + item.id} >
                                <img className={s.user_photo} src={item.photo != null ? item.photo : userSplash} alt="userPhoto" />
                            </NavLink>
                            <div className={s.butt_followed}>
                                {
                                    props.boollfollowed[item.id - 1] == false ? <button className={s.butt} onClick={() => { props.follow(item) }} >Follow</button>
                                        : <button className={s.butt} onClick={() => { props.unfollow(item) }}>Unfollow</button>
                                }
                            </div>

                        </div>
                        <div className={s.user_info}>
                            <div className={s.user_login}>
                                <div className={s.user_name}> <span>userName : </span> {item.username}</div>
                                <div className={s.user_id}> <span>Id :</span> {item.id}</div>
                            </div>
                            <div className={s.location}>
                                <div className={s.city}> <span>city :</span> {item.address.city}</div>
                                <div className={s.email}> <span>email :</span> {item.email}</div>
                            </div>
                        </div>
                    </div>

                </div>)
            }
        </div >

    )
}

export default Users