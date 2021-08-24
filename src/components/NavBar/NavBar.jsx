import React from "react"
import s from "./NavBar.module.css"
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <NavLink className={s.item} to='/users' activeClassName = {s.activeLink} >Users</NavLink>
            <NavLink className={s.item} to ='/friends' activeClassName = {s.activeLink} >Follower</NavLink>
            <NavLink className={s.item} to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            {/* <NavLink className={s.item} to='/dialogs' activeClassName={s.activeLink}>Dialogs</NavLink> */}
            <NavLink className={s.item} to='/news' activeClassName={s.activeLink}>News</NavLink>
            <NavLink className={s.item} to='/music' activeClassName={s.activeLink} >Music</NavLink>


        </nav>
    )
}
export default NavBar