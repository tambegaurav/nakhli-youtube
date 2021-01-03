import React, { useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import "./_app.scss";
import LoginScreen from "./screens/LoginScreen/LoginScreen";

const App = () => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar((value) => !value);

  return (
    // <div>
    //   <Header handleToggleSidebar={handleToggleSidebar} />
    //   <div className="app_container">
    //     <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
    //     <Container fluid className="app_main">
    //       <HomeScreen />
    //     </Container>
    //   </div>
    // </div>
    <LoginScreen />
  );
};

export default App;
