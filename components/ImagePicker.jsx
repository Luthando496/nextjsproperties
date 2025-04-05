"use client";
import React, { useState } from "react";
import axios from "axios";

const ImagePicker = ({ setHandleImage, location }) => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null); 



  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);

      // Create a preview URL for the selected image
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  const handleSubmit = async () => {
    if (image) {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "my_preset"); // Replace with your Cloudinary unsigned upload preset
      if (location === "user") formData.append("folder", "supabase_blog_users");
      if (location === "post") formData.append("folder", "blog_posts_next");

      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/dezmcxbye/image/upload/`,
          formData
        );
        setUploadedImage(response.data.secure_url);
        setHandleImage(response.data.secure_url);
      } catch (error) {
        console.error("Error uploading image:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <input className='w-64' type="file" accept="image/*" onChange={handleImageChange} />
      {preview && (
        <div>
          <h3>Preview:</h3>
          <img
            src={preview}
            alt="Selected"
            className="min-w-72 max-h-48 object-cover rounded-sm shadow-lg shadow-zinc-500"
          />
        </div>
      )}
      {loading ? (
        <button className="text-2xl btn_image hover:translate-x-2 uppercase font-light tracking-[2px] p-3 my-5 text-white bg-blue-500 rounded-lg">
          loading
        </button>
      ) : (
        !uploadedImage && (
          <button
            onClick={handleSubmit}
            className="text-2xl w-48 btn_image hover:translate-y-2 duration-300 shadow-xl shadow-slate-300 font-light tracking-[2px] p-3 my-5 text-white bg-lime-500 rounded-lg"
          >
            Submit Image
          </button>
        )
      )}
    </div>
  );
};

export default ImagePicker;
