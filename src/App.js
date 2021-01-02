import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import "./_app.scss";

const App = () => {
  return (
    <div>
      <Header />
      <div className="app_container border border-info">
        <Sidebar />
        <Container fluid className="app_main border border-warning">
          <HomeScreen />
        </Container>
      </div>
    </div>
  );
};

export default App;
