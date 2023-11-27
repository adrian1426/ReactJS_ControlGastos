import styled from "styled-components";
import { v } from "../../styles/variables";
import Swal from "sweetalert2";
import { useCategoriasStore } from "../../store/CategoriasStore";
import { useUserStore } from "../../store/UserStore";
import Button from "../molecules/Button";

export function CardEliminarData() {
  const { eliminarCategoriasTodas } = useCategoriasStore();
  const { dataUsuarios } = useUserStore();

  const eliminar = async () => {
    Swal.fire({
      title: "¿Estás seguro(a)(e)?",
      text: "Una vez eliminado, ¡no podrá recuperar estos registros!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const p = {
          idusuario: dataUsuarios.id,
        };
        await eliminarCategoriasTodas(p);
      }
    });
  };

  return (
    <Container>
      <h2>Resetear todo</h2>
      <span>
        🐽ADVERTENCIA!: *esta acción es irreversible, una vez ejecutada se
        eliminaran todos tus registros de movimientos incluso las categorias
        registradas. <br />
        *Se reseteara tambien los saldos acumulados en tus cuentas.
      </span>
      <Button
        bgcolor="rgba(247, 92, 92, 0.87)"
        functionClick={eliminar}
      >
        resetear
      </Button>
      <div className="contentImg">
        <img src={v.logo} />
      </div>
    </Container >
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  border-radius: 10px;
  border: 2px solid rgba(255, 99, 99, 0.87);
  height: 100%;
  background: rgb(42, 1, 1);
  background: linear-gradient(
    18deg,
    rgba(252, 69, 69, 0.12) 9%,
    rgba(252, 69, 69, 0.3) 100%
  );
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 10px;
  gap: 20px;

  h2 {
    color: rgba(252, 69, 69, 0.72);
  }
  span {
    color: rgba(251, 82, 82, 0.67);
    font-size: 120%;
  }
  .contentImg {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 20%;
    opacity: 0.18;
    margin: 30px;
    img {
      width: 100%;
      animation: flotar 1.7s ease-in-out infinite alternate;
    }
  }
  @keyframes flotar {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 10px);
    }
    100% {
      transform: translate(0, -0px);
    }
  }
`;