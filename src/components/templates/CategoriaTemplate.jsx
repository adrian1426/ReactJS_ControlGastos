import { useState } from 'react';
import styled from "styled-components";
import Header from "../organisms/header/Header";
import { ContentFilters } from '../atoms/ContentFilters';
import ButtonDropDown from '../molecules/ButtonDropDown';

const CategoriaTemplate = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Container>
      <header className="header">
        <Header {...{ openMenu, setOpenMenu }} />
      </header>

      <section className="tipo">
        <ContentFilters>
          <ButtonDropDown
            bgColor="red"
          />
        </ContentFilters>
      </section>

      <section className="area2">
        area2
      </section>

      <section className="main">
        main
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
  }

  .main{
    grid-area: main;
    background-color: rgba(179,46,241,0.14);
  }
`;

export default CategoriaTemplate;