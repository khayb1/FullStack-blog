import React from "react";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import axios from "axios";
import moment from "moment";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  const [post, setPost] = useState({});
  // const [loading, setLoading] = useState(false);
  const location = useLocation();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  // Fetching the post data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.error("Error fetching post", err);
      }
    };
    fetchData();
  }, [postId]);

  const navigate = useNavigate();

  // delete function
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/posts/${postId}`);
      navigate("/");
      alert("Post deleted successfully");
    } catch (err) {
      console.error("Error fetching post", err);
    }
  };
  return (
    <>
      <main className="w-full flex mt-5 gap-5 ">
        <article className="w-[70%] flex-col">
          <img
            src={post?.img}
            alt={post.title}
            className="w-[100%] h-[400px] object-cover"
            loading="lazy"
          />
          <div className="flex justtify-center items-center my-5">
            {post.userImg && (
              <img
                src={post.userImg}
                alt="user img"
                className="w-[50px] h-[50px] rounded-[50%]"
                loading="lazy"
              />
            )}
            <div className="flex ">
              <span className="flex-col">
                <p className="text-lg font-bold">{post.username}</p>
                <p className="font-medium text-gray-700">
                  posted {moment(post.date).fromNow()}
                </p>
              </span>
              {currentUser.username === post.username && (
                <span className="flex gap-2">
                  <Link to={`/write?edit=2`} state={post}>
                    <MdEdit color="#345feb" size={25} />
                  </Link>
                  <p>
                    <MdDelete
                      onClick={handleDelete}
                      color="#eb3434"
                      size={25}
                    />
                  </p>
                </span>
              )}
            </div>
          </div>
          <h1 className="text-4xl text-black font-bold pb-5">{post.title}</h1>
          <p className="text-justify text-lg/relaxed mb-5">{post.desc}</p>
        </article>
        <div className="w-[30%] pl-10 pb-10">
          <Menu cat={post.cat} />
        </div>
      </main>
    </>
  );
};

export default Single;
