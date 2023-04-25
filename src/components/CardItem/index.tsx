import { ReactNode } from "react";
import { CardItemStyled } from "./styled";

interface IProps {
  title: string;
  icon: ReactNode;
  value: string;
}

const CardItem = ({ title, icon, value }: IProps) => {
  return (
    <CardItemStyled>
      <div className="container-card-item">
        <h4>{title}</h4>
        <span>{icon}</span>
      </div>
      <div className="price">
        <p>{value}</p>
      </div>
    </CardItemStyled>
  );
};

export default CardItem;
