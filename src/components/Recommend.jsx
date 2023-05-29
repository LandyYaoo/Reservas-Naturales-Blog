import React, { useState } from "react";
import styled from "styled-components";
import Destination1 from "../assets/blog1.jpg";
import Destination2 from "../assets/blog2.jpg";
import Destination3 from "../assets/blog3.jpg";
import Destination4 from "../assets/blog4.jpg";
import Destination5 from "../assets/blog5.jpg";
import Destination6 from "../assets/blog6.jpg";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

export default function Recommend() {
  const data = [
    {
      image: Destination1,
      title: "Parque Nacional Natural La Paya",
      subTitle:
        "El Parque Nacional Natural La Paya es un área protegida de 422 000 Hectáreas, está ubicada en el municipio de Puerto Leguízamo, departamento del Putumayo, Colombia. Es refugio natural del caimán negro del Amazonas",
    },
    {
      image: Destination2,
      title: "Santuario de Fauna Acandí, Playón y Playona",
      subTitle:
        "El Santuario de Fauna y Flora Playona Acandí es uno de los once nuevos parques nacionales en Colombia. Es el hogar de la Tortuga Caña. Este parque se encuentra en la costa caribeña del Departamento de Chocó.",
    },
    {
      image: Destination3,
      title: "Parque Nacional Natural Sierra Nevada de Santa Marta",
      subTitle:
        "El parque nacional natural Sierra Nevada de Santa Marta es una de las áreas protegidas del sistema de parques nacionales naturales de Colombia y la segunda más antigua, creada en 1964.",
    },
    {
      image: Destination4,
      title: "Parque Nacional Natural Gorgona",
      subTitle:
        "Parque Nacional Natural Gorgona es un pequeño paraíso en medio del Océano Pacífico, con una frondosa y exuberante selva tropical. Está formado por dos islas, Gorgona y Gorgonilla. La Isla Gorgona es una isla ubicada a 28 km al oeste de la costa del Pacífico colombiano",
    },
    {
      image: Destination5,
      title: "Parque Nacional Natural Macuira",
      subTitle:
        "La serranía de Macuira es un ecosistema único en Colombia con montañas y bosques en contraste con la geografía desértica. Hay varios animales y nacimientos de agua. La entrada es gratis y se puede llegar a la cascada de Porcina y los pozos cercanos con una corta caminata.",
    },
    {
      image: Destination6,
      title: "Parque Nacional Natural Sumapaz",
      subTitle:
        "El Parque Nacional Natural Sumapaz es un área protegida en Colombia con acceso desde Bogotá, que incluye el Nevado del Sumapaz y diversas especies de flora y fauna. Tiene una historia precolombina y de la época de la Conquista.",
    },
  ];

  const packages = ["Articulos recientes"];

  const [active, setActive] = useState(1);
  return (
    <Section id="recommend">
      <section className="title">
        <h2>Destinos recomendados</h2>
      </section>
      <section className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </section>
      <section className="destinations">
        {data.map((destination) => {
          return (
            <section className="destination">
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <section className="info">
                <section className="services">
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                </section>
              </section>
            </section>
          );
        })}
      </section>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
    background-color: aliceblue;
  }
  .packages {
    background-color: aliceblue;
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: aliceblue;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
