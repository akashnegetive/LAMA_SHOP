import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import Login from "./pages/login/Login";
import NewProduct from "./pages/newProduct/NewProduct";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';
import { useSelector } from "react-redux";


function App() {
   const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
   const user=useSelector(state=>state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route path="/login" element=<Login/> />
      </Routes>
      {admin && (
          <>
        <Topbar />
         <div className="container">
         <Sidebar />
         <Routes>
             <Route exact path="/" element=<Home/> />
             <Route path="/users" element=<UserList/> />
             <Route path="/user/:userId" element=<User/> />
             <Route path="/newUser" element=<NewUser/> />
             <Route path="/products" element=<ProductList/> />
             <Route path="/newproduct" element=<NewProduct/> />
             <Route path="/product/:productId" element=<Product/> />
            <Route path="/newproduct" element=<NewProduct/> />
            <Route path="/login" element= <Login/> />
        </Routes>

          </div>
          </>
       )}

    </Router>
  );
}

export default App;
