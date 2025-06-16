import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <>
      <main className="w-full flex mt-5 gap-5 ">
        <article className="w-[70%] flex-col">
          <img
            src="https://plus.unsplash.com/premium_photo-1678112180202-cd950dbe5a35?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="article image"
            className="w-[100%] h-[400px] object-cover"
            loading="lazy"
          />
          <div className="flex justtify-center items-center my-5">
            <img
              src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740"
              alt="user img"
              className="w-[50px] h-[50px] rounded-[50%]"
              loading="lazy"
            />
            <div className="flex ">
              <span className="flex-col">
                <p className="text-lg font-bold">Kelvin</p>
                <p className="font-medium text-gray-700">posted 2 days ago</p>
              </span>
              <span className="flex gap-2">
                <Link to={`/write?edit=2`}>
                  <MdDelete color="#eb3434" size={25} />
                </Link>
                <p>
                  <MdEdit color="#345feb" size={25} />
                </p>
              </span>
            </div>
          </div>
          <h1 className="text-4xl text-black font-bold pb-5">
            How does a content management system work?
          </h1>
          <p className="text-justify text-lg/relaxed mb-5">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
            <br />
            <br />
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
        </article>
        <div className="w-[30%] pl-10 pb-10">
          <Menu />
        </div>
      </main>
    </>
  );
};

export default Single;
