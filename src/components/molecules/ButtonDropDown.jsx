import PropTypes from 'prop-types';
import styled from "styled-components";
import { v } from '../../styles/variables';

const ButtonDropDown = (props) => {
  const { text, bgColor, textColor, action } = props;

  return (
    <Container $bgColor={bgColor} $textColor={textColor}>
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
  padding: 0.9rem 2.3rem;
  border-radius: 50px;
`;

ButtonDropDown.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  action: PropTypes.func
};

export default ButtonDropDown;