import React, { useState, useEffect } from "react";
import styles from "../css/Comments.module.css";

const Comments = () => {
  const [comment, setComment] = useState("");
  const [author, setAuthor] = useState("");
  const [comments, setComments] = useState([
    {
      author: "John Doe",
      date: "01/01/2022",
      content: "Este es un comentario predeterminado",
    },
  ]);

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem("comments")) || [];
    setComments(storedComments);
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (
      comment.trim() !== "" &&
      author.trim() !== "" &&
      storedUser &&
      storedUser.roll === "usuario"
    ) {
      const newComment = {
        author: author.trim(),
        date: new Date().toLocaleDateString(),
        content: comment.trim(),
      };
      setComments([...comments, newComment]);
      setComment("");
      setAuthor("");
    } else if (storedUser && storedUser.roll !== "usuario") {
      alert("Solo los usuarios pueden comentar");
    } else {
      alert("Debes iniciar sesión para poder comentar");
    }
  };

  return (
    <section className={styles.comments}>
      <h3>Comentarios:</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <p>{comment.content}</p>
            <section className={styles.commentInfo}>
              <span>{comment.author}</span>
              <span>{comment.date}</span>
            </section>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tu nombre"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
        <input
          type="text"
          placeholder="Añade un comentario..."
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Comments;
