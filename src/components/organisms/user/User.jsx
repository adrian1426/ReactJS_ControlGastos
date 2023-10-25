import styled from "styled-components";
import { UserAuthContext } from "../../../context/AuthContext";
import ButtonCircle from "../../molecules/ButtonCircle";
import { v } from "../../../styles/variables";

const User = () => {
  const { user: userData } = UserAuthContext();

  return (
    <Container>
      <div className="imgContainer">
        <img src={userData.picture} alt="picture" />
      </div>
      <ButtonCircle
        icon={<v.iconocorona />}
        width="25px"
        height="25px"
        bgcolor="#ffffff"
        textcolor="#181616"
        fontSize="11px"
      />
    </Container>
  );
};

const Container = styled.div``;

export default User;