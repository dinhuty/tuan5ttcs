import React from "react";
import {Link, useParams} from "react-router-dom"
import Newsdata from "./Newsdata";

import "../CSS/news.css"

function SingleNews() {
    
      const {NewsId} = useParams()
      const thisNews = Newsdata.find(ne => ne.id === NewsId)
 
    return(
        <>  
            <h1>Thông tin bài viết</h1>
            <p className="news-title">{thisNews.title}</p>
            <p className="news-desc">{thisNews.desc}</p>
            <img src={thisNews.img}/>
            <p className="news-content">{thisNews.content}</p> 
        </>
    )
    
}   

export default SingleNews;

