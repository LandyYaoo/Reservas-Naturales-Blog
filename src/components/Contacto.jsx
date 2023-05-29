import stylesContacto from "../css/Contacto.module.css";
import Banner from "./Banner";
import { BsSend } from "react-icons/bs";

function Contacto() {
  return (
    <>
      <Banner
        imagen="https://images.unsplash.com/photo-1585938389612-a552a28d6914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
        titulo="Contacto"
        descripcion="Habla con nosotros"
      />

      <section className={stylesContacto.todo}>
        <section className={stylesContacto.card}>
          <img
            className={stylesContacto.img}
            src="https://images.unsplash.com/photo-1540712637209-536447be3137?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=652&q=80"
            alt=""
          />
          <h3 className={stylesContacto.ayudar}>
            Queremos ayudarte <span>Escribenos como podemos hacerlo</span>
          </h3>
          <h3 className={stylesContacto.quien}>
            ¿QUIEN ERES? <br />
            <span>Te contactaremos pronto</span>
          </h3>
          <form className={stylesContacto.form1} action="">
            <input
              type="text"
              placeholder="Nombre"
              className={stylesContacto.nombre}
              required
            />
            <input
              type="text"
              placeholder="Apellido"
              className={stylesContacto.apellido}
            />
          </form>
          <form action="" className={stylesContacto.form2}>
            <input
              type="text"
              placeholder="Email"
              className={stylesContacto.email}
            />
          </form>
          <form action="" className={stylesContacto.form3}>
            <input
              type="text"
              placeholder="Telefono"
              className={stylesContacto.tel}
            />
          </form>
          <form action="" className={stylesContacto.form4}>
            <input
              type="textarea"
              placeholder="Describe tu peticion aqui..."
              className={stylesContacto.description}
            />
          </form>
          <button className={stylesContacto.button}>
            <h1>
              Enviar 
            </h1>
          </button>
        </section>
      </section>
    </>
  );
}

export default Contacto;
