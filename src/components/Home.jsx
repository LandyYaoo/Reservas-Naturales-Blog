import { FaArrowCircleRight, FaSearchLocation } from "react-icons/fa";
import styles from "../css/Home.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import PostsContext from "../context/PostsContext";
import React from "react";

function Home() {
  const { posts } = useContext(PostsContext);

  function getPopularPosts(posts) {
    const sortedPosts = [...posts].sort((a, b) => b.visits - a.visits);
    return sortedPosts.slice(0, 2);
  }

  const popularPosts = getPopularPosts(posts);

  function getRecentPosts(posts) {
    const sortedPosts = [...posts].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    return sortedPosts.slice(0, 5);
  }

  const recentPosts = getRecentPosts(posts);

  return (
    <section className="all">
      <img
        className={styles.imgHome}
        src="https://images.unsplash.com/photo-1588852656640-48b816317c25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
        alt=""
      />
      <section className={styles.bannerHome}>
        <h1 className={styles.title}>EXPLORA LO MEJOR DE COLOMBIA</h1>
        <p className={styles.p}>
          Encuentra aquí los mejores parques y reservas naturales de Colombia, y
          atrévete a descubrir sus encantos
        </p>

        <Link className={styles.banner} to="/posts">
          <button className={styles.btn}>
            Ver todos los post{" "}
            <span>
              <FaArrowCircleRight size={40} />
            </span>
          </button>
        </Link>
      </section>
      <section className={styles.destinos}>
        <h1 className={styles.title}>DESTINOS POPULARES</h1>
        <p className={styles.p}>
          Descubre los lugares mas vistos y mejor calificados en el blog
        </p>

        <article className={styles.popularpost}>
          <h1 className={styles.titlepost}>{popularPosts[0].title}</h1>
          <img
            className={styles.imgpost}
            src={popularPosts[0].imageUrl}
            alt={popularPosts[0].title}
          />
          <img
            className={styles.imgpost2}
            src={popularPosts[0].imageUrl2}
            alt={popularPosts[0].title}
          />
          <p className={styles.contentpost}>{popularPosts[0].content}</p>
        </article>

        <article className={styles.popularpost2}>
          <h1 className={styles.titlepost}>{popularPosts[1].title}</h1>
          <img
            className={styles.imgpost}
            src={popularPosts[1].imageUrl}
            alt={popularPosts[1].title}
          />
          <img
            className={styles.imgpost2}
            src={popularPosts[1].imageUrl2}
            alt={popularPosts[1].title}
          />
          <p className={styles.contentpost}>{popularPosts[1].content}</p>
        </article>
      </section>
      <section className={styles.destinos}>
        <h1 className={styles.title}>DESTINOS RECIENTES</h1>
        <p className={styles.p}>
          Descubre ultimos lugares visitados y publicados en el blog
        </p>

        <article className={styles.recientepost}>
          {recentPosts.map((post) => (
            <Link
              to={`/post/${post.id}`}
              key={post.id}
              className={styles.postCard}
            >
              <img src={post.imageUrl} alt="" />
              <h3>
                {post.title}
                <p>{post.createdAt}</p>
              </h3>
            </Link>
          ))}
        </article>
      </section>
    </section>
  );
}

export default Home;
