import { useState } from "react";
import { useNavigate } from "react-router-dom";
import usersData from "../data/users";
import estilos from "../css/login.module.css";
import Banner from "./Banner";

function LogIn(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const user = usersData.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      const storedUser = JSON.parse(localStorage.getItem("currentUser"));
      props.handleSetCurrentUser(user);
      if (storedUser.roll === "admin") {
        navigate("/new");
      } else {
        navigate("/posts");
      }
    } else {
      alert("Nombre de usuario o Contraseña Invalidos");
    }
  };

  return (
    <>
      <Banner
        imagen="https://plus.unsplash.com/premium_photo-1668181103252-352173f7ada7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1675&q=80"
        titulo="Inicia Sesion"
        descripcion="Bienvenid@ de nuevo"
      />
      <section className={estilos.todo}>
        <section className={estilos.card}>
        <img className={estilos.img} src="https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
          <h1 className={estilos.quien}>Ingresa Aqui</h1>
          <form onSubmit={handleLogin} className={estilos.form2}>
            {/* USERNAME */}
            
            <input
              className={estilos.user}
              type="text"
              placeholder="Ingresa tu nombre de usuario"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            {/* PASSWORD */}
            <input
              className={estilos.pass}
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <p className={estilos.olvide}>Olvidaste tu contraseña?</p>

            <input type="submit" value="Ingresar" className={estilos.button}/>

          </form>
        </section>
      </section>
    </>
  );
}

export default LogIn;
