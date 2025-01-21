import MyEditor from '@/components/Tiptap'
import React from 'react'

export const metadata = {
  title:"Add New Post"
}

const page = () => {
  return (
    <>
    <section className='my-28'>
        <MyEditor />
    </section>
    
    </>
  )
}

export default page