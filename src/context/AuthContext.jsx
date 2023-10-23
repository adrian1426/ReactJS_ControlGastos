import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { supabase } from '../supabase/supabase.config';
import { addUser } from '../supabase/usuariosService';

const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const { children } = props;
  const [user, setUser] = useState([]);

  const insertUsuario = async (dataProvider, idAuthSupabase) => {
    const { name, picture } = dataProvider;

    const user = {
      nombres: name,
      foto: picture,
      idauth_supabase: idAuthSupabase
    };

    await addUser(user);
  };

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(

      async (event, session) => {
        if (session === null) {
          setUser(null);
        } else {
          setUser(session?.user.user_metadata);
          await insertUsuario(session?.user.user_metadata, session?.user.id);
        }
      }

    );

    return () => {
      authListener.subscription;
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthContextProvider.propTypes = {
  children: PropTypes.node
};

export const UserAuthContext = () => {
  return useContext(AuthContext);
};