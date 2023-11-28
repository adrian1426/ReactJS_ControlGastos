import { useState } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import { useOperaciones } from "../../store/OperacionStore";
import Header from "../organisms/header/Header";
import { ContentFilters } from "../atoms/ContentFilters";
import ButtonDropDown from "../molecules/ButtonDropDown";
import MenuDropdown from "../molecules/MenuDropdown";
import { DataDesplegableMovimientos } from "../../utils/dataStatic";
import { CalendarioLineal } from "../organisms/CalendarioLineal";
import { Tabs } from "../organisms/Tabs";

const InformesTemplate = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [stateTipo, setStateTipo] = useState(false);
  const [value, setValue] = useState(dayjs(Date.now()));
  const [formatoFecha, setFormatoFecha] = useState("");

  const {
    setTipoMovimientos, colorCategoria, bgCategoria, tituloBtnDesMovimientos
  } = useOperaciones();

  function openTipo() {
    setStateTipo(!stateTipo);
    setOpenMenu(false);
  }

  function cambiarTipo(p) {
    setTipoMovimientos(p);
    setStateTipo(!stateTipo);
    setOpenMenu(false);
  }

  return (
    <Container>
      <header className="header">
        <Header {...{ openMenu, setOpenMenu }} />
      </header>

      <section className="area1">
        <ContentFilters>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <ButtonDropDown
              textColor={colorCategoria}
              bgColor={bgCategoria}
              text={tituloBtnDesMovimientos}
              action={openTipo}
            />
            {stateTipo && (
              <MenuDropdown
                desplegableUser={DataDesplegableMovimientos}
                top="112%"
                actions={(p) => cambiarTipo(p)}
              />
            )}
          </div>
        </ContentFilters>
        <h1>Informes</h1>



      </section>
      <section className="area2">
        <CalendarioLineal value={value}
          setValue={setValue}
          formatofecha={formatoFecha}
          setFormatoFecha={setFormatoFecha} />
      </section>
      <section className="main">
        <Tabs />
      </section>
    </Container>
  );
}
const Container = styled.div`
  min-height: 100vh;
  padding: 15px;
  width: 100%;
  background: ${({ theme }) => theme.bgtotal};
  color: ${({ theme }) => theme.text};
  display: grid;
  grid-template:
    "header" 100px
    "area1" 100px
    "area2" 70px
    "main" auto;

  .header {
    grid-area: header;
    display: flex;
    align-items: center;
  }
  .area1 {
    grid-area: area1;
    display: flex;
    gap:20px;
    align-items: center;
  }
  .area2 {
    grid-area: area2;
    display: flex;
    align-items: center;
    justify-content:center;
    padding-bottom:20px;
  }
  .main {
    grid-area: main;
  }
`;

export default InformesTemplate;