import React from 'react'

const Footer = () => {
  return (
    <footer className='py-2 px-20 bg-black text-white'>
      <div className="container  my-14">
        <hr className="bg-teal-500" />
        <h2 className="text-center text-white text-3xl font-semibold my-10">Best Blog In The World</h2>
        <hr className="bg-teal-500" />
        <div className="grid grid-cols-4 gap-5 text-white mb-8">
          <div className="w-full space-y-3 mt-4">
          <h2 className="text-2xl font-semibold font-play relative">Subscribe</h2>
          <input type="text" name="" className='border border-white relative py-2 px-8 focus:outline-none' placeholder='email' id="" />
          <button className="absolute px-4 py-2 font-pop border text-white bg-black/75">Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer