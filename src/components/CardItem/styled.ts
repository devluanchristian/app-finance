import styled from "styled-components";

export const CardItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4faff;
  border-radius: 5px;
  padding: 5px;
  width: 30%;

  .container-card-item {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 20px auto;
  }
  .container-card-item h4 {
    font-weight: 400;
  }
  .container-card-item svg {
    width: 25px;
    height: 25px;
  }
  .price p {
    font-size: 30px;
    font-weight: bold;
  }
`;
