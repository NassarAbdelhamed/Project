import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./component/login";
import Home from "./component/home";
import Singup from "./component/signup";
import Products from "./component/Products";
import * as ROUTES from "./constants/routes";
import "./App.css";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path={ROUTES.LANDING} element={<Home />}/>
        <Route path={ROUTES.Login} element={<Login/>}/>
        <Route path={ROUTES.SIGN_UP} element={<Singup/>}/>
        <Route path={ROUTES.Products} element={<Products/>}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
