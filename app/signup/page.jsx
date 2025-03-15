"use client"
import { useState } from 'react'
import ImagePicker from '@/components/ImagePicker'
import { supabase } from '@/utils/connectDB'
// import { useDispatch } from 'react-redux'
// import { loginUser } from '../store/actions/userActions'



const Register = () => {
//   const dispatch = useDispatch();

    const [inputData,setInputdata] = useState({
        name:"",
        email:"",
        password:"",
        bio:"",
    });

    const [image, setImage] = useState('');

    const onChangeInputs = (e) =>{

        setInputdata((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }
    const {name,email,password,bio} = inputData;


    const submitData =async() =>{


    try {
      // Register user using Supabase Auth
      const { data, error } = await supabase.auth.signUp(
        { email, password },
        {
          data: { name }, // Save additional user metadata
        }
      );
    //   dispatch(loginUser(data?.user))
      const { data:postData, error:postError } = await supabase.from('Users').insert([
          {
            name:name,
            email:email,
            profile_picture:image,
            bio:bio
          },
        ]);
      
      
     
      console.log("postError",postError)

      if (error) {
        console.log(`Error: ${error.message}`);
      } else {
        console.log("Registration successful! Please check your email for a confirmation link.");
      }
    } catch (err) {
      console.log(err,"register error")
    }
    }

  return (
    <>
    <section className="w-full px-4 lg:px-8 py-12">
        <div className="container flex-flex-col gap-10 px-2 md:px-8 lg:px-16 bg-slate-900 py-3 rounded-md">
            {/*  */}
            <div className="grid lg:grid-cols-2 gap-10 items-start">
                {/* Single INput */}
            <div className="flex flex-col gap-6">
                <label  className='text-2xl font-light tracking-[4px] uppercase text-white'>username :</label>
                <input type='text' onChange={onChangeInputs} name='name' value={name} placeholder='Enter Your Username' className="py-3 border-zinc-600 px-6 border placeholder:text-zinc-400 focus:outline-none focus:border-teal-500"  />
            </div>
            {/* Single input */}
            <div className="flex flex-col gap-6">
                <label  className='text-2xl font-light tracking-[4px] uppercase text-white'>email :</label>
                <input type='email' onChange={onChangeInputs} name='email' value={email} placeholder='Enter Your Username' className="py-3 border-zinc-600 px-6 border placeholder:text-zinc-400 focus:outline-none focus:border-teal-500"  />
            </div>
            {/* Single Input */}
            <div className="flex flex-col gap-6">
                <label  className='text-2xl font-light tracking-[4px] uppercase text-white'>password :</label>
                <input type='text' onChange={onChangeInputs} value={password} name='password' placeholder='Enter Your Username' className="py-3 border-zinc-600 px-6 border placeholder:text-zinc-400 focus:outline-none focus:border-teal-500"  />
            </div>
            {/*  */}
            </div>
            <div className="flex flex-col gap-6 my-4">
                <label  className='text-2xl font-light tracking-[4px] uppercase text-white'>Bio :</label>
                <textarea cols={17} type='text' onChange={onChangeInputs} name='bio' value={bio} placeholder='Enter Your Username' className="pb-10 pt-3 border-zinc-600 px-6 border placeholder:text-zinc-400 focus:outline-none focus:border-teal-500"  />
            </div>
            <div className="flex flex-col gap-6">
                <label  className='text-2xl font-light tracking-[4px] uppercase text-white'>Avatar:</label>
                <ImagePicker location="user" setHandleImage={setImage} />
            </div>
            {/*  */}
            <div className="my-8">
                <button onClick={submitData} className="bg-teal-600 duration-300 tracking-[3px] uppercase text-slate-900  hover:shadow-md -translate-y-2 p-5 hover:translate-y-0 rounded-md hover:shadow-black ">
                Submit Blog
                </button>
            </div>
            {/*  */}
        </div>
    </section>
    </>
      
  )
}

export default Register