import stylesBanner from "../css/Banner.module.css";

function Banner(props) {
  const { imagen, titulo, descripcion } = props;
  return (
    <section>
      <img className={stylesBanner.imgBanner} src={imagen} alt="" />
      <h1 className={stylesBanner.title}>{titulo}
      <p className={stylesBanner.descripcion}>{descripcion}</p>
      </h1>
      
    </section>
  );
}

export default Banner;
