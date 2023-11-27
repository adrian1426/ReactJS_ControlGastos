/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import IconClose from "../atoms/IconClose";

const GenericList = (props) => {
  const { data = [], actionClose, setSelectTheme, scroll, bottom } = props;
  const { setTheme } = useContext(ThemeContext);

  const selectTheme = (theme) => {
    setSelectTheme({
      icono: theme.icono, tema: theme.descripcion
    });

    setTheme(theme.descripcion);

    actionClose();
  }

  return (
    <Container scroll={scroll} $bottom={bottom}>
      <section className="contentClose">
        <IconClose action={actionClose} />
      </section>
      <section className="contentItems">
        {
          data.map((item, index) => {
            return (
              <ItemContainer key={index} onClick={() => selectTheme(item)}>
                <span>{item.icono}</span>
                <span>{item.descripcion}</span>
              </ItemContainer>
            )
          })
        }
      </section>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  position: absolute;
  margin-bottom: 15px;
  bottom: ${(props) => props.$bottom};
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  gap: 10px;
  z-index: 3;
  @media ${() => device.tablet} {
    width: 400px;
  }
  .contentItems {
    overflow-y: ${(props) => props.scroll};
  }
`;

const ItemContainer = styled.div`
  gap: 10px;
  display: flex;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.bgtotal};
  }
`;

GenericList.propTypes = {
  data: PropTypes.array,
  actionClose: PropTypes.func,
  setSelectTheme: PropTypes.func
};

export default GenericList;