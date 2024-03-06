import { Link } from "react-router-dom";
import React, { useState } from 'react';

function FormEnvioLogin() {



  const [campoState, setCampoState] = useState({
    senha: "",
    email: ""
  })

  const campoAlterado = (event) => {
    let valor = event.target.value;
    let id = event.target.id;

      setCampoState((valorAnterior) => {
    
            let novoValor = { ...valorAnterior, [id]:valor}
            return novoValor
      })

    console.log(campoState)
  }

  return (
    <>
      <div id="titulo">
        <p class="h1" id="tBarbearia">
          barbearia
        </p>

        <p class="h1" id="tMix">
          mix
        </p>
      </div>

      <div class="login-container" id="login-campos">
        <div class="logo"></div>
        <form class="login-form">
          <div class="usuario-form">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
            </svg>
            <input
              type="text"
              placeholder="USUÁRIO"
              required
              class="txt-input"
              id="email"
              onChange={campoAlterado}
            />
          </div>
          <div class="senha-form">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-lock"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
            </svg>
            <input
              type="password"
              placeholder="SENHA"
              required
              class="txt-input"
              id="senha"
              onChange={campoAlterado}
            />
          </div>

          <div class="stay-logged-in">
            <input type="checkbox" id="stay-logged-in" />
            <label for="stay-logged-in">Permanecer logado</label>
          </div>
          <button type="submit" id="btn-login">
            LOGIN
          </button>
          <Link to="/redefinicao-senha">Esqueci minha senha</Link>
        </form>
      </div>
    </>
  );
}

export default FormEnvioLogin;
