import "./App.css";
import { Routes, Route } from "react-router-dom";
import Banner from "./components/Banner/banner";
// import { CartContext } from "./Contexts/CartContext";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Product/Product";
import DetailProduct from "./components/Product/DetailProduct";
import Cart from "./components/Cart/Carts";
import SignIn from "./components/Auth/Components/SignIn";
import SignUp from "./components/Auth/Components/SignUp";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import Slider from "./components/Slider/Slider";
import Home from "./components/Home/Home";
import Sliders from "./components/Slider/Slider";

function App() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((emailDev) => {
      if(emailDev) {
        setEmail(emailDev.email);
      }
      else {
        setEmail("");
      }
    // console.log(emailDev);
    })
  }, []);

  // if(email) return </>

  return (
    <div className="page-container">
      <div className="content-wrap">
        <Navbar email={email} />
        <div className="main-content">
          <div className="huydev p-2">
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/products/:id" exact element={<DetailProduct email={email} />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product" element={<Product />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </div>
        </div>
      </div>
      <div className="pb-5">
      <Sliders/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
