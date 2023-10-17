import styled from "styled-components";

const Button = (props) => {
  const { functionClick, bgcolor, icon, children } = props;

  return (
    <ButtonStyled type="submit">
      <span className="icon">{icon}</span>
      <span
        className="btn"
        onClick={functionClick}
      >
        {children}
      </span>
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: none;

  .icon{
    
  }
`;

export default Button;