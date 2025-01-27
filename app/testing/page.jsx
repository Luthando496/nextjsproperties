import Link from 'next/link'




const Testing = () => {
  return (
    <>
    <div className="py-10 pl-10 bg-black text-white w-full flex gap-6 items-start">
        <Link href='/' className="group overflow-hidden  text-lg font-serif relative  hover:border-none pb-1 flex gap-3">Home  <span className="">/</span>  
        <span className='group-hover:-translate-x-full translate-x-0 duration-500  absolute bottom-0 w-[88%] h-[1px] bg-white'></span></Link>
        <Link href='/categories' className="group overflow-hidden  text-lg font-serif relative  hover:border-none pb-1 flex gap-3">Category  <span className="">/</span>  
        <span className='group-hover:-translate-x-full translate-x-0 duration-500  absolute bottom-0 w-[88%] h-[1px] bg-white'></span></Link>
        <span className="text-lg"> Thriving in Urban Environments: Tips for City Living</span>
    </div>


    
    </>
  )
}

export default Testing