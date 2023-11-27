import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import { v } from "../../../styles/variables";
import { useForm } from "react-hook-form";
import { CirclePicker } from "react-color";
import Emojipicker from "emoji-picker-react";
import { useCategoriasStore } from "../../../store/CategoriasStore";
import { useUserStore } from "../../../store/UserStore";
import { useOperaciones } from "../../../store/OperacionStore";
import { InputText } from "./InputText";
import Button from "../../molecules/Button";
import { Spinner } from "../../molecules/Spinner";

export function RegistrarCategorias(props) {
  const { onClose, dataSelect, accion } = props;
  const { insertarCategorias, editarCategoria } = useCategoriasStore();
  const { dataUsuarios } = useUserStore();
  const [showPicker, setShowPicker] = useState(false);
  const [emojiselect, setEmojiselect] = useState("😻");
  const [currentColor, setColor] = useState("#F44336");

  const [estadoProceso, setEstadoproceso] = useState(false);
  const { tipo } = useOperaciones();
  function onEmojiClick(emojiObject) {
    setEmojiselect(() => emojiObject.emoji);
    setShowPicker(false);
  }
  function elegirColor(color) {
    setColor(color.hex);
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  async function insertar(data) {
    if (accion === "Editar") {
      const p = {
        descripcion: data.descripcion,
        color: currentColor,
        icono: emojiselect,
        id: dataSelect.id,
        idusuario: dataUsuarios.id,
        tipo: tipo,
      };
      try {
        setEstadoproceso(true);
        await editarCategoria(p);
        setEstadoproceso(false);
        onClose();
      } catch (error) {
        //
      }
    } else {
      const p = {
        descripcion: data.descripcion,
        color: currentColor,
        icono: emojiselect,
        idusuario: dataUsuarios.id,
        tipo: tipo,
      };
      try {
        setEstadoproceso(true);
        await insertarCategorias(p);
        setEstadoproceso(false);

        onClose();
      } catch (error) {
        alert("error ingresar Form");
      }
    }
  }
  useEffect(() => {
    if (accion === "Editar") {
      setEmojiselect(dataSelect.icono);
      setColor(dataSelect.color);
    }
  }, []);
  return (
    <Container>
      {estadoProceso && <Spinner />}

      <div className="sub-contenedor">
        <div className="headers">
          <section>
            <h1>
              {accion == "Editar"
                ? "Editar categoria"
                : "Registrar nueva categoria"}
            </h1>
          </section>

          <section>
            <span onClick={onClose}>x</span>
          </section>
        </div>

        <form className="formulario" onSubmit={handleSubmit(insertar)}>
          <section>
            <div>
              <InputText
                defaultValue={dataSelect.descripcion}
                register={register}
                placeholder="Descripcion"
                errors={errors}
                style={{ textTransform: "capitalize" }}
              />
            </div>
            <div className="colorContainer">
              <ContentTitle>
                {<v.paletacolores />}
                <span>Color</span>
              </ContentTitle>
              <div className="colorPickerContent">
                <CirclePicker onChange={elegirColor} color={currentColor} />
              </div>
            </div>
            <div>
              <ContentTitle>
                <input
                  readOnly={true}
                  value={emojiselect}
                  type="text"
                  onClick={() => setShowPicker(!showPicker)}
                ></input>
                <span>icono</span>
              </ContentTitle>
              {showPicker && (
                <ContainerEmojiPicker>
                  <Emojipicker onEmojiClick={onEmojiClick} />
                </ContainerEmojiPicker>
              )}
            </div>
            <div className="btnguardarContent">
              <Button
                icon={<v.iconoguardar />}
                bgcolor="#DAC1FF"
              >
                Guardar
              </Button>
            </div>
          </section>
        </form>
      </div>
    </Container>
  );
}
const Container = styled.div`
  transition: 0.5s;
  top: 0;
  left: 0;
  position: fixed;
  background-color: rgba(10, 9, 9, 0.5);
  display: flex;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  .sub-contenedor {
    width: 500px;
    max-width: 85%;
    border-radius: 20px;
    background: ${({ theme }) => theme.bgtotal};
    box-shadow: -10px 15px 30px rgba(10, 9, 9, 0.4);
    padding: 13px 36px 20px 36px;
    z-index: 100;

    .headers {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;

      h1 {
        font-size: 20px;
        font-weight: 500;
      }
      span {
        font-size: 20px;
        cursor: pointer;
      }
    }
    .formulario {
      section {
        gap: 20px;
        display: flex;
        flex-direction: column;
        .colorContainer {
          .colorPickerContent {
            padding-top: 15px;
            min-height: 50px;
          }
        }
      }
    }
  }
`;

const ContentTitle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  svg {
    font-size: 25px;
  }
  input {
    border: none;
    outline: none;
    background: transparent;
    padding: 2px;
    width: 40px;
    font-size: 28px;
  }
`;

const ContainerEmojiPicker = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

RegistrarCategorias.propTypes = {
  onClose: PropTypes.func,
  dataSelect: PropTypes.object,
  accion: PropTypes.string
};