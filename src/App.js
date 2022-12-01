import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './components/Header';
import Registration from './components/Registration';
import Login from './components/Login';
import Footer from "./components/Footer";
import Categories from "./components/Categories";

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
