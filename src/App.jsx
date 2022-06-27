// import Product from "./pages/Product";
// import Home from "./pages/Home";
// import ProductList from "./pages/ProductList";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import Cart from "./pages/Cart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pay from "./pages/Pay";
import Success from "./pages/Success";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/pay">
          <Pay />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
