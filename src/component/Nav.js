import React from "react";
import { Link } from "react-router-dom";
import "../CSS/nav.css"
function Nav() {
    const nav ={

    }
    const logo= "https://i.dlpng.com/static/png/6388172_preview.png"
    return(
    <>
       <nav className="nav">
        <ul>
            <li>
                <img src={logo} className="logo" alt=""/>
            </li>
            <li>
                <Link to="/">Shop</Link>
            </li>
            <li>
       
                <Link to="/products">Product</Link>
            </li>
            <li>
            <Link to="/news">News</Link>

            </li>
            <li className="ll">
            <Link to="/login" className="l2">Login</Link>
            <p>|</p>
            <Link to="/register" className="l2">Register</Link>
            </li>
        </ul>
    </nav> 
    </>
    )
}

export default Nav;