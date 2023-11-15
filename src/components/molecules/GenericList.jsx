import PropTypes from 'prop-types';
import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import IconClose from "../atoms/IconClose";

const GenericList = (props) => {
  const { data = [], actionClose, setSelectTheme } = props;

  const selectTheme = (theme) => {
    setSelectTheme({
      icono: theme.icono, tema: theme.descripcion
    });
    actionClose();
  }

  return (
    <Container>
      <section className="contentClose">
        <IconClose action={actionClose} />
      </section>
      <section className="contentItems">
        {
          data.map((item, index) => {
            return (
              <ItemContainer key={index} onClick={() => selectTheme(item)}>
                <span>{item.icono}</span>
                <span>{item.descripcion}</span>
              </ItemContainer>
            )
          })
        }
      </section>
    </Container>
  );
};

const Container = styled.div`
  text-align: start;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bgtotal};
  color: ${({ theme }) => theme.text};
  position: absolute;
  margin-top: 15px;
  top: 88%;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  gap: 10px;

  @media ${device.tablet}{
    width: 400px;
  }
`;

const ItemContainer = styled.div`
  gap: 10px;
  display: flex;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #303030;
  }
`;

GenericList.propTypes = {
  data: PropTypes.array,
  actionClose: PropTypes.func,
  setSelectTheme: PropTypes.func
};

export default GenericList;