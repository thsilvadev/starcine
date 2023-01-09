import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componentes/page/Home";
import Sessoes from "./componentes/page/Sessoes";
import Contato from "./componentes/page/Contato";
import NovoProjeto from "./componentes/page/NovoProjeto";
import Container from "./componentes/layout/Container";
import Navbar from "./componentes/layout/Navbar";
import Footer from "./componentes/layout/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sessoes" element={<Sessoes />} />
          <Route exact path="/contato" element={<Contato />} />
          <Route exact path="/novoprojeto" element={<NovoProjeto />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
