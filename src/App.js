import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './components/Header';
import Registration from './components/Registration';
import Login from './components/Login';
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import Ads from "./components/Ads";
import Messages from "./components/Messages";
import Settings from "./components/Settings";
import AddAdv from "./components/AddAdv";

function App() {
  return (
      <Router className={"App"}>
        <Switch>

          <Route path={"/login"}>
            <Login />
          </Route>

          <Route path={"/registration"}>
            <Registration />
          </Route>

          <Route path={"/categories"}>
            <Header />
            <Categories />
            <Footer />
          </Route>

          <Route path={"/add-advertisement"}>
            <Header />
            <AddAdv />
            <Footer />
          </Route>

          <Route path={"/ads"}>
            <Header />
            <Settings />
            <Ads />
            <Footer />
          </Route>

          <Route path={"/messages"}>
            <Header />
            <Settings />
            <Messages />
            <Footer />
          </Route>

          <Route path={"/settings"}>
            <Header />
            <Settings />
            <Footer />
          </Route>

          <Route path={"/"}>
            <Header />
            <Categories />
            <Footer />
          </Route>

        </Switch>
      </Router>
  );
}
export default App;
