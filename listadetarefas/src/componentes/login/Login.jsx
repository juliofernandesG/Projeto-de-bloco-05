import React, { useState } from "react";
import "./Login.css";


function Login() {
  const [errorMessage, setErrorMessage] = useState("");

  function validar(e) {
    e.preventDefault();

    const nomeInput = document.querySelector("#usuario");
    const senhaInput = document.querySelector("#senha");
    const mensagemError = document.querySelector(".erro");
    const submitButton = document.querySelector("#button");

    const nameInput = nomeInput.value;
    const passwordInput = senhaInput.value;

    if (nameInput === "" || passwordInput === "") {
      setErrorMessage("Dados não preenchidos, por favor preencher todos os campos!");

      mensagemError.classList.remove("erro");
      mensagemError.classList.add("error");
      mensagemError.style.textAlign = "center";

      setTimeout(() => {
        setErrorMessage("");
        mensagemError.classList.remove("error");
        mensagemError.classList.add("erro");
      }, 3000);

      return;
    }

    nomeInput.value = "";
    senhaInput.value = "";
    console.log(alert("Dados enviados com sucesso!"));
  }

  return (
    <div className="main-login">
      <div className="left-login">
        <h1>
          Faça login e
          <br /> E gerencie suas tarefas
        </h1>
        <img
          className="img"
          src="https://content.gnoss.ws/imagenes/Usuarios/ImagenesCKEditor/989fc5b2-d0cc-419e-befa-c575b97b9160/c6699bd3-3658-4705-b70a-75bbd88a9f7f.png"
          alt="banner"
        />
      </div>

      <div className="right-login">
        <div className="card-login">
          <h1>Login</h1>
          <div className="text-field">
            <label htmlFor="usuario">Usuario</label>
            <input
              id="usuario"
              type="text"
              name="usuario"
              placeholder="usuario"
            />
          </div>

          <div className="text-field">
            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              type="password"
              name="password"
              placeholder="senha"
            />
          </div>
          <div className="erro">{errorMessage}</div>
          <br />
          <button className="btn-login" type="submit" id="button" onClick={validar}>
            Login
          </button>
          <p>
            Não possui conta? <a className="recupera-senha" href="">Cadastre-se</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
