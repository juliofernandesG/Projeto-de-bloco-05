import React, { useState } from "react";
import "./CadastroUsuario.css";

function CadastroUsuario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleCadastroUsuario = (event) => {
    event.preventDefault();

    if (!nome || !email || !senha || !confirmaSenha) {
      setMensagem("Por favor, preencha todos os campos.");
      return;
    }

    if (senha !== confirmaSenha) {
      setMensagem("As senhas não coincidem. Por favor, tente novamente.");
      return;
    }

    // Aqui você pode enviar os dados do usuário para um servidor ou para um banco de dados.

    setNome("");
    setEmail("");
    setSenha("");
    setConfirmaSenha("");
    setMensagem("Cadastro realizado com sucesso!");
  };

  return (
    <div className="main-cadastro-usuario">
      <div className="left-cadastro-usuario">
        <h1>Cadastre-se</h1>
        <img
          className="img"
          src="https://content.gnoss.ws/imagenes/Usuarios/ImagenesCKEditor/989fc5b2-d0cc-419e-befa-c575b97b9160/c6699bd3-3658-4705-b70a-75bbd88a9f7f.png"
          alt="banner"
        />
      </div>

      <div className="right-cadastro-usuario">
        <div className="card-cadastro-usuario">
          <form onSubmit={handleCadastroUsuario}>
            <div className="text-field">
              <label htmlFor="nome">Nome</label>
              <input
                id="nome"
                type="text"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                placeholder="Digite seu nome"
              />
            </div>

            <div className="text-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Digite seu email"
              />
            </div>

            <div className="text-field">
              <label htmlFor="senha">Senha</label>
              <input
                id="senha"
                type="password"
                value={senha}
                onChange={(event) => setSenha(event.target.value)}
                placeholder="Digite sua senha"
              />
            </div>

            <div className="text-field">
              <label htmlFor="confirmaSenha">Confirme sua senha</label>
              <input
                id="confirmaSenha"
                type="password"
                value={confirmaSenha}
                onChange={(event) => setConfirmaSenha(event.target.value)}
                placeholder="Confirme sua senha"
              />
            </div>

            <div className="mensagem">{mensagem}</div>

            <button className="btn-cadastro-usuario" type="submit">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CadastroUsuario;
