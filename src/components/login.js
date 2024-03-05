import React from "react";
import FormEnvioLogin from "./formEnvioLogin";
import RedefinicaoSenha from "./redefinicao-senha";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Login = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<FormEnvioLogin />} />

        <Route path="/redefinicao-senha" element={<RedefinicaoSenha />} />
      </Routes>
    </Router>
  );
};

export default Login;
