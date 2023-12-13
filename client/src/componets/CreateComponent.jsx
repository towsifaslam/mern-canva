import React from 'react'

export default function CreateComponent({info, current_componet,removeComponent}) {
    const randValue = Math.floor(Math.random()*1)
    let html = ''
    if(info.name === 'main_frame'){
        html = <div onClick={()=>info.setCorrentComponent(info)} className='hover:border-[2px] hover:border-indigo-500 shadow-md'
                   style={{
                    width:info.width +'px',
                    height:info.height+'px',
                    background:info.color,
                    zIndex:info.z_index
                   }}
                   
        >
            {
                info.image &&  <img className='w-full h-full' src={info.image} alt="image" />
            }
        </div>
    }
    return html
}
