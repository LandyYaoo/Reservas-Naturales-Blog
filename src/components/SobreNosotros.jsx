import estilos from "../css/SobreNosotros.module.css";
import Banner from "./Banner";

function SobreNosotros() {
  return (
    <>
      <Banner
        imagen="https://plus.unsplash.com/premium_photo-1676620957661-0c20a9e7b61f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
        titulo="Conocenos"
      />
      <section id="about" className={estilos.about}>
        <h2>Sobre nosotros</h2>
        <ul className={estilos.team}>
          <li className={estilos.member}>
            <figure>
              <a href="https://github.com/LandyYaoo" target="_black">
                <img src="./assets/L.jpg" alt="Foto del integrante 1" />
              </a>
              <figcaption>Leidy Pardo</figcaption>
            </figure>
          </li>
          <li className={estilos.member}>
            <figure>
              <a href="https://github.com/JeySoftware01" target="_black">
                <img src="./assets/j.webp" alt="Foto del integrante 2" />
              </a>
              <figcaption>Johan Socorro</figcaption>
            </figure>
          </li>
          <li className={estilos.member}>
            <figure>
              <a href="https://github.com/01FERNANDAGALINDO" target="_black">
                <img src="./assets/F.webp" alt="Foto del integrante 3" />
              </a>
              <figcaption>Fernanda Galindo</figcaption>
            </figure>
          </li>
          <li className={estilos.member}>
            <figure>
              <a href="https://github.com/cesariosus" target="_black">
                <img src="./assets/C.webp" alt="Foto del integrante 4" />
              </a>
              <figcaption>César Ríos</figcaption>
            </figure>
          </li>
          <li className={estilos.member}>
            <figure>
              <a href=" https://github.com/Javramooos" target="_black">
                <img src="./assets/j.webp" alt="Foto del integrante 5" />
              </a>
              <figcaption>Javier Ramos</figcaption>
            </figure>
          </li>
        </ul>
        <section className={estilos.misionvision}>
          <h3>Misión</h3>
          <p>
            Nuestra misión en este blog es promover la conservación de los
            parques ecológicos y su biodiversidad, a través de la difusión de
            información actualizada y confiable acerca de los ecosistemas, la
            flora y la fauna que los habitan. Nos enfocamos en fomentar una
            conciencia ambiental más profunda y activa en nuestra sociedad,
            ofreciendo contenido educativo y experiencias enriquecedoras a
            través de nuestros artículos, fotografías y actividades en los
            parques.
          </p>
          <h3>Visión</h3>
          <p>
            Nuestra visión es ser la plataforma líder en información y
            divulgación sobre parques ecológicos en Colombia, fomentando la
            conciencia y la educación ambiental a través de la promoción de la
            conservación de la biodiversidad y el uso sostenible de los recursos
            naturales. Nos esforzamos por conectar a la gente con la naturaleza
            y fomentar su amor y respeto por ella, y por inspirar a la sociedad
            a trabajar en conjunto para construir un futuro más verde y
            equilibrado para todos.
          </p>
        </section>
      </section>
    </>
  );
}

export default SobreNosotros;
