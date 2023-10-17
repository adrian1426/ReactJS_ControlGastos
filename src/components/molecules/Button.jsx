import PropTypes from 'prop-types';
import styled from "styled-components";
import Icon from "../atoms/Icon";

const Button = (props) => {
  const { functionClick, bgColor, icon, children } = props;

  return (
    <ButtonStyled
      type="submit"
      onClick={functionClick}
      bgColor={bgColor}
    >
      <Icon>{icon}</Icon>
      <span className="btn">
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
  cursor: pointer;
  gap: 10px;
  background-color: initial;

  .btn{
    background: ${(props) => props.bgColor};
    padding: 0.6em 1.3em;
    font-weight: 900;
    font-size: 18px;
    border: 3px solid black;
    border-radius: 0.4em;
    box-shadow: 0.1em 0.1em #000;
    transition: 0.2s;
    white-space: 1px;
    color: #000;

    &:hover{
      transform: translate(-0.05em, -0.05em);
      box-shadow: 0.15em 0.15em #000;
    }

    &:active{
      transform: translate(0.05em, 0.05em);
      box-shadow: 0.1em 0.1em #000;
    }
  }
`;

Button.propTypes = {
  functionClick: PropTypes.func,
  bgColor: PropTypes.any,
  icon: PropTypes.element,
  children: PropTypes.node
}

export default Button;