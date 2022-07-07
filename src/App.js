
import './App.css';
import Home from './Pages/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Pages/Authentication/Login';
import Register from './Pages/Authentication/Register';
import Navigation from './Pages/Shared/Navigation';
import AllProducts from './Pages/Products/AllProducts';
import ProductDetails from './Pages/Products/ProductDetails/ProductDetails';
import RequireAuth from './RequireAuth/RequireAuth';

function App() {
  return (
    < BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/product/:id" element={
          <RequireAuth>
            <ProductDetails />
          </RequireAuth>
        } />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
