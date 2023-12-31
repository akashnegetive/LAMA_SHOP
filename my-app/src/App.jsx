import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import ProductList from "./pages/ProductList"
import Product from "./pages/Product"
import Register from "./pages/Register"
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import AllProducts from "./pages/AllProducts"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';
import {useSelector} from "react-redux";
import { AuthContextProvider } from './components/AuthContextProvider';

function App() {

   const user=useSelector(state=>state.user.currentUser);

  return (
    <AuthContextProvider>
     <Router>
        <Routes>
            <Route exact path="/" element=<Home/> />
            <Route path="/products/:category" element=<ProductList/> />
            <Route path="/products" element=<AllProducts/> />
            <Route path="/product/:id" element=<Product/> />
            <Route path="/cart" element=<Cart/> />
            <Route path="/success" element=<Success/> />
            <Route path="/login" element={ user ? <Navigate  to ="/"/> : <Login/>}/>
            <Route path="/register" element={ user ? <Navigate  to ="/"/> : <Register/>}/>
        </Routes>
     </Router>
    </AuthContextProvider>


  );
}

export default App;
