import React, { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Write = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.desc || "");
  const [title, setTitle] = useState(state?.title || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/api/upload", formData);
      console.log(res.data);
    } catch (err) {
      console.error("Error uploading image", err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    upload();
  };

  return (
    <>
      <main className="w-full flex my-5 gap-5">
        <div className="w-[70%] my-10">
          <input
            type="text"
            value={title}
            placeholder="Title"
            className="p-2 border-1 border-gray-200 w-full rounded-md my-5"
            onChange={(e) => setTitle(e.target.value)}
          />
          <span>
            <ReactQuill
              theme="snow"
              value={value}
              onChange={setValue}
              className="h-[300px] rounded-md"
            />
          </span>
        </div>

        <div className="w-[30%] flex flex-col gap-5">
          <div className="p-2 border-1 border-gray-200 flex flex-col justify-between">
            <h1 className="font-bold text-[20px]">Publish</h1>
            <span>
              <b>Status: </b> Draft{" "}
            </span>
            <span>
              <b>Visibility:</b> Public
            </span>
            <input
              className="hidden"
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label
              htmlFor="file"
              className="text-underline hover:cursor-pointer p-1 bg-gray-400 w-fit rounded-md hover:bg-gray-200 transition-all"
            >
              Upload Image
            </label>
            <div className="flex gap-5 my-5 justify-between">
              <button className="p-1 border-1 rounded-md transition-all text-amber-400 font-semibold">
                Save as Draft
              </button>
              <button
                onClick={handleClick}
                className="p-1 border-1 rounded-md  transition-all bg-amber-400 font-semibold"
              >
                Publish
              </button>
            </div>
          </div>
          <div className=" p-2 border-1 border-gray-200 flex flex-col">
            <h1 className="font-bold text-[20px]">Categories</h1>
            <span>
              <input
                type="radio"
                checked={cat === "art"}
                id="art"
                name="cat"
                value="art"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="art">Art</label>
            </span>
            <span>
              <input
                type="radio"
                checked={cat === "science"}
                id="science"
                name="cat"
                value="science"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="art">Science</label>
            </span>
            <span>
              <input
                type="radio"
                checked={cat === "technology"}
                id="technology"
                name="cat"
                value="technology"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="art">Technology</label>
            </span>
            <span>
              <input
                type="radio"
                checked={cat === "cinema"}
                id="cinema"
                name="cat"
                value="cinema"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="art">Cinema</label>
            </span>
            <span>
              <input
                type="radio"
                checked={cat === "design"}
                id="design"
                name="cat"
                value="design"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="art">Design</label>
            </span>
            <span>
              <input
                type="radio"
                checked={cat === "food"}
                id="food"
                name="cat"
                value="food"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="art">Food</label>
            </span>
          </div>
        </div>
      </main>
    </>
  );
};

export default Write;
