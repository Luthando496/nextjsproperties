import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full header-bg  relative min-h-screen pb-[8rem] pt-[4rem] space-y-8 main-header text-white flex items-center flex-col py-32 justify-center">
      <h1 className="text-5xl font-bold">Welcome to Next.js Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full px-10">
        {/* SINGLE */}
        <div className="article px-4 py-6 h-[420px] flex flex-col-reverse relative bg-white text-black rounded-sm shadow-lg">
          {/* IMAGE */}
          <span className="">FERRARI</span>
          <h2 className="text-2xl font-bold">Ferrari 812 Competizione</h2>
        </div>
        {/* SINGLE */}
        {/* SINGLE */}
        <div className="article px-4 py-6 h-[420px] flex flex-col-reverse relative bg-white text-black rounded-sm shadow-lg">
          {/* IMAGE */}
          <span className="">FERRARI</span>
          <h2 className="text-2xl font-bold">Ferrari 812 Competizione</h2>
        </div>
        {/* SINGLE */}
        {/* SINGLE */}
        <div className="article px-4 py-6 h-[420px] flex flex-col-reverse relative bg-white text-black rounded-sm shadow-lg">
          {/* IMAGE */}
          <span className="">FERRARI</span>
          <h2 className="text-2xl font-bold">Ferrari 812 Competizione</h2>
        </div>
        {/* SINGLE */}
        {/* SINGLE */}
        <div className="article px-4 py-6 h-[420px] flex flex-col-reverse relative bg-white text-black rounded-sm shadow-lg">
          {/* IMAGE */}
          <span className="">FERRARI</span>
          <h2 className="text-2xl font-bold">Ferrari 812 Competizione</h2>
        </div>
        {/* SINGLE */}
      </div>
    </header>
  );
};

export default Header;
