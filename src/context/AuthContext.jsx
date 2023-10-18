import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { supabase } from '../supabase/supabase.config';

const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const { children } = props;
  const [user, setUser] = useState([]);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(

      async (session) => {
        if (session === null) {
          setUser(null);
        } else {
          setUser(session);
          console.log("Sesion: ", session);
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