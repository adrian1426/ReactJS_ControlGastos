import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import InputSearcher from "../../molecules/InputSearcher";
import iso from 'iso-country-currency';
import { capitalize } from "../../../utils/conversiones";
import { device } from '../../../styles/breakpoints';
import IconClose from '../../atoms/IconClose';

const Paises = (props) => {
  const { setSelector, setOpenPaises } = props;
  const [dataResult, setDataResult] = useState([]);

  const isoCodigos = iso.getAllISOCodes();

  const search = (event) => {
    let filtered = isoCodigos.filter((item) => {
      return item.countryName === capitalize(event.target.value)
    });

    setDataResult(filtered);
  };

  const select = (dataSelected) => {
    setSelector(dataSelected);
    setOpenPaises();
  };

  return (
    <Container>
      <header className="header">
        <span>busca tu pais</span>
        <IconClose
          action={setOpenPaises}
        />
      </header>
      <InputSearcher
        placeholder="buscar..."
        onChange={search}
      />

      {
        dataResult.length > 0 && (
          dataResult.map((item, index) => {
            return (
              <ItemContainer key={index} onClick={() => select(item)}>
                <span>{item.countryName}</span>
                <span>{item.symbol}</span>
              </ItemContainer>
            )
          })
        )
      }
    </Container>
  );
};

const Container = styled.div`
  margin-top: 15px;
  position: absolute;
  top: 88%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bgtotal};
  border-radius: 10px;  
  border: 3px solid #3a3a3a;
  padding: 10px;
  gap: 10px;
  color: ${({ theme }) => theme.text};
  z-index: 3;

  @media ${() => device.tablet} {
    width: 400px;
  }

  .header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: inherit;
  }
`;

const ItemContainer = styled.section`
  gap: 10px;
  display: flex;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover{
    background-color: #303030;
  }
`;

Paises.propTypes = {
  setSelector: PropTypes.func,
  setOpenPaises: PropTypes.func
};

export default Paises;