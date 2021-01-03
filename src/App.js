import React, { useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import "./_app.scss";
import LoginScreen from "./screens/LoginScreen/LoginScreen";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar((value) => !value);

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app_container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app_main">
          {children}
        </Container>
      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Layout>
            <HomeScreen />
          </Layout>
        </Route>
        <Route path="/login">
          <LoginScreen />
        </Route>
        <Route path="/search">
          <Layout>
            <h1>Search Results</h1>
          </Layout>
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
