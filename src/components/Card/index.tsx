import CardItem from "../CardItem";
import { CardStyled } from "./styled";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

const Card = () => {
  return (
    <CardStyled>
      <CardItem title={"Entradas"} icon={<FaRegArrowAltCircleUp />} value={"1000"} />
      <CardItem title={"Saídas"} icon={<FaRegArrowAltCircleDown />} value={"1000"} />
      <CardItem title={"Total"} icon={<FaDollarSign />} value={"1000"} />
    </CardStyled>
  );
};

export default Card;
