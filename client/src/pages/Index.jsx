import React, { useState } from 'react'
import {IoMdClose }from'react-icons/io'
import {AiOutlineGoogle,AiOutlineFacebook}from'react-icons/ai'
import {FaFacebookF}from'react-icons/fa'


export default function Index() {
  const [type,setType] = useState('')

  const [show,setShow] = useState(false)
  const [state,setState]=useState({
    name:'',
    email:'',
    password:''
  })
  return (
    <div className='bg-[#18191b] min-h-screen w-full'>
      <div className={`w-screen ${show ? 'visible opacity-100' : ' invisible opacity-30'} transition-all duration-500 h-screen fixed bg-[#252627ad] flex justify-center items-center`}>
        <div className='w-[350px] bg-[#323335] m-auto px-6 py-4 rounded-md relative'>
          <div onClick={()=>setShow(false)} className=' absolute right-4 top-4 text-xl cursor-pointer text-white'>
            <IoMdClose/>
          </div>
          <h2 className='text-white pb-4 text-center text-xl'>Login or sign up in second</h2>
           {
            type ==='signin' &&  <form >
            {/* email  */}
            <div className='flex flex-col gap-3 mb-3 text-white '>
              <label htmlFor="Email">Email</label>
              <input type="email" name='email' id='email' placeholder='email' value={state.email} className=' px-3 py-2 rounded-md border outline-none border-[#5c5c5e] hover:border-purple-500 '/>
            </div>
            {/* password  */}
            <div className='flex flex-col gap-3 mb-3 text-white '>
              <label htmlFor="Password">Password</label>
              <input type="password" name='password' id='password' placeholder='Password' value={state.password} className=' px-3 py-2 rounded-md border outline-none border-[#5c5c5e] hover:border-purple-500 '/>
            </div>
            {/* button  */}
             <div>
            <button className='px-3 py-2 rounded-md bg-purple-500 text-white w-full outline-none hover:bg-purple-600'>Sign in</button>

             </div>
             {/* or  */}
             <div className='flex py-4 justify-between items-center px-3'>
              <div className='w-[45%] h-[2px] bg-[#434449]'></div>
              <div className='w-[6%] text-center flex pb-1  text-white'>or</div>
              <div className='w-[45%] h-[2px] bg-[#434449]'></div>

             </div>
             {/* gmail  */}
              <div className='pb-4'>
                <button className='flex px-3 justify-center items-center gap-2 py-2 rounded-md bg-orange-700 w-full text-white outline-none hover:bg-orange-800'> 
                    <span><AiOutlineGoogle /> </span>
                  <span>Login with gamil</span>
                </button>
              </div>
                {/* FaceBook  */}
                <div >
                <button className='flex px-3 justify-center items-center gap-2 py-2 rounded-md bg-blue-700 w-full text-white outline-none hover:bg-blue-800'> 
                    <span><FaFacebookF /> </span>
                  <span>Login with FaceBook</span>
                </button>
              </div>
           </form>
           }
           {
            type === 'signup' &&  <form >
              {/* name  */}
             <div className='flex flex-col gap-3 mb-3 text-white '>
              <label htmlFor="Name">Name</label>
              <input type="text" name='name' id='name' placeholder='name' value={state.name} className=' px-3 py-2 rounded-md border outline-none border-[#5c5c5e] hover:border-purple-500 '/>
            </div>
            {/* email  */}
            <div className='flex flex-col gap-3 mb-3 text-white '>
              <label htmlFor="Email">Email</label>
              <input type="email" name='email' id='email' placeholder='email' value={state.email} className=' px-3 py-2 rounded-md border outline-none border-[#5c5c5e] hover:border-purple-500 '/>
            </div>
            {/* password  */}
            <div className='flex flex-col gap-3 mb-3 text-white '>
              <label htmlFor="Password">Password</label>
              <input type="password" name='password' id='password' placeholder='Password' value={state.password} className=' px-3 py-2 rounded-md border outline-none border-[#5c5c5e] hover:border-purple-500 '/>
            </div>
            {/* button  */}
             <div>
            <button className='px-3 py-2 rounded-md bg-purple-500 text-white w-full outline-none hover:bg-purple-600'>Sign in</button>

             </div>
             {/* or  */}
             <div className='flex py-4 justify-between items-center px-3'>
              <div className='w-[45%] h-[2px] bg-[#434449]'></div>
              <div className='w-[6%] text-center flex pb-1  text-white'>or</div>
              <div className='w-[45%] h-[2px] bg-[#434449]'></div>

             </div>
             {/* gmail  */}
              <div className='pb-4'>
                <button className='flex px-3 justify-center items-center gap-2 py-2 rounded-md bg-orange-700 w-full text-white outline-none hover:bg-orange-800'> 
                    <span><AiOutlineGoogle /> </span>
                  <span>Login with gamil</span>
                </button>
              </div>
                {/* FaceBook  */}
                <div >
                <button className='flex px-3 justify-center items-center gap-2 py-2 rounded-md bg-blue-700 w-full text-white outline-none hover:bg-blue-800'> 
                    <span><FaFacebookF /> </span>
                  <span>Login with FaceBook</span>
                </button>
              </div>
           </form>
           }
     
        </div>
      </div>

      {/* *******************  nav bar start **********************  */}
      <div className='bg-[#252627] shadow-md'>
        <div className='w-[93%] m-auto py-3'>
          <div className='flex justify-between items-center'>
            <div className='w-[80px] h-[48px]'>
              <img className='w-full h-full' src="https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg" alt="" />
            </div>
            <div className='flex gap-4'>
              <button onClick={()=>{
                setType('signin')
                setShow(true)
              }} className='py-2 w-[80px] text-center bg-blue-500 text-white  transition-all hover:bg-blue-600 rounded-[5px] font-medium'>Sigin</button>
              <button onClick={()=>{
                setType('signup')
                setShow(true)
              }} className='py-2 w-[80px] text-center bg-[#8b3bff] text-white  transition-all hover:bg-[#9553f8] rounded-[5px] font-medium '>Sign Up</button>
              
            </div>
          </div>
        </div>
      </div>
      {/* *******************  nav bar end**********************  */}
      {/* ******************* main start**********************  */}
 
     <div className='  flex justify-center items-center '>
  <div className='py-[168px] flex w-full h-screen  justify-center items-center flex-col gap-6 bg-gray-800 rounded-[10px]'>
    <h2 className='text-5xl text-[#c7c5c5] font-bold'>What will you design today?</h2>
    <span className='text-[#aca9a9] text-2xl font-medium'>Canva makes it easy to create and share professional designs.</span>
    <button onClick={()=>{
                setType('signup')
                setShow(true)
              }} className='py-2 w-[200px] text-center bg-purple-500 text-white transition-all hover:bg-purple-600 rounded-[5px] font-medium'>
      Signup for free
    </button>
  </div>
</div>
       
      {/* ******************* main end**********************  */}


    </div>
  )
}
