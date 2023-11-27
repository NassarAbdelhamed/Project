import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./component/login";
import Home from "./component/home";
import Singup from "./component/signup";
import Page1 from "./component/page1";
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
        <Route path={ROUTES.Page1} element={<Page1/>}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
