/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useUserStore } from "../../store/UserStore";
import { v } from "../../styles/variables";
import ButtonCircle from "../molecules/ButtonCircle";

export function CardTotales({ color, total, title, icono }) {
  const { dataUsuarios } = useUserStore();

  return (
    <Container>
      <div className="contentTextos">
        <section>
          <span className="title">{title}</span>
          <b>{<v.iconoFlechabajo />}</b>
        </section>
        <span className="total">
          {dataUsuarios.moneda} {total}
        </span>
      </div>

      <div className="contentIcono">
        <ButtonCircle
          height="50px"
          width="50px"
          bgcolor={color}
          fontSize="25px"
          icon={icono}
          textcolor="#ffffff"
          translateX="-45px"
          translateY="-15px"

        />
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.bg};
  border-radius: 25px;
  padding: 20px;
  width: 100%;
  justify-content: space-between;
  .contentTextos {
    display: flex;
    flex-direction: column;
    .title {
      font-size: 14px;
    }
    .total {
      font-size: 22px;
      font-weight: 500;
    }
    section{
      display:flex;
      gap:10px;
      display:flex;
      align-items:center;
    }
  }
  .contentIcono {
    display: flex;
  }
`;