import PropTypes from 'prop-types';
import styled from "styled-components";
import { v } from "../../../styles/variables";

const Selector = (props) => {
  const { color, openSelector, action, text1, text2 } = props;

  return (
    <Container color={color} onClick={action}>
      <div>
        <span>{text1}</span>
        <span>{text2}</span>
      </div>
      <span className={openSelector ? "open" : "close"}>
        <v.iconoFlechabajo />
      </span>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  cursor: pointer;
  border: 2px solid ${(props) => props.color};
  border-radius: 10px;
  padding: 10px;
  gap: 10px;
  transition: 0.3s;
  font-weight: 600;

  .open{
    transition: 0.3s;
    transform: rotate(0deg);
  }

  .close{
    transition: 0.3s;
    transform: rotate(180deg);
  }

  &:hover{
    background-color: ${(props) => props.color};
    color:#000;
  }
`;

Selector.propTypes = {
  color: PropTypes.string,
  openSelector: PropTypes.bool,
  action: PropTypes.func,
  text1: PropTypes.string,
  text2: PropTypes.string
};

export default Selector;