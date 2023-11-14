import { useState } from 'react';
import styled from "styled-components";
import Header from "../organisms/header/Header";
import Selector from '../organisms/selectores/Selector';
import { v } from '../../styles/variables';
import Paises from '../organisms/paises/Paises';
import { useUserStore } from '../../store/UserStore';

const ConfigTemplate = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [dataSelect, setDataSelect] = useState([]);
  const [openPaises, setOpenPaises] = useState(false);
  const [paises, setPaises] = useState([]);
  const { dataUsuarios } = useUserStore();

  const infoMonedo = dataSelect.symbol ?
    `${dataSelect.symbol} ${dataSelect.countryName}` :
    `${dataUsuarios.moneda} ${dataUsuarios.pais}`;

  return (
    <Container>
      <header className="header">
        <Header {...{ openMenu, setOpenMenu }} />
      </header>

      <section className="area1">
        <h1>Ajustes</h1>
      </section>

      <section className="area2">
        <ContentCard>
          <span>Moneda:</span>
          <Selector
            openSelector={openPaises}
            paises={paises}
            color={v.colorselector}
            action={() => setOpenPaises(!openPaises)}
            text1={infoMonedo}
          />
          {
            openPaises && (
              <Paises
                setSelector={setDataSelect}
                setOpenPaises={() => setOpenPaises(!openPaises)}
              />
            )
          }
        </ContentCard>
      </section>

      <section className="main">
      </section>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  padding:15px;
  width: 100%;
  background: ${({ theme }) => theme.bgtotal};
  color: ${({ theme }) => theme.text};
  display: grid;
  grid-template: "header" 100px "area1" 100px "area2" 50px "main" auto;

  .header{
    grid-area: header;
    background-color: rgba(103,93,241,0.14);
    display: flex;
    align-items: center;
  }

  .area1{
    grid-area: area1;
    background-color: rgba(229,67,26,0.14);
    display: flex;
    align-items: center;
  }

  .area2{
    grid-area: area2;
    background-color: rgba(77,237,106,0.14);
    display: flex;
    align-items: center;
  }

  .main{
    grid-area: main;
    background-color: rgba(179,46,241,0.14);
  }
`;

const ContentCard = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  gap: 20px;
  position: relative;
  width: 100%;
  justify-content: center;
`;

export default ConfigTemplate;