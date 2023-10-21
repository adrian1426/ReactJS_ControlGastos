import styled from "styled-components";
import { UserAuthContext } from "../context/AuthContext";
import { useAuthStore } from "../store/AuthStore";

const HomePage = () => {
  const { signOut } = useAuthStore();
  const { user } = UserAuthContext();

  return (
    <Container>
      <h1>HomePage {user.full_name}</h1>
      <img src={user.picture} alt="" />
      <br />
      <button onClick={signOut}>Salir</button>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
`;

export default HomePage;