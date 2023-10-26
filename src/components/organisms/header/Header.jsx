import PropTypes from 'prop-types';
import HeaderContainer from "../../atoms/HeaderContainer";
import User from "../user/User";

const Header = (props) => {
  const { openMenu, setOpenMenu } = props;

  return (
    <HeaderContainer>
      <User {...{ openMenu, setOpenMenu }} />
    </HeaderContainer>
  );
};

Header.propTypes = {
  openMenu: PropTypes.bool,
  setOpenMenu: PropTypes.func
};

export default Header;