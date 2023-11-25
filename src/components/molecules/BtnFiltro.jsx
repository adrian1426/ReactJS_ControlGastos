import PropTypes from 'prop-types';
import styled from "styled-components";

const BtnFiltro = (props) => {
  const { bgColor, textColor, icon, action } = props;

  return (
    <Container
      $bgColor={bgColor}
      $textColor={textColor}
      onClick={action}
    >
      <div className='contentIcon'>
        <span>{icon}</span>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$textColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  position: relative;
  cursor: pointer;

  .contentIcon{
    position: absolute;
    top:25%;
    bottom: 25%;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    transition: 0.2s;

    &:hover{
      transform: scale(1.3);
    }
  }
`;

BtnFiltro.propTypes = {
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  icon: PropTypes.any,
  action: PropTypes.func
};

export default BtnFiltro;