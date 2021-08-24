import React from "react"
import s from "./Header.module.css"

const Header = () => {
    return (
        <header className = {s.head}>
            <div className = {s.logo}>
                <img className = {s.pics} src="https://st.depositphotos.com/1744650/2796/v/111/depositphotos_27962707-stock-illustration-social-media-speech-bubble.jpg" alt="logotype"/>
            </div>
            <div className = {s.social}>Социальная сеть</div>
        </header>
    )
}
export default Header