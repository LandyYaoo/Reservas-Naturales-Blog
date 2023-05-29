import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import PostsContext from "../context/PostsContext";
import styles from "../css/NewPost.module.css";
import Banner from "./Banner";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const { posts, setPosts } = useContext(PostsContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      content,
      imageUrl,
      tags: selectedTags,
      lat,
      lng,
    };
    setPosts([...posts, newPost]);
    navigate("/posts");
  };

  const handleTagChange = (event) => {
    const tag = event.target.value;
    if (event.target.checked) {
      setSelectedTags([...selectedTags, tag]);
    } else {
      setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
    }
  };

  return (
    <>
      <Banner
        imagen="https://images.unsplash.com/photo-1585938389612-a552a28d6914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
        titulo="Crea un nuevo Post"
      />
      <section className={styles.newPost}>
        <h2>New Post</h2>
        <form onSubmit={handleSubmit}>
          <section className={styles.formGroup}>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              placeholder="Inserta Titulo del post"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </section>
          <section className={styles.formGroup}>
            <label htmlFor="content">Content:</label>
            <textarea
              id="content"
              placeholder="Inserta aqui el contenido del post"
              value={content}
              onChange={(event) => setContent(event.target.value)}
            />
          </section>
          <section className={styles.formGroup}>
            <label htmlFor="imageUrl">Image URL:</label>
            <input
              type="text"
              id="imageUrl"
              placeholder="inserta el url de la imagen"
              value={imageUrl}
              onChange={(event) => setImageUrl(event.target.value)}
            />
          </section>
          <section className={styles.tags}>
            <h1 htmlFor="tags">Tags:</h1>
            <article >
              <label >
                <input 
                  type="radio"
                  value="Tag1"
                  checked={selectedTags.includes("Tag1")}
                  onChange={handleTagChange}
                />
                Abierto
              </label>
            </article>
            <article>
              <label>
                <input
                  type="radio"
                  value="Tag2"
                  checked={selectedTags.includes("Tag2")}
                  onChange={handleTagChange}
                />
                Gratis
              </label>
            </article>
            <article>
              <label>
                <input
                  type="radio"
                  value="Tag3"
                  checked={selectedTags.includes("Tag3")}
                  onChange={handleTagChange}
                />
                Pago
              </label>
            </article>
            <article>
              <label>
                <input
                  type="radio"
                  value="Tag4"
                  checked={selectedTags.includes("Tag4")}
                  onChange={handleTagChange}
                />
                Parque Natural
              </label>
            </article>
            <article>
              <label>
                <input
                  type="radio"
                  value="Tag5"
                  checked={selectedTags.includes("Tag5")}
                  onChange={handleTagChange}
                />
                Reserva Natural
              </label>
            </article>
          </section>
          <section className={styles.formGroup}>
            <label htmlFor="latitud">Latitud:</label>
            <input
              type="number"
              id="lat"
              placeholder="Inserta la latitud"
              value={lat}
              onChange={(event) => setLat(event.target.value)}
            />
          </section>
          <section className={styles.formGroup}>
            <label htmlFor="longitud">Longitud:</label>
            <input
              type="number"
              id="lng"
              placeholder="Inserta la longitud"
              value={lng}
              onChange={(event) => setLng(event.target.value)}
            />
          </section>
          
          <button type="submit">Publicar</button>
        </form>
      </section>
      
    </>
  );
};

export default NewPost
