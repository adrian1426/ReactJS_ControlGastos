import styled from 'styled-components';
import Button from '../molecules/Button';

const LoginTemplate = () => {
  return (
    <Container>
      <div>
        <span>Version 1.0</span>
        <div>
          <img src="" alt="" />
        </div>

        <Title>Control de gastos</Title>
        <p>Toma el control de tus gastos e ingresos</p>

        <ContainerBtn>
          <Button></Button>
        </ContainerBtn>
      </div>
    </Container>
  );
};

const Container = styled.div``;

const Title = styled.span`
  font-size: 5rem;
  font-weight: 700;
`;

const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
`;

export default LoginTemplate;