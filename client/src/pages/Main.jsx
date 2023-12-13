import React, { useState } from 'react'
import Header from '../componets/Header'
import {BsGrid1X2,BsFillImageFill} from'react-icons/bs'
import {FaShapes,FaFolder} from'react-icons/fa'
import {RxTransform} from'react-icons/rx'
import {GoCloud} from'react-icons/go'
import {TfiText} from'react-icons/tfi'
import {MdKeyboardArrowLeft} from'react-icons/md'
import TemplateDesign from '../componets/main/TemplateDesign'
import MyImages from '../componets/MyImages'
import Projects from '../componets/Projects'
import Images from '../componets/Images'
import CreateComponent from '../componets/CreateComponent'
 




export default function Main() {
  const [state,setState] = useState('')
  const [corrent_component,setCorrentComponent] = useState('')
  const [color,setcolor] =useState('')
  const [image,setImage]  = useState('')
  const [rotate,setRotate] = useState(0)
  const [show,setShow] = useState({
    status:true,
    name:''
  })
  console.log(show)
  const setElements=(type,name)=>{
        
    setState(type)
    setShow({
      status:false,
      name
    })
  }
  const moveElement = ()=>{
    console.log('move')
  }
  const resizeElement = ()=>{
    console.log('resizeElement')
  }
  const rotateElement =()=>{
    console.log('rotateElement')
  }
  const removeComponent =()=>{
    console.log('remove')
  }
  const remove_background =()=>{
    const com = component.find(c => c.id === corrent_component.id)
    const temp = component.filter(c => c.id !== corrent_component.id)
    com.image = ''
    setImage('')
    setcomponent([...temp,com])
    
  }
  const [component,setcomponent] = useState([
    {
      name:'main_frame',
      type:'react',
      id:Math.floor((Math.random()*100)+1),
      width:500,
      height:500,
      z_index:1,
      color:'#fff',
      image:'',
      setCorrentComponent:(e)=>setCorrentComponent(e)
  }
  ])
  const createShape =(name,type)=>{
    const style = {
      id: component.length +1,
      name:name,
      type:type,
      left:10,
      top:10,
      rotate,
      color:'#3c3c3d',
      setCorrentComponent:(e)=>setCorrentComponent(e),
      remove_background:()=>setImage(''),
      moveElement,
      resizeElement,
      rotateElement,
        }
        setcomponent([...component,style])
  }

  // console.log(corrent_component)
  return (
    <div className=' min-w-screen h-screen bg-black'>
       <Header /> 
       <div className='flex h-[calc(100%-60px)] w-screen'>
       {/* sidebar */}

             <div className={`w-[80px] bg-[#18191b] z-50 text-gray-400  overflow-y-auto`}>
              <div onClick={()=>setElements('design','design')} className={`${show.name ==='design'?'bg-[#252637]':''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                <span className='text-2xl'><BsGrid1X2/></span>
                 <span className='text-xs font-medium'>Design</span>
              </div>
              <div  onClick={()=>setElements('shapes','shapes')} className={`${show.name ==='shapes'?'bg-[#252637]':''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                <span className='text-2xl'><FaShapes/></span>
                 <span className='text-xs font-medium'>Shapes</span>
              </div>
              <div onClick={()=>setElements('image','uploadImage')} className={`${show.name ==='uploadImage'?'bg-[#252637]':''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                <span className='text-2xl'><GoCloud/></span>
                 <span className='text-xs font-medium'>Upload</span>
              </div><div onClick={()=>setElements('text','text')} className={`${show.name ==='text'?'bg-[#252637]':''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                <span className='text-2xl'><TfiText/></span>
                 <span className='text-xs font-medium'>Text</span>
              </div><div onClick={()=>setElements('project','projects')} className={`${show.name ==='projects'?'bg-[#252637]':''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                <span className='text-2xl'><FaFolder/></span>
                 <span className='text-xs font-medium'>Project</span>
              </div><div onClick={()=>setElements('initImage','images')} className={`${show.name ==='images'?'bg-[#252637]':''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                <span className='text-2xl'><BsFillImageFill/></span>
                 <span className='text-xs font-medium'>Design</span>
              </div><div onClick={()=>setElements('background','background')} className={`${show.name ==='background'?'bg-[#252637]':''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                <span className='text-2xl'><RxTransform/></span>
                 <span className='text-xs font-medium'>Background</span>
              </div>
             </div>
       {/* sidebar */}
           {/* main bar  */}
           <div className='h-full w-[calc(100%-75px)]'>
            <div className={`${show.status?'p-0 -left-[350px]  ':'px-8 left-[75px] py-5'} bg-[#252627] h-full fixed transition-all w-[350px] z-30 duration-700`}>
              <div onClick={()=>setShow({name:'',status:true})} className='flex absolute justify-center items-center bg-[#252627] w-[20px] -right-2 text-slate-300 top-[40%] cursor-pointer h-[100px] rounded-full'><MdKeyboardArrowLeft/></div>
              {
                 state === 'design' &&<div>
                  <div className='grid grid-cols-2 gap-2'>
                    <TemplateDesign />
                  </div>
                 </div>
              }
               {
                 state === 'shapes' &&<div className='grid grid-cols-3 gap-2'>
                  <div onClick={()=>createShape('shape','react')} className='h-[90px] bg-[#3c3c3d] cursor-pointer '></div>
                  <div onClick={()=>createShape('shape','circle')} className='h-[90px] bg-[#3c3c3d] cursor-pointer rounded-full'></div>
                  <div onClick={()=>createShape('shape','trangle')} style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}} className='h-[90px] bg-[#3c3c3d] cursor-pointer rounded-full'></div>
                  <div onClick={()=>createShape('shape','forthangle')} style={{clipPath: ' polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)'}} className='h-[90px] bg-[#3c3c3d] cursor-pointer rounded-full'></div>
                  
                 </div>
              }
               {
                 state === 'image' && <MyImages />
              }
               {
                 state === 'project' && <Projects />
              }
               {
                 state === 'text' &&<div>
                  <div className='grid grid-cols-1 gap-2'>
                    <div className='bg-[#3c3c3d] cursor-pointer font-bold p-3 text-white text-xl rounded-sm'>add text</div>
                   
                  </div>
                 </div>
              }
               {
                 state === 'initImage' &&  <div className='h-[80vh] overflow-x-auto flex justify-start items-start scrollbar-hide'>
                  <Images />
                </div>
              }{
                state === 'background' &&<div className='h-[80vh] overflow-x-auto flex justify-start items-start scrollbar-hide'>
                 <div className='grid grid-cols-2 gap-2'>
                 {
        [1,2,3,4,4,34,53,4,3,6,3,6,23,5,6,6,2,2,0,5,3,5,5,5,5,5,5,5,5,5,5,5,5,6].map((img,i)=>{
            return  <div  key={i} className='w-full h-[90px] overflow-hidden rounded-sm cursor-pointer'>
                <img className='w-full h-full object-fill' src="http://localhost:5173/thumbail.webp" alt="" />
            </div>
        })
    }
                 </div>
              </div>
              }
               
            </div>
           
          <div className='w-full h-full flex'>
              <div className={`flex justify-center relative items-center h-full ${!corrent_component ? 'w-full':' w-[calc(100%-250px)] overflow-hidden'}`}>
                <div className=' min-w-[650px] min-h-[480px] flex justify-center items-center overflow-hidden'>
                  <div id='main_design' className=' w-auto relative h-auto overflow-hidden'>
                   {
                    component.map((c,i)=><CreateComponent info ={c} current_componet ={corrent_component}removeComponent={removeComponent}/>)
                   }
                 
                  </div>
                </div>
              </div>
              {
              corrent_component &&<div className='h-full w-[250px] text-gray-300 bg-[#252627] px-3 py-2  '>farid</div>
              }
             </div>
           </div>
        
       </div>

    </div>
  )
}
