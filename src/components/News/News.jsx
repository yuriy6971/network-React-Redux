import React from'react';
import s from './news.module.css'

const News = () => {
    return(
        <div className = {s.block_news}>
            <h2 className = {s.title}>latest news</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, repellat quia obcaecati iusto non, beatae mollitia aspernatur, excepturi aliquam libero eligendi explicabo aperiam soluta ipsum!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, suscipit!</p>
        </div>
    )
}
export default News