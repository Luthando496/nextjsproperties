import { v2 as cloudinary } from "cloudinary";

export const uploadImage = async (image) => {
  // Configuration
  cloudinary.config({
    cloud_name: "dezmcxbye",
    api_key: "749122274353157",
    api_secret: "GZecL2bZokhMM8TIi7IJbO9Y5yo", // Click 'View API Keys' above to copy your API secret
  });

  // Upload an image
  const uploadResult = await cloudinary.uploader
    .upload(
      `https://res.cloudinary.com/demo/image/upload/nextblog/${image}`,
      {
        public_id: "shoes",
      }
    )
    .catch((error) => {
      console.log(error);
    });

  
};
