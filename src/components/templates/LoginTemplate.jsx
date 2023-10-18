import styled from 'styled-components';
import Button from '../molecules/Button';
import { v } from '../../styles/variables';
import { useAuthStore } from '../../store/AuthStore';

const LoginTemplate = () => {
  const { signInWithGoogle } = useAuthStore();

  return (
    <Container>
      <div className='contentCard'>
        <span className='version'>Version 1.0</span>
        <div className='contentImg'>
          <img src={v.logo} alt="" />
        </div>

        <Title>Control de gastos</Title>
        <p className='phrase'>Toma el control de tus gastos e ingresos</p>

        <ContainerBtn>
          <Button
            bgcolor={v.colorSecundario}
            icon={<v.iconogoogle />}
            functionClick={signInWithGoogle}
          >
            Iniciar con google
          </Button>
        </ContainerBtn>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-image: url(${v.imagenfondo});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255,255,255,0.87);
  text-align: center;

  .contentCard{
    background-color: #131313;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 20px;
    box-shadow: 8px 5px 18px 3px rgba(0,0,0,0.35);

    .version{
      color: #727272;
      text-align: start;
    }

    .contentImg{
      img{
        max-width: 60%;
        animation: flotar 1.5s ease-in-out infinite alternate;
      }
    }

    .phrase{
      color: #909090;
      font-size: 1.2rem;
    }
  }

  @keyframes flotar {
    0%{
      transform: translate(0,0px);
    }

    50%{
      transform: translate(0,15px);
    }

    100%{
      transform: translate(0,-0px);
    }
  }
`;

const Title = styled.span`
  font-size: 5rem;
  font-weight: 700;
`;

const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
`;

export default LoginTemplate;