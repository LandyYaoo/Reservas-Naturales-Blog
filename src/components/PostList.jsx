import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import PostsContext from "../context/PostsContext";
import styles from "../css/PostList.module.css";
import Banner from "./Banner";
import { FaPlusCircle, FaSearchLocation, FaTrash, FaEdit } from "react-icons/fa";

const PostList = () => {
  const { posts, setPosts } = useContext(PostsContext);
  const [searchTerm, setSearchTerm] = useState("");

  const storedUser = JSON.parse(localStorage.getItem("currentUser"));
  const userRole = storedUser?.roll;
  const isAdmin = userRole === "admin";

  const handleDelete = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  return (
    <>
      <Banner
        imagen="https://images.unsplash.com/photo-1628537850140-afbe6abe61f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        titulo="Posts"
      />
      <section className={styles.postList}>
        <section className={styles.searchBar}>
          <input
            className={styles.busqueda}
            type="text"
            placeholder="Buscar posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span>
            <FaSearchLocation size={25} />
          </span>
        </section>
        <section className={styles.postall}>
          {posts
            .filter((post) =>
              post.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((post) => (
              <div key={post.id} className={styles.postall}>
                <Link to={`/post/${post.id}`} className={styles.postCard}>
                  <img src={post.imageUrl} alt="" />
                  <h3>{post.title}</h3>
                </Link>
                {isAdmin && (
                  <div className={styles.actions}>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className={styles.delete}
                    >
                      <FaTrash size={20} />
                    </button>

                    
                      <button
                        onClick={() => handleEdit(post.id)}
                        className={styles.edit}
                      >
                        <FaEdit size={20} />
                      </button>
                    </div>
                )}
              </div>
            ))}
        </section>
        {isAdmin && (
          <Link to={`/new`}>
            <button className={styles.publicar}>
              Publicar
              <span>
                <FaPlusCircle size={25} />
              </span>
            </button>
          </Link>
        )}
      </section>
    </>
  );
};

export default PostList;
