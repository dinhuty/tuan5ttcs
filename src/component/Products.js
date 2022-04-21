import React from "react";
import "../CSS/products.css"
import { Link } from 'react-router-dom';
import Productsdata from "./Productsdata";

function Products() {
    const products = Productsdata.map(function (product,index){
        return( 
        <div key={product.id} className="product-item">
             <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
                <div className="div-img">
                <img  className="product-img" src={product.img} alt=""/>
                <div className="div-ct">xem chi tiet</div>
                </div>
             </Link>
             <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
                <p className="product-title">{product.title}</p>
            </Link>
            <p className="product-price">{product.price}</p> 
                </div>    
                )
    })
    return(
        <>
            <h1 className="products-title">Product</h1>
            <div className="product-list">
            {products}

            </div>
           
                
            
        </>
    )
}

export default Products;