import { ChangeEvent } from "react";
import InputLabelStyled from "./styled";
interface IInputLabel {
  title: string;
  type: string;
  value: string ;
  onChange: (value: string ) => void;
}

const InputLabel = ({ title, type, value, onChange }: IInputLabel) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <InputLabelStyled>
      <label>{title}</label>
      <input type={type} value={value} onChange={handleChange} />
    </InputLabelStyled>
  );
};
export default InputLabel;
