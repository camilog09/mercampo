import { useEffect, useState } from "react";
import { supabase } from "../supabase/supabase.config";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import isologo from "../assets/isotipoColor.svg"
import logoGoogle from "../assets/logoGoogle.svg"
import styles from "../styles/Login.module.css"

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await supabase.auth.signInWithOtp({
        email,
      });
    } catch (error) {
      console.error(error);
    }
  };

  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }

  return (
    <>
      <div className={styles.Container}>
        <div className={styles["first-column"]}>
          <div className={styles["first-column-content"]}>
            <h4>
              ¿Sabías que los campesinos producen el 70% de los alimentos del
              país?
            </h4>
          </div>
        </div>
        <div className={styles["second-column"]}>
          <div className={styles["second-column-content"]}>
            <a href="/"><img src={isologo}/></a>
            <span>Iniciar sesión</span>
            <h2>Bienvenido de nuevo</h2>
            <p>Ingresa tu correo electrónico y recibe un enlace para acceder.</p>
            <form className={styles["login-form"]} onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="micorreo@ejemplo.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className={styles["form-button"]}>
                Acceder
              </button>
            </form>
            <hr />
            <button
              className={styles["google-button"]}
              onClick={signInWithGoogle}
          
            >
              <img src={logoGoogle} className={styles["logo-google"]} />
              Iniciar con Google
            </button>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <div className="flex justify-center items-center h-screen">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col rounded-xl">
            <a href="http://boxii.com.co/">
              <img
                className="max-w-[28%] mb-8"
                src="https://raw.githubusercontent.com/boxiidigital/assets-boxii-app/main/logo.png"
                alt="Logo"
              />
            </a>
            <h1 className="text-2xl text-blue-900 font-bold mb-6 text-left">
              Inicia sesión
            </h1>
            <form className="contents" onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="micorreo@ejemplo.com"
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-400 rounded py-2 px-3 mb-4"
              />
              <button className="bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded mb-4">
                Acceder
              </button>
            </form>
            <button
              className="flex items-center justify-center bg-white text-gray-800 font-bold py-2 px-4 rounded border border-gray-400 shadow hover:bg-gray-100"
              onClick={signInWithGoogle}
            >
              <FaGoogle className="text-xl mr-2 p-1" />
              Iniciar con Google
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
}
