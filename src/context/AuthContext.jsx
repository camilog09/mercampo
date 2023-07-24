import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/supabase.config";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);

  //Autenticación con OTP
  async function signInWithOtp() {
    try {
        const { data, error } = await supabase.auth.signInWithOtp({
            email,
      });
      if (error)
        throw new Error("A ocurrido un error durante la autenticación");
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  // Autenticación con Google
  async function signInWithGoogle() {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      if (error)
        throw new Error("A ocurrido un error durante la autenticación");
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  //Cierre de sesión
  async function signout() {
    const { error } = await supabase.auth.signOut();
    if (error)
      throw new Error("A ocurrido un error durante el cierre de sesión");
  }
  //Redirección de usuario
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session == null) {
          navigate("/login", { replace: true });
        } else {
          setUser(session?.user.user_metadata);
          navigate("/", { replace: true });
        }
      }
    );
    return () => {
      authListener.subscription;
    };
  }, []);

  return (
    <AuthContext.Provider value={{ signInWithOtp, signInWithGoogle, signout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
