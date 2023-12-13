import React, { useState } from 'react'
import {Link,Outlet,useLocation} from'react-router-dom'
import {FaHome} from'react-icons/fa'
import {BsFolder,BsGrid1X2} from'react-icons/bs'

export default function Layout() {
    const {pathname} = useLocation()
    const [show ,setShow] = useState(false)
    console.log(pathname)
  return (
    <div className=' bg-[#18191b] min-h-screen w-full'>
        {/* navbar start */}
        <div className='bg-[#252627] shadow-md flex left-0 top-0 w-full z-20'>
            <div className='w-[93%] m-auto py-3'>
                <div className='flex justify-between items-center'>
                    <div className='w-[80px] h-[48px]'>
                        <img className='w-full h-full' src="https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg" alt="" />
                    </div>
                    <div className='flex gap-4 justify-center items-center relative'>
                        <but
                        ton className='py-2 px-6 overflow-hidden text-center bg-[#8b3bff] text-white rounded-[5px] font-medium hover:bg-[#9553f8]'>Create a Design</but>
                        <div onClick={()=>setShow(!show)} className=' cursor-pointer '>
                            <img src="https://lh3.googleusercontent.com/a/ACg8ocJL_eRQ8rUZxxBkX2CN9ZM3iN9bHLFgsMwdz4_rZDHl-gk=s83-c-mo" className='w-[45px] h-[45px] rounded-full ' alt="profile" />
                        </div>
                       <div className={`absolute top-[60px] right-0 w-[250px] bg-[#313030] p-3 border border-gray-700 transition duration-500  ${show ? 'visible opacity-100' :'invisible opacity-30'}`}>
                        <div className='px-2 py-2 flex justify-start gap-5 items-center'>
                        <img src="https://lh3.googleusercontent.com/a/ACg8ocJL_eRQ8rUZxxBkX2CN9ZM3iN9bHLFgsMwdz4_rZDHl-gk=s83-c-mo" className='w-[40px] h-[40px] rounded-full ' alt="profile" />
                          <div className='flex justify-start flex-col items-start'>
                          <span className='text-[#e0dddd] font-bold '>towsif</span>
                            <span className='text-[#e0dddd] font-bold '>lactg143@gmail.com</span>
                            </div>  
                        </div>
                       <ul className='text-[#e0dddd] font-semibold'>
                            <li>
                                <Link className='p-2 cursor-pointer'>
                                <span>Setting</span>
                                </Link>
                            </li>
                            <li>
                                <Link className='p-2 cursor-pointer'>
                                <span>Logout</span>
                                </Link>
                            </li>
                        </ul>
                       </div>
                    </div>
                    
                </div>
            </div>
        </div>
        {/* navbar end */}
        <div className='w-full flex mt-10 '>
            {/* sidebar  */}
            <div className='sidebar w-[300px] p-5 h-[calc(100vh-70px)] fixed '>
                <div className='px-2 py-2 flex justify-start gap-5 items-center mb-3'>
                    <img className='w-[40px] h-[40px] rounded-full' src="https://lh3.googleusercontent.com/a/ACg8ocJL_eRQ8rUZxxBkX2CN9ZM3iN9bHLFgsMwdz4_rZDHl-gk=s83-c-mo" alt="image" />
                    <div className='flex justify-center flex-col items-start'>
                        <span className='text-[#e0dddd] font-bold text-md'>Towsif aslam</span>
                        <span className='text-[#c4c0c0]'>Free</span>

                    </div>
                </div>
                <ul className='px-4 flex flex-col gap-2'>
                    <li>
                    <Link to='/' className={`text -[#e0dddd] px-2 py-2 flex justify-start items-center gap-2 ${pathname === '/' ?'bg-[#ffffff26]':''} rounded-[4px]`}>
                     <span className='text-xl'><FaHome /></span>
                     <span className='font-medium'>Home</span>
                    </Link>
                    </li>
                    <li>
                    <Link to='/projects' className={`text-[#e0dddd] px-2 py-2 flex justify-start items-center gap-2 ${pathname === '/projects' ?'bg-[#ffffff26]':''} rounded-[4px]`}>
                     <span className='text-xl'><BsFolder /></span>
                     <span className='font-medium'>Project</span>
                    </Link>
                    </li>
                    <li>
                    <Link to='/templates' className={`text-[#e0dddd] px-2 py-2 flex justify-start items-center gap-2 ${pathname === '/templates' ?'bg-[#ffffff26]':''} rounded-[4px]`}>
                     <span className='text-xl'><BsGrid1X2 /></span>
                     <span className='font-medium'>Home</span>
                    </Link>
                    </li>
                </ul>
            </div>
            {/* sidebar  */}
            <div className='ml-[300px] w-[calc(100%-300px)]'>
                <div className='py-4 pr-4'>
                    <Outlet />
                </div>
            </div>

        </div>

    </div>
  )
}
