import { useState } from 'react';
import styled from "styled-components";
import Header from "../organisms/header/Header";
import Selector from '../organisms/selectores/Selector';
import { v } from '../../styles/variables';
import Paises from '../organisms/paises/Paises';
import { useUserStore } from '../../store/UserStore';
import GenericList from '../molecules/GenericList';
import { TemasData } from '../../utils/dataStatic';
import Button from '../molecules/Button';

const ConfigTemplate = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [dataSelect, setDataSelect] = useState([]);
  const [openPaises, setOpenPaises] = useState(false);
  const [openTheme, setOpenTheme] = useState(false);
  const [selectTheme, setSelectTheme] = useState({});
  const { dataUsuarios, editartemamonedauser } = useUserStore();

  const moneda = dataSelect.symbol ? dataSelect.symbol : dataUsuarios.moneda;
  const pais = dataSelect.countryName ? dataSelect.countryName : dataUsuarios.pais;

  const infoMonedo = dataSelect.symbol ?
    `${dataSelect.symbol} ${dataSelect.countryName}` :
    `${dataUsuarios.moneda} ${dataUsuarios.pais}`;

  const iconobd = dataUsuarios.tema === "0" ? "🌞" : "🌚";
  const temabd = dataUsuarios.tema === "0" ? "light" : "dark";
  const temainicial = selectTheme.tema ? selectTheme.tema : temabd;
  const iconInit = selectTheme.icono ? selectTheme.icono : iconobd;
  const temaSeleccionado = iconInit + " " + temainicial;

  const editarUser = async () => {
    const themeElegido = selectTheme.tema === "light" ? "0" : "1";

    const user = {
      tema: themeElegido,
      moneda: moneda,
      pais: pais,
      id: dataUsuarios.id,
    };

    await editartemamonedauser(user);
  };

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

        <ContentCard>
          <span>Tema:</span>
          <Selector
            color={v.colorselector}
            text1={temaSeleccionado}
            openSelector={openTheme}
            action={() => setOpenTheme(!openTheme)}
          />
          {
            openTheme && (
              <GenericList
                data={TemasData}
                actionClose={() => setOpenTheme(!openTheme)}
                setSelectTheme={setSelectTheme}
              />
            )
          }
        </ContentCard>

        <Button
          bgcolor={v.colorselector}
          icon={<v.iconoguardar />}
          functionClick={editarUser}
        >
          Guardar
        </Button>

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
  grid-template: "header" 100px "area1" 100px "area2" auto;

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
    justify-content: center;
  }

  .area2{
    grid-area: area2;
    background-color: rgba(77,237,106,0.14);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: start;
    gap: 30px;
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