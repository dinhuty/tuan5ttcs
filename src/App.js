import React from "react";

import { Routes , Route } from "react-router-dom";
import Nav from "./component/Nav";
import Shop from "./component/Shop";
import Products from "./component/Products";
import News from "./component/News";
import Chitiet from "./component/Chitiet";
import Footer from "./component/Footer";
import SingleNews from "./component/SingleNews";
import Login from "./component/Login";
import Register from "./component/Register";

function App() {


  return (
   <>
      <Nav />
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/products/:productId" element={<Chitiet/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/news/:NewsId" element={<SingleNews/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>

      </Routes>
      <Footer />
   </>
  );
}

export default App;
