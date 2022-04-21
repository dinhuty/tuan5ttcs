import React from "react";
import { Link } from 'react-router-dom';
import Newsdata from "./Newsdata"
import "../CSS/news.css"
console.log(Newsdata)
function News() {
    const news = Newsdata.map(function(newx,index){
        return(
         <div key={newx.id} className="news-item">
              <Link to={`/news/${newx.id}`} style={{ textDecoration: 'none' }}>
                 <p className="news-title">{newx.title}</p>
              </Link>
              <p className="news-desc">{newx.desc}</p>
             </div> 
                 
        )
    })
    return(
        <>
            <h1>News</h1>
            <div className="news-list">
                {news}
            </div>
        </>
    )
}

export default News;