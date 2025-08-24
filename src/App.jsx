import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import MisCompras from "./pages/MisCompras";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [compras, setCompras] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(()=>{
    if (user) {
      const saved = localStorage.getItem(`compras_${user.email}`);
      if (saved) {
        setCompras(JSON.parse(saved));
      }
    }
  },[user])

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, qty) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, qty) } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

   const finalizarCompra = () => {
    const nuevaCompra = { id: Date.now(), items: cart };
    const nuevasCompras = [...compras, nuevaCompra];
    setCompras(nuevasCompras);
    setCart([]);
    if(user) localStorage.setItem(`compras_${user.email}`, JSON.stringify(nuevasCompras));
    return <Navigate to="/mis-compras" />;
  };

  const logout = () => {
    if(user){
      localStorage.setItem(`compras_${user.email}`, JSON.stringify(compras));
    }
    setUser(null);
    setCart([]);
    setCompras([])
  };

  return (
    <Router>
      <Navbar
        cartCount={cart.reduce((acc, item) => acc + item.qty, 0)}
        user={user}
        logout={logout}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog addToCart={addToCart} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route
          path="/cart"
          element={
            user ? (
              <Cart cart={cart} updateQty={updateQty} removeFromCart={removeFromCart} finalizePurchase={finalizarCompra} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/mis-compras" element={user ? <MisCompras compras={compras}/> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
