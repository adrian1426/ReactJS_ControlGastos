import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Header from "../organisms/header/Header";
import { ContentFilters } from '../atoms/ContentFilters';
import ButtonDropDown from '../molecules/ButtonDropDown';
import { useOperaciones } from '../../store/OperacionStore';
import MenuDropdown from '../molecules/MenuDropdown';
import { DataDesplegableTipo } from '../../utils/dataStatic';
import BtnFiltro from '../molecules/BtnFiltro';
import { v } from '../../styles/variables';
import { TablaCategorias } from '../organisms/table/TablaCategorias';
import { RegistrarCategorias } from '../organisms/formularios/RegistrarCategorias';

const CategoriaTemplate = (props) => {
  const { dataCategorias } = props;
  const [openMenu, setOpenMenu] = useState(false);
  const [openCategorias, setOpenCategorias] = useState(false);
  const [dataSelect, setDataSelect] = useState({});
  const { tituloBtn, colorCategoria, bgCategoria, setTipo } = useOperaciones();

  const cambiarTipoCategoria = (tipoCategoria) => {
    setTipo(tipoCategoria);
    setOpenCategorias(!openCategorias);
  };

  const cerrarDropDowns = () => {
    setOpenCategorias(false);
    setOpenMenu(false);
  };

  return (
    <Container onClick={cerrarDropDowns}>
      <header className="header">
        <Header {...{ openMenu, setOpenMenu }} />
      </header>

      <RegistrarCategorias
        dataSelect={dataSelect}
      />

      <section className="tipo">
        <ContentFilters>
          <div onClick={(e) => e.stopPropagation()}>
            <ButtonDropDown
              textColor={colorCategoria}
              bgColor={bgCategoria}
              text={tituloBtn}
              action={() => setOpenCategorias(!openCategorias)}
            />
            {
              openCategorias && (
                <MenuDropdown
                  desplegableUser={DataDesplegableTipo}
                  top="112%"
                  actions={cambiarTipoCategoria}
                />
              )
            }
          </div>
        </ContentFilters>
      </section>

      <section className="area2">
        <ContentFiltro>
          <BtnFiltro
            bgColor={bgCategoria}
            textColor={colorCategoria}
            icon={<v.agregar />}
          />
        </ContentFiltro>
      </section>

      <section className="main">
        <TablaCategorias
          data={dataCategorias}
        />
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
  grid-template: "header" 100px "tipo" 100px "area2" 50px "main" auto;

  .header{
    grid-area: header;
    background-color: rgba(103,93,241,0.14);
    display: flex;
    align-items: center;
  }

  .tipo{
    grid-area: tipo;
    background-color: rgba(229,67,26,0.14);
    display: flex;
    align-items: center;
  }

  .area2{
    grid-area: area2;
    background-color: rgba(77,237,106,0.14);
    display: flex;
    align-items: center;
    justify-content: end;
  }

  .main{
    grid-area: main;
    background-color: rgba(179,46,241,0.14);
  }
`;

const ContentFiltro = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

CategoriaTemplate.propTypes = {
  dataCategorias: PropTypes.array
};

export default CategoriaTemplate;