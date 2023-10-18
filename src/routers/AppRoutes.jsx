import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import ProtectedRoute from './ProtectedRoute';
import { UserAuthContext } from '../context/AuthContext';

const AppRoutes = () => {
  const { user } = UserAuthContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route element={<ProtectedRoute user={user} redirectTo='/login' />}>
          <Route path='/' element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;