import { useState } from "react";
import "./App.css";
import Radio from "./Form/Radio";

const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];

function App() {
  const [respostas, setRespostas] = useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
  });

  const [resultado, setReesultado] = useState(null);
  const [slide, setSlide] = useState(0);

  const handleResponse = () => {
    const corretas = perguntas.filter(
      (pergunta) => respostas[pergunta.id] === pergunta.resposta
    );
    console.log(corretas);
    setReesultado(
      `Voce acertor ${corretas.length} de ${perguntas.length} perguntas`
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      handleResponse();
    }
  };

  const handleChange = ({ target }) => {
    setRespostas({ ...respostas, [target.id]: target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {perguntas.map((pergunta, index) => (
          <Radio
            key={index}
            active={slide === index}
            pergunta={pergunta}
            value={respostas[pergunta.id]}
            setvalue={handleChange}
          />
        ))}
        {resultado ? <p>{resultado}</p> : <button>Próxima</button>}
      </form>
    </>
  );
}

export default App;
