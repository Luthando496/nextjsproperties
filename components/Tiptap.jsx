"use client";

import React, { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import ImagePicker from "./ImagePicker";
import { usePathname } from "next/navigation";



function MyEditor() {
  const [image, setImage] = useState('');
  const path = usePathname();
  console.log(path)

  const [textData,setTextData] = useState("");

  const [inputs,setInputs] = useState({title:"",subTitle:""})

  const setHandleData = async() => {
    console.log("DATA",textData);
    console.log("IMAGE",image);
    console.log("INPUTS",inputs);
  }

  const handleInputs = (e) =>{
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));

  }

  
  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      // ["link", "image"],
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
  

  return (
    <>
    <div className="px-40 mx-auto my-14-">
    <ImagePicker location={"post"} myData={textData} setHandleImage={setImage} />

    </div>
    <div className="px-24 my-4">
      <div className="form">
        <div className="form-group my-4 w-1/3">
        <label htmlFor="title">Post Title</label>
        <input
          type="text"
          id="title"
          onChange={handleInputs} value={inputs.title}
          name="title"
          placeholder="Title"
          className="w-full border focus:outline-none focus:border-green-500 border-gray-300 rounded p-2"
          />
          </div>
        <div className="form-group my-4 w-1/3">
        <label htmlFor="title">Post Subtile</label>
        <input
          type="text"
          id="subTitle"
          value={inputs.subTitle}
          onChange={handleInputs}
          name="subTitle"
          placeholder="subTitle"
          className="w-full border focus:outline-none focus:border-green-500 border-gray-300 rounded p-2"
          />
          </div>
      </div>


    <ReactQuill
      theme="snow"
      modules={quillModules}
      formats={quillFormats}
      value={textData} onChange={setTextData}
      />
      </div>
      <div className="my-8">
        <button onClick={setHandleData} className="bg-orange-600 mx-auto ml-24 duration-300 tracking-[3px] uppercase text-slate-900 border hover:shadow-md p-5 hover:-translate-y-2 rounded-md hover:shadow-black ">
          Submit Blog
        </button>
    </div>
      </>
  );
}

export default MyEditor;


