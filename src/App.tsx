import { useState } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function handleClick() {
    setLoading(true);
    setMessage("");

    setTimeout(() => {
      setLoading(false);
      setMessage("Ação concluída com sucesso!");

      setTimeout(() => {
        setMessage("");
      }, 3000);
    }, 2000);
  }

  return (
    <>
      <div className="container">
        <h1>Exercício: Botão de Carregamento</h1>
        <p>Esse código simula uma operação de envio de dados que demora 2 segundos.</p>
        <button
          className="btn"
          onClick={handleClick}
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="spinner" aria-hidden="true"></span>
              Enviando...
            </>
          ) : (
            "Enviar"
          )}
        </button>
      </div>

      {message && <div className="toast">{message}</div>}
    </>
  );
}

export default App;
