import React, { useState } from "react";
import PostsContext from "./context/PostsContext";
import Header from "./components/Header";
import Home from "./components/Home";
import Post from "./components/Post";
import SobreNosotros from "./components/SobreNosotros";
import Contacto from "./components/Contacto";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import NewPost from "./components/NewPost";
import PostList from "./components/PostList";
import Comments from "./components/Comments";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import postsData from "./data/posts";
import Footer from "./components/Footer";

function App() {
  const [posts, setPosts] = useState(postsData);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );

  function handleSetCurrentUser(user) {
    setCurrentUser(user);
    localStorage.setItem("currentUser", JSON.stringify(user)); // guardar en localStorage
  }

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      <Router>
        <Header currentUser={currentUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/conocenos" element={<SobreNosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route
            path="/logIn"
            element={<LogIn handleSetCurrentUser={handleSetCurrentUser} />}
          />
          <Route
            path="/comments"
            element={<Comments currentUser={currentUser} />}
          />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/new" element={<NewPost />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/posts" element={<PostList />} />
        </Routes>
        <Footer />
      </Router>
    </PostsContext.Provider>
  );
}
export default App;
