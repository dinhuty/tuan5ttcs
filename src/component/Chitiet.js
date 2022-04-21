import React, {useState} from "react";
import {Link, useParams} from "react-router-dom"
import Productsdata from "./Productsdata";
import '../CSS/chitiet.css'
function Chitiet() {

      const {productId} = useParams()
      const thisProduct = Productsdata.find(prod => prod.id === productId)
      const [img,setImg]= useState(thisProduct.img)
      const [price,setPrice] = useState(thisProduct.price)
    var currentActive=0
    function activeColor(y) {
        var btns= document.querySelectorAll(".detail-product-color")
        btns.forEach((btn, index)=> {
                btn.classList.remove('ac')
        })
        btns[y].classList.add('ac')
    }
    function activeRam(y) {
        var btns= document.querySelectorAll(".ram_rom")
        btns.forEach((btn, index)=> {
                btn.classList.remove('ac')
        })
        btns[y].classList.add('ac')
    }
    return(
        <>  <h1 className="detail-title">Thong tin san pham</h1>
           <div className="detail">
                
                <div className="detail-tq">
                <img className="detai-produc-img" src={img}/>
               
                </div>
                <div className="detail-ct">
                <p className="detai-product-title">{thisProduct.title}</p>
                <p className="detai-product-price">{price}</p>
                    <table className="detail-table">
                        <tr className="ct-tr">
                            <td>Màn hình:</td>
                            <td>{thisProduct.manhinh}</td>
                        </tr>
                        <tr className="ct-tr">
                            <td>Hệ điều hành:</td>
                            <td>{thisProduct.hdh}</td>
                        </tr>
                        <tr className="ct-tr">
                            <td>Camera:</td>
                            <td>{thisProduct.camera}</td>
                        </tr>
                        <tr className="ct-tr">
                            <td>Chip:</td>
                            <td>{thisProduct.chip}</td>
                        </tr>
                        <tr className="ct-tr">
                            <td>Ram:</td>
                            <td>{thisProduct.ram}</td>
                        </tr>
                        <tr className="ct-tr">
                            <td>Bộ nhớ:</td>
                            <td>{thisProduct.rom}</td>
                        </tr>
                        <tr className="ct-tr">
                            <td>Sim:</td>
                            <td>{thisProduct.sim}</td>
                        </tr>
                        <tr className="ct-tr">
                            <td>Pin:</td>
                            <td>{thisProduct.pin}</td>
                        </tr>

                    </table>
                   <div className="detail-ch">
                   <button className="detail-product-color a1 ac"
                            type="button"
                            onClick={() => {setImg(thisProduct.img);activeColor(0)}}
                        >Màu trắng</button>
                   <button className="detail-product-color a2"
                            type="button"
                            onClick={() => {setImg(thisProduct.img2);activeColor(1)}}
                        >Màu đỏ</button>
                    <button className="detail-product-color a3"
                            type="button"
                            onClick={() => {setImg(thisProduct.img3);activeColor(2)}}
                        >Màu xanh</button>
                         
                   </div>
                   <div className="detail-ch">
                   <button className="detail-product-color ram_rom ac"
                            type="button "
                            onClick={() => {setPrice(thisProduct.price);activeRam(0)}}
                        >8G/128GB</button>
                   <button className="detail-product-color ram_rom"
                            type="button"
                            onClick={() => {setPrice(thisProduct.price2);activeRam(1)}}
                        >12G/256GB</button>
                         
                   </div>
                    <div className="detail-button">
                        <div className="b-buy b-h">
                            Mua
                        </div>
                        <div className="b-order b-h">
                            Đặt hàng
                        </div>
                    </div> 
                </div>
           </div>
           <p className="detai-product-title">Thong tin san pham {thisProduct.title}</p>
           <p>{thisProduct.desc}</p>
        </>
    )
    
}   

export default Chitiet;
