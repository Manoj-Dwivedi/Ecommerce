import Navbar from "./Components/Navbar/Navbar"
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Shop from "./Pages/Shop"
import Shopcateagory from "./Pages/Shopcategory"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import LoginSignup from "./Pages/LoginSignup"
import Footer from "./Components/Footer/Footer"
import men_banner from './assets/banner.jpg'
import women_banner from './assets/women_banner.avif'
import kids_banner from './assets/kids_banner.jpg'

function App() {
 
  
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Shop/>}/>
            <Route path="/mens" element={<Shopcateagory banner={men_banner} cotegory='men'/>}/>
            <Route path="/womens" element={<Shopcateagory banner={women_banner} cotegory='women'/>}/>
            <Route path="/kids" element={<Shopcateagory banner={kids_banner} cotegory='kid'/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/product/:productId" element={<Product/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/login" element={<LoginSignup/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
       
      </div>
    </>
  )
}

export default App
