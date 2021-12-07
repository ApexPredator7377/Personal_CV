import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderComp from "./components/HeaderComp";
import MainPageComp from "./components/MainPageComp";
import PortfolioComp from "./components/PortfolioComp";
import ContactComp from "./components/ContactComp";
import FooterComp from "./components/FooterComp";

function App() {
  return (
    <div>
      <Router>
        <HeaderComp />
        <div className="container">
          <Switch>
            <Route path="/" exact component={MainPageComp}></Route>
            <Route path="/Portfolio" exact component={PortfolioComp}></Route>
            <Route path="/Contact_Me" exact component={ContactComp}></Route>
          </Switch>
        </div>
        <FooterComp />
      </Router>
    </div>
  );
}

export default App;