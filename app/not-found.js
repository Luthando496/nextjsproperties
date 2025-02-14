import React from 'react'

const NotFoundPage = () => {
  return (
    <section className='flex justify-center flex-col space-y-5 items-center h-screen'>
        <h1 className='text-6xl text-red-500'>404 - Not Found</h1>
      <p className='text-xl text-gray-700'>The page you're looking for doesn't exist.</p>
    </section>
  )
}

export default NotFoundPage
