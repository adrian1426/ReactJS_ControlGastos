import styled from "styled-components";
import CategoriaTemplate from "../components/templates/CategoriaTemplate";

const CategoriaPage = () => {
  return (
    <Container>
      <CategoriaTemplate />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
`;

export default CategoriaPage;