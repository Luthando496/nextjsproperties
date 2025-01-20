"use client";

import React, { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

function MyEditor() {
  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ align: [] }],
      [{ color: [] }],
      ["code-block"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "align",
    "color",
    "code-block",
  ];
  const [value, setValue] = useState("");

  const handleChange=(val)=>{
    // setDefault(val)
    setValue(val)
  }

  return (
    <>
    <div className="px-24 my-4">
      <div className="form">
        <div className="form-group my-4 w-1/3">
        <label htmlFor="title">Post Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          className="w-full border focus:outline-none focus:border-green-500 border-gray-300 rounded p-2"
          />
          </div>
        <div className="form-group my-4 w-1/3">
        <label htmlFor="title">Post Subtile</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          className="w-full border focus:outline-none focus:border-green-500 border-gray-300 rounded p-2"
          />
          </div>
      </div>


    <ReactQuill
      theme="snow"
      modules={quillModules}
      formats={quillFormats}
      value={value}
      onChange={handleChange}
      />
      </div>
   
      </>
  );
}

export default MyEditor;
