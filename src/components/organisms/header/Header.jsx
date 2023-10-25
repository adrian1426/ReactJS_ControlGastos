import PropTypes from 'prop-types';
import HeaderContainer from "../../atoms/HeaderContainer";
import User from "../user/User";

const Header = (props) => {
  const { state, setState } = props;

  return (
    <HeaderContainer>
      <User {...{ state, setState }} />
    </HeaderContainer>
  );
};

Header.propTypes = {
  state: PropTypes.object,
  setState: PropTypes.func
};

export default Header;