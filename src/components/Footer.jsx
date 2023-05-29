import { Link } from "react-router-dom";
import styles from "../css/Footer.module.css"
import * as icons from "react-icons/fa"

function Footer() {
  return (
    <>
      <section className={styles.all}>
        <img
          className={styles.back}
          src="https://images.unsplash.com/photo-1597564372249-622074dee45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          alt=""
        />
        <Link to="/">
          <article className={styles.marca}>
            Reservas <span>Naturales</span>
            <img src="../../public/assets/logo.svg" alt="" />
          </article>
        </Link>
        <span className={styles.redes}>
          <Link to="https://twitter.com/?lang=en" target="blank">
            <icons.FaTwitter />
          </Link>
          <Link to="https://www.facebook.com/" target="blank">
            <icons.FaFacebook  />
          </Link>
          <Link to="https://www.youtube.com/" target="blank">
            <icons.FaYoutube  />
          </Link>
        </span>
      </section>
      <article className={styles.list}>
        <ul>
          <li>
            <Link to="/posts">Project</Link>
          </li>
          <li>
            <Link to="/signup">Community</Link>
          </li>
          <li>
            <Link to="/contacto">Help</Link>
          </li>
          <li>
            <Link to="/conocenos">Others</Link>
          </li>
        </ul>
      </article>
      <section className={styles.rights}>
        <p>@All Rights Reserved 2023</p>
      </section>
    </>
  );
}

export default Footer