import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderComp from "./components/HeaderComp";
import MainPageComp from "./components/MainPageComp";
import PortfolioComp from "./components/PortfolioComp";
import ContactComp from "./components/ContactComp";
import FooterComp from "./components/FooterComp";

import ManageUserComp from "./components/ManageUserComp";
import AddUserComp from "./components/AddUserComp";
import UpdateUserComp from "./components/UpdateUserComp";
import ManagePhotoComp from "./components/ManagePhotoComp";
import AddPhotoComp from "./components/AddPhotoComp";
import UpdatePhotoComp from "./components/UpdatePhotoComp";
import AddShareComp from "./components/AddShareComp";

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
            
            <Route path="/users" component={ManageUserComp}></Route>
            <Route path="/add_user" component={AddUserComp}></Route>
            <Route path="/update_users/:id" component={UpdateUserComp}></Route>
            <Route path="/photos" exact component={ManagePhotoComp}></Route>
            <Route path="/upload_photos" exact component={AddPhotoComp}></Route>
            <Route path="/share" exact component={AddShareComp}></Route>
            <Route path="/update_photos/:id" exact component={UpdatePhotoComp}></Route>
          </Switch>
        </div>
        <FooterComp />
      </Router>
    </div>
  );
}

export default App;