import PropTypes from 'prop-types';
import styled from "styled-components";
import { v } from '../../styles/variables';

const ButtonDropDown = (props) => {
  const { text, bgColor, textColor, action } = props;

  return (
    <Container
      $bgColor={bgColor}
      $textColor={textColor}
      onClick={action}
    >
      <span className='containerText'>
        {<v.iconoFlechabajo />}
        <h6>{text}</h6>
      </span>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$textColor};
  font-weight: 500;
  font-size: 23px;
  padding: 0.5rem 2.3rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  .containerText{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover{
    background-color: rgba(77,77,77,0.5);
  }
`;

ButtonDropDown.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  action: PropTypes.func
};

export default ButtonDropDown;