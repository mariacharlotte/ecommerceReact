import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./components/Navbar";
import Products from "./pages/product/Products";
import Cart from "./pages/cart/Cart";
import { Favorite } from "./pages/favorite/Favorite";
import { ProductDetail } from "./pages/product/ProductDetail";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorite" element={<Favorite />} />
          </Routes>
        </Router>
      </CartContextProvider>
    </div>
  );
}

export default App;
