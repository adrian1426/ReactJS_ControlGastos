import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import ProtectedRoute from './ProtectedRoute';
import { UserAuthContext } from '../context/AuthContext';
import ConfigPage from '../pages/ConfigPage';
import CategoriaPage from '../pages/CategoriaPage';
import { MovimientosPage } from '../pages/MovimientosPage';
import InformesPage from '../pages/InformesPage';

const AppRoutes = () => {
  const { user } = UserAuthContext();

  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route element={<ProtectedRoute user={user} redirectTo='/login' />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/configurar' element={<ConfigPage />} />
        <Route path='/categorias' element={<CategoriaPage />} />
        <Route path='/movimientos' element={<MovimientosPage />} />
        <Route path='/informes' element={<InformesPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;