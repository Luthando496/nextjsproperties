import MyEditor from '@/components/Tiptap'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

export const metadata = {
  title:"Add New Post"
}

const page = async() => {
  const { data: session } = useSession();
  
    const [providers, setProviders] = useState(null);
  
    useEffect(() => {
      const setAuthProviders = async () => {
        const provider = await getProviders();
        setProviders(provider);
      };
  
      setAuthProviders();
    }, []);

  return (
    <>
    <section className='my-28'>
        <MyEditor />
    </section>
    
    </>
  )
}

export default page