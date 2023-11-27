import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import dayjs from "dayjs";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useOperaciones } from "../../store/OperacionStore";
import { useUserStore } from "../../store/UserStore";
import { useMovimientosStore } from "../../store/MovimientosStore";
import { useCategoriasStore } from "../../store/CategoriasStore";
import { useCuentaStore } from "../../store/CuentaStore";
import { RegistrarMovimientos } from "../organisms/formularios/RegistrarMovimientos";
import Header from "../organisms/header/Header";
import { ContentFilters } from "../atoms/ContentFilters";
import ButtonDropDown from "../molecules/ButtonDropDown";
import MenuDropdown from "../molecules/MenuDropdown";
import { DataDesplegableMovimientos } from "../../utils/dataStatic";
import BtnFiltro from "../molecules/BtnFiltro";
import { v } from "../../styles/variables";
import { CardTotales } from "../organisms/CardTotales";
import { CalendarioLineal } from "../organisms/CalendarioLineal";
import { TablaMovimientos } from "../organisms/table/TablaMovimientos";

export function MovimientosTemplate() {
  const [openMenu, setOpenMenu] = useState(false);
  const [dataSelect, setdataSelect] = useState([]);
  const [accion, setAccion] = useState("");
  const [openRegistro, SetopenRegistro] = useState(false);
  const [value, setValue] = useState(dayjs(Date.now()));
  const [formatoFecha, setFormatoFecha] = useState("");
  const [stateTipo, setStateTipo] = useState(false);

  const {
    setTipo,
    tipo,
    colorCategoria,
    año,
    mes,
    bgCategoria,
    tituloBtnDesMovimientos,
  } = useOperaciones();

  const { idusuario } = useUserStore();

  const {
    totalMesAño,
    totalMesAñoPagados,
    totalMesAñoPendientes,
    mostrarMovimientos,
    datamovimientos,
  } = useMovimientosStore();

  const { mostrarCuentas } = useCuentaStore();

  const { mostrarCategorias } = useCategoriasStore();

  function openTipo() {
    setStateTipo(!stateTipo);
    setOpenMenu(false);
  }

  function cambiarTipo(p) {
    setTipo(p);
    setStateTipo(!stateTipo);
    setOpenMenu(false);
  }

  function nuevoRegistro() {
    SetopenRegistro(!openRegistro);
    setAccion("Nuevo");
    setdataSelect([]);
  }

  useQuery(
    [
      "mostrar movimientos mes año",
      { año: año, mes: mes, idusuario: idusuario, tipocategoria: tipo },
    ],
    () =>
      mostrarMovimientos({
        año: año,
        mes: mes,
        idusuario: idusuario,
        tipocategoria: tipo,
      })
  );

  useQuery(["mostrar cuentas"], () => mostrarCuentas({ idusuario: idusuario }));

  useQuery(["mostrar categorias", { idusuario: idusuario, tipo: tipo }], () =>
    mostrarCategorias({ idusuario: idusuario, tipo: tipo })
  );

  return (
    <Container>
      {openRegistro && (
        <RegistrarMovimientos
          dataSelect={dataSelect}
          state={openRegistro}
          setState={() => SetopenRegistro(!openRegistro)}
        />
      )}

      <header className="header">
        <Header {...{ openMenu, setOpenMenu }} />
      </header>

      <section className="tipo">
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
        <ContentFiltro>
          <BtnFiltro
            action={nuevoRegistro}
            bgColor={bgCategoria}
            textColor={colorCategoria}
            icon={<v.agregar />}
          />
        </ContentFiltro>
      </section>
      <section className="totales">
        <CardTotales
          total={totalMesAñoPendientes}
          title={tipo == "g" ? "Gastos pendientes" : "Ingresos pendientes"}
          color={colorCategoria}
          icono={<v.flechaarribalarga />}
        />
        <CardTotales
          total={totalMesAñoPagados}
          title={tipo == "g" ? "Gastos pagados" : "Ingresos pagados"}
          color={colorCategoria}
          icono={<v.flechaabajolarga />}
        />
        <CardTotales
          total={totalMesAño}
          title="Total"
          color={colorCategoria}
          icono={<v.balance />}
        />
      </section>
      <section className="calendario">
        <CalendarioLineal
          value={value}
          setValue={setValue}
          formatofecha={formatoFecha}
          setFormatoFecha={setFormatoFecha}
        />
      </section>
      <section className="main">
        <TablaMovimientos data={datamovimientos} />
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
    "tipo" 100px
    "totales" 360px
    "calendario" 100px
    "main" auto;
    @media ${device.tablet} {
      grid-template:
    "header" 100px
    "tipo" 100px
    "totales" 100px
    "calendario" 100px
    "main" auto;
    }

  .header {
    grid-area: header;
    /* background-color: rgba(103, 93, 241, 0.14); */
    display: flex;
    align-items: center;
  }
  .tipo {
    grid-area: tipo;
    /* background-color: rgba(107, 214, 14, 0.14); */
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .totales {
    grid-area: totales;
  //  background-color: rgba(229, 26, 165, 0.14);
    display: grid;
    align-items: center;
    grid-template-columns: 1fr;
    gap: 10px;

    @media ${device.tablet} {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  .calendario {
    grid-area: calendario;
   // background-color: rgba(77, 237, 106, 0.14);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .main {
    grid-area: main;
   // background-color: rgba(179, 46, 241, 0.14);
  }
`;

const ContentFiltro = styled.div`
  display: flex;
  flex-wrap: wrap;
`;