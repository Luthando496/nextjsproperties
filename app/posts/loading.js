"use client";

import { ColorRing } from "react-loader-spinner";

const loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ColorRing
        visible={true}
        height="280"
        width="280"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </div>
  );
};

export default loading;
