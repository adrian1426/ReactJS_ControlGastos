import PropTypes from 'prop-types';
import styled from "styled-components";

const ButtonCircle = (props) => {
  const { icon, width, height, bgcolor, textcolor, fontSize, translateX, translateY } = props;

  return (
    <Container {...{ icon, width, height, bgcolor, textcolor, fontSize, translateX, translateY }}>
      <span>{icon}</span>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${(props) => props.bgcolor};
  min-width: ${(props) => props.width};
  min-height: ${(props) => props.height};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  transform: translateX(${(props) => props.translateX}) translateY(${(props) => props.translateY});

  span{
    font-size: ${(props) => props.fontSize};
    text-align: center;
    color: ${(props) => props.textcolor};
  }
`;

ButtonCircle.propTypes = {
  icon: PropTypes.element,
  width: PropTypes.string,
  height: PropTypes.string,
  bgcolor: PropTypes.string,
  textcolor: PropTypes.string,
  fontSize: PropTypes.string,
  translateX: PropTypes.string,
  translateY: PropTypes.string
};

export default ButtonCircle;