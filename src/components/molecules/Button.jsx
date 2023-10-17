import styled from "styled-components";

const Button = () => {
  return (
    <ButtonStyled>
      mi btn
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

export default Button;