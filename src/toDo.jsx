import React, { useState } from 'react';
import Icone from './assets/icon.webp';

function ToDo() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  function adicionarTarefa(form) {
    form.preventDefault(); 

    if (!novaTarefa) {
      return; 
    }

    setTarefas([...tarefas, { text: novaTarefa, isCompleted: false }]);
    setNovaTarefa(""); 
    document.getElementById('input-entrada').focus(); 
  }

  function deleta(index) {
    const tarefaAux = [...tarefas];
    tarefaAux.splice(index, 1); 
    setTarefas(tarefaAux); 
  }

  function deletaTudo(){
    setTarefas([]);
  }
  return (
    <div className='container'>
      <h1>Lista de tarefas</h1>
      <form onSubmit={adicionarTarefa}>
        <input
          id='input-entrada'
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      <div className="tarefas">
        {tarefas.length < 1 ? (
          <img src={Icone} alt="Ícone" />
        ) : (
          tarefas.map((item, index) => (
            <div
              key={index}
              className={item.isCompleted ? "item completo" : "item"}
            >
              <span>{item.text}</span>
              <button
                className='delete'
                onClick={() => deleta(index)} // Passa o índice ao clicar
              >
                Deletar
              </button>
            </div>
          ))
        )}
      </div>
      
      {tarefas.length > 0 && (
        <button className='delete' onClick={() => { deletaTudo()}}>Deletar todas</button>
      )}
    </div>
  );
}

export default ToDo;
