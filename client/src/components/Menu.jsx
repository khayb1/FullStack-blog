import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
// const posts = [
//   {
//     id: 1,
//     title: "First Post",
//     content:
//       "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//     img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
//   },
//   {
//     id: 2,
//     title: "Second Post",
//     content:
//       "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//     img: "https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 3,
//     title: "Third Post",
//     content:
//       "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//     img: "https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 4,
//     title: "Fourth Post",
//     content:
//       "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//     img: "https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 5,
//     title: "Fifth Post",
//     content:
//       "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//     img: "https://images.unsplash.com/photo-1517404215738-15263e9f9178?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
// ];

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.error("Error fetching post", err);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <>
      <div className="w-full flex flex-col gap-4 justify-center items-center bg-gray-200 p-5">
        <h1 className="text-2xl font-bold mb-5">Posts You May Also Like</h1>
        {posts.map((post) => (
          <div key={post.id} className="w-full mb-5 gap-5 flex flex-col ">
            <img
              src={post.img}
              alt="image"
              className="w-[100%] h-[200px] object-cover "
            />
            <h1 className="text-2xl font-bold text-center">{post.title}</h1>
            <button className="rounded-md border-none hover:bg-blue-400 transition-all delay-100 p-2 font-medium text-[1.05rem] border text-gray-900 bg-blue-500 w-fit mx-auto">
              <Link to="#">Read More</Link>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;
