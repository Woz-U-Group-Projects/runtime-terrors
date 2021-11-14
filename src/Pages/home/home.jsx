import { useEffect, useState } from "react";
import Header from "../../Components/header/header";
import Posts from "../../Components/Posts/posts";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";
import Sidebar from "../../Components/Sidebar/sidebar"

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();


  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}