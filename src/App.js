import './App.css';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Product from './pages/Product';
import Register from './pages/Register';
import Home from './pages/Home';
import ProductList from './pages/ProductList';

// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (

    <BrowserRouter>
    
      <Routes>

        <Route path="/" element={<Home />}/>

        <Route path="register" element={<Register />}/>

        <Route path="login" element={<Login />}/>

        <Route path="cart" element={<Cart />}/>

        <Route path="product" element={<Product />}/>

        <Route path="productlist" element={<ProductList />}/>

      </Routes>
    
    </BrowserRouter>

  );

};

export default App;
