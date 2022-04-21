import React from "react";
import "../CSS/shop.css"
import Products from "./Products";


function Shop() {
   
    return(
        <>
             <div className="shop">
                <img className="shop_banner" src="https://www.mygermanphone.de/wp-content/uploads/iPhone-13-Pro-banner.png" alt=""/>
                <Products/>
            </div>
        </>
    )
}

export default Shop;