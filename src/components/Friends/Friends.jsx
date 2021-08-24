import React from 'react'
import s from './friends.module.css'
import userSplash from '../../assets/images/images.jpg'

const Friends = (props) => {


  if (props.friends.length == 0) {
    return <div>
      <h2 className={s.title}>Add followers from users page</h2>
    </div>
  }
  return (
    <div className={s.friends_container}>

      {
        props.friends.map((item, index) => <div key={index.toString()} className={s.item_friend}>

          <div className={s.block_friend}>
            <div>
              <img className={s.photo} src={item.photo != null ? item.photo : userSplash} alt="photo" />
              <div className = {s.user_name}>{item.username}</div>
            </div>

            <div className = {s.friend_info}>
              <div>name : <span>{item.name}</span></div>
              <div>email : <span>{item.email}</span></div>
            </div>
          </div>

        </div>)
      }

    </div>
  )
}
export default Friends