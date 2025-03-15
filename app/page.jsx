import Header from "@/components/Header";
import HeroPosts from "@/components/HeroPosts";
import "react-quill-new/dist/quill.snow.css";
import { Suspense } from "react";





export default async function Home() {
  
  return (
    <>

      <Header />

    <Suspense fallback={<div>Loading posts...</div>}>
      <HeroPosts />
    </Suspense>
    </>
  );
}
