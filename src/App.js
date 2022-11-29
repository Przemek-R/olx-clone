import React from 'react';
import Header from "./components/Header/Header"
import Registration from "./components/Registration/Registration"
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
      <Router className={"App"}>
        <Switch>
          <Route path={"/registration"}>
            <Header />
            <Registration />
          </Route>
          <Route path={"/login"}>
            <Header />
            <Login />
          </Route>
          <Route path={"/"}>
            <Header />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
