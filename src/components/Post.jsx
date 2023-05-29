import React, { useEffect } from "react";
import L from "leaflet";
import { useParams } from "react-router-dom";
import PostsContext from "../context/PostsContext";
import styles from "../css/Post.module.css";
import Comments from "./Comments";
import Banner from "./Banner";

const Post = () => {
  const { id } = useParams();
  const { posts } = React.useContext(PostsContext);

  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <p>No se encontró el post.</p>;
  }

  useEffect(() => {
    const map = L.map(`map-${post.id}`).setView([parseFloat(post.lat), parseFloat(post.lng)], 10);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);
    
    L.marker([parseFloat(post.lat), parseFloat(post.lng)]).addTo(map)
    .bindPopup(post.title)

    window.addEventListener("resize", () => map.invalidateSize());

    return () => {
      map.remove();
    };
  }, [post]);

  return (
    <>
      <Banner
        imagen="https://images.unsplash.com/photo-1668615590640-43ce356c1446?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
        titulo={post.title}
        descripcion={post.ubicacion}
      />
      <section className={styles.post}>
        <section className={styles.postContent}>
          <img src={post.imageUrl} alt={post.title} />
          <p>{post.content}</p>
        </section>
        <h3>{post.tags}</h3>
        <section className={styles.end}>
          <Comments comments={post.comments} postId={post.id} />
          <article id={`map-${post.id}`} className={styles.map} />
        </section>
      </section>
    </>
  );
};

export default Post;
