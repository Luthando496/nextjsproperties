"use client";

import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override =  {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function loading() {
  let [loadingState, setLoading] = useState(true);


  return (
    <>
    <div className="flex justify-center items-center h-screen bg-gray-100">

    <div className="sweet-loading">
      {/* <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" /> */}

      <ClipLoader
        color={"#f8b26a"}
        loading={loadingState}
        cssOverride={override}
        size={350}
        aria-label="Loading Spinner"
        data-testid="loader"
        />
    </div>
        </div>
        </>
  );
}


export default loading;
