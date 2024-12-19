import React from "react";
import GlobalStyle from "./styles";
import { BrowserRouter, useLocation } from "react-router-dom";
import Routes from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeaderPerfil from "./components/HeaderPerfil";

const DynamicHeader = () => {
  const location = useLocation();
  console.log("DynamicHeader rendered");
  return location.pathname === "/perfil" ? <HeaderPerfil /> : <Header />;
};

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <DynamicHeader />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
