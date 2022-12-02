import React from "react";

const Radio = ({ pergunta, value, setvalue, active }) => {
  if (active === false) return null;
  return (
    <div>
      <p>{pergunta.pergunta}</p>
      {pergunta.options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            id={pergunta.id}
            name={pergunta.id}
            value={option}
            onChange={setvalue}
            checked={value === option}
            required="required"
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default Radio;
