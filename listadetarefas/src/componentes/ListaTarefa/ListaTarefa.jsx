import React, { useState } from "react";

function ListaTarefas() {
  const [tarefas, setTarefas] = useState([
    { id: 1, titulo: "Tarefa 1", responsavel: "Usuário 1", prazo: "01/05/2023" },
    { id: 2, titulo: "Tarefa 2", responsavel: "Usuário 2", prazo: "05/05/2023" },
    { id: 3, titulo: "Tarefa 3", responsavel: "Usuário 3", prazo: "10/05/2023" },
  ]);
  const [detalhesTarefa, setDetalhesTarefa] = useState(null);

  const handleVerDetalhes = (tarefa) => {
    setDetalhesTarefa(tarefa);
  };

  const handleFecharDetalhes = () => {
    setDetalhesTarefa(null);
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      {tarefas.map((tarefa) => (
        <div key={tarefa.id}>
          <h2>{tarefa.titulo}</h2>
          <p>Responsável: {tarefa.responsavel}</p>
          <p>Prazo: {tarefa.prazo}</p>
          <button onClick={() => handleVerDetalhes(tarefa)}>Ver Detalhes</button>
        </div>
      ))}
      {detalhesTarefa && (
        <div>
          <h2>Detalhes da Tarefa</h2>
          <p>Titulo: {detalhesTarefa.titulo}</p>
          <p>Responsável: {detalhesTarefa.responsavel}</p>
          <p>Prazo: {detalhesTarefa.prazo}</p>
          <button onClick={handleFecharDetalhes}>Fechar</button>
        </div>
      )}
    </div>
  );
}

export default ListaTarefas;
