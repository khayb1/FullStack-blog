import React, { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <main className="w-full flex my-5 gap-5">
        <div className="w-[70%] my-10">
          <input
            type="text"
            placeholder="Title"
            className="p-2 border-1 border-gray-200 w-full rounded-md my-5"
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
            <input className="hidden" type="file" id="file" />
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
              <button className="p-1 border-1 rounded-md  transition-all bg-amber-400 font-semibold">
                Update
              </button>
            </div>
          </div>
          <div className=" p-2 border-1 border-gray-200 flex flex-col">
            <h1 className="font-bold text-[20px]">Categories</h1>
            <span>
              <input type="radio" id="art" name="cat" value="art" />
              <label htmlFor="art">Art</label>
            </span>
            <span>
              <input type="radio" id="science" name="cat" value="science" />
              <label htmlFor="art">Science</label>
            </span>
            <span>
              <input
                type="radio"
                id="technology"
                name="cat"
                value="technology"
              />
              <label htmlFor="art">Technology</label>
            </span>
            <span>
              <input type="radio" id="cinema" name="cat" value="cinema" />
              <label htmlFor="art">Cinema</label>
            </span>
            <span>
              <input type="radio" id="design" name="cat" value="design" />
              <label htmlFor="art">Design</label>
            </span>
            <span>
              <input type="radio" id="food" name="cat" value="food" />
              <label htmlFor="art">Food</label>
            </span>
          </div>
        </div>
      </main>
    </>
  );
};

export default Write;
