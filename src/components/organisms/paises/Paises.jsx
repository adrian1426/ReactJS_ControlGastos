import styled from "styled-components";
import { v } from "../../../styles/variables";
import InputSearcher from "../../molecules/InputSearcher";

const Paises = (props) => {
  const { setSelector, setOpenclose } = props;

  return (
    <Container>
      <header className="header">
        <span>busca tu pais</span>
        <span
          className="iconClose"
          onClick={setOpenclose}
        >
          {<v.iconocerrar />}
        </span>
      </header>
      <InputSearcher placeholder="buscar..." />
    </Container>
  );
};

const Container = styled.div``;

export default Paises;