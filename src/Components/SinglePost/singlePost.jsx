import "./singlePost.css";
import { useLocation } from "react-router";
import { useEffect, useState, Link } from "react";
import axios from 'axios';

export default function SinglePost() {
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})

    useEffect(() => {
        const getPost = async () => {
        const res = await axios.get("/posts/" + path);
        setPost(res.data)
    };

    getPost()
}, [path]);
    return (
        <div className="singlePost">
             <div className="singlePostWrapper">
                 {post.photo &&
                 <img 
                 src={post.photo} 
                 alt="" 
                 className="singlePostImg" /> }
                 

                 <h1 className="singlePostTitle">
                     {post.title}
                     <div className="singlePostEdit">
                     <i className="singlePostIcon fas fa-edit"></i>
                     <i className="singlePostIcon fa fa-trash"></i>
                     </div>
                     </h1>
                     <div className="singlePostInfo">
                         <span className="singlePostAuthor">
                             Author:
                             <Link to={`/?user=${post.username}`} className="link">
                                 </Link> <b>{post.username}</b></span>
                         <span className="singlePostDate">{new Date(post.createdA).toDateString()}<b></b></span>
                     </div>
                     <p className="singlePostDesc">
                         {post.desc}
                     </p>
             </div>
        </div>
    )
}