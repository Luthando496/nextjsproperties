import Header from "@/components/Header";
import HeroPosts from "@/components/HeroPosts";
import "react-quill-new/dist/quill.snow.css";
import { Suspense } from "react";
import Loading from "@/components/Loading";





export default async function Home() {
  
  return (
    <>

      <Header />

    <Suspense fallback={<Loading />}>
      <HeroPosts />
    </Suspense>
    </>
  );
}
