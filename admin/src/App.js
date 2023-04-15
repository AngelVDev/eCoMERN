import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useSelector } from "react-redux";
import Login from "./pages/login/Login";
import Topbar from "./components/topBar/TopBar";
import Sidebar from "./components/sideBar/SideBar";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  const admin = useSelector((state) => state.user.currentUser.isAdmin);
  return (
    <Router>
      <Switch>
        <Route path='/dash/login'>
          <Login />
        </Route>
        {admin && (
          <>
            <Topbar />
            <div className='/dash/container'>
              <Sidebar />
              <Route exact path='/dash/'>
                <Home />
              </Route>
              <Route path='/dash/users'>
                <UserList />
              </Route>
              <Route path='/dash/user/:userId'>
                <User />
              </Route>
              <Route path='/dash/newUser'>
                <NewUser />
              </Route>
              <Route path='/dash/products'>
                <ProductList />
              </Route>
              <Route path='/dash/product/:productId'>
                <Product />
              </Route>
              <Route path='/dash/newproduct'>
                <NewProduct />
              </Route>
            </div>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
