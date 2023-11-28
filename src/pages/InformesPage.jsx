import styled from "styled-components";
import InformesTemplate from "../components/templates/InformesTemplate";

const InformesPage = () => {
  return (
    <Container>
      <InformesTemplate />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
`;

export default InformesPage;