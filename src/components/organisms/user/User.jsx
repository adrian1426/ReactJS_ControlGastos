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
        width="20px"
        height="20px"
        bgcolor="#ffffff"
        textcolor="#181616"
        fontSize="11px"
        translateX="-50px"
        translateY="-12px"
      />
      <span className="name">{userData.name}</span>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  top:0;
  right: 0;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 50px;
  margin: 15px;
  cursor: pointer;

  .imgContainer{
    height: 40px;
    width: 40px;
    min-height: 40px;
    min-width: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 22px;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
      width: 100%;
      object-fit: cover;
    }
  }

  &:hover{
    background-color: ${({ theme }) => theme.bg3};
  }

  .name{
    width: 100%;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-wrap: break-word;
  }
`;

export default User;