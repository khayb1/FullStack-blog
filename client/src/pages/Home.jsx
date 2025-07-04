import React from "react";
import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "First Post",
    content:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    title: "Second Post",
    content:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    img: "https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Third Post",
    content:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    img: "https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Fourth Post",
    content:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    img: "https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Fifth Post",
    content:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    img: "https://images.unsplash.com/photo-1517404215738-15263e9f9178?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Home = () => {
  return (
    <>
      <div>
        {posts.map((post, index) => (
          <div
            key={post.id}
            className={`p-4 rounded flex w-full gap-10 mb-10 border-b-1 border-black  ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            }`}
          >
            <div className={"w-full flex justify-start"}>
              <img
                src={post.img}
                alt={post.title}
                className="w-[70%] h-[300px]  object-cover object-fit rounded-lg mb-2 "
              />
            </div>
            <div className=" flex flex-col justify-around items-center p-5">
              <h2 className="text-4xl  font-extrabold mb-2 ">{post.title}</h2>
              <p className="text-gray-700 text-[1.2rem] font-medium">
                {post.content}
              </p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                <Link to={`/post/${post.id}`}>Read More</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
