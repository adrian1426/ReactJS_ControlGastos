import PropTypes from 'prop-types';
import styled from "styled-components";

const InputSearcher = (props) => {
  const { onChange, placeholder } = props;

  return (
    <Container>
      <input
        type="text"
        onChange={onChange}
        placeholder={placeholder}
      />
    </Container>
  );
};

const Container = styled.div`
  position: relative;

  input{
    background: ${({ theme }) => theme.bgtotal};
    font-size: 16px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-bottom: 1px solid gray;
    color: ${({ theme }) => theme.text};
    outline: none;

    &:focus{
      border-bottom: none;
    }

    &::placeholder{
      color: #c8c8c8;
    }
  }
`;

InputSearcher.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string
};

export default InputSearcher;