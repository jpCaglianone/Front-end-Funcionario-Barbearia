import React from "react";

const Redefin = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <div id="titulo">
        <p className="h1" id="tBarbearia">
          barbearia
        </p>
        <p className="h1" id="tMix">
          mix
        </p>
      </div>

      <div className="login-container" id="login-campos">
        <div className="logo">
          <img src="../assets/Logo.png" alt="Logo" />
        </div>

        <form className="redefinicaoSenha">
          <input
            type="email"
            placeholder="Digite seu email"
            required
            className="email"
            id="email"
          />
          <div className="btn-forgottEmail">
            <button type="button" id="forgottEmailC">
              Cancelar
            </button>
            <button type="button" id="forgottEmailCC">
              Continuar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Redefin;
