import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const { user, redirectTo, children } = props;

  if (user === null) {
    return < Navigate replace to={redirectTo} />
  }

  return children ? children : <Outlet />;
};

ProtectedRoute.propTypes = {
  user: PropTypes.any,
  redirectTo: PropTypes.string,
  children: PropTypes.node
}

export default ProtectedRoute;