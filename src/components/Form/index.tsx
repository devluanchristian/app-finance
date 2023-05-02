import { useState } from "react";
import InputLabel from "../InputLabel";
import { FormStyled } from "./styled";

const Form = () => {
  const [input, setInput] = useState("");
  const [inputNumber, setInputNumber] = useState("");

  const handleInputChange = (value: string) => {
    setInput(value);
  };

  const handleInputNumberChange = (value: string) => {
    setInputNumber(value);
  };
  return (
    <FormStyled>
      <InputLabel
        title="Descrição"
        type="text"
        value={input}
        onChange={handleInputChange}
      />
      <InputLabel
        title="Valor"
        type="number"
        value={inputNumber}
        onChange={handleInputNumberChange}
      />

      <div className="container-radio">
        <input type="radio" value={"Entrada"} />
        <input type="radio" value={"Saida"} />
      </div>
    </FormStyled>
  );
};

export default Form;
