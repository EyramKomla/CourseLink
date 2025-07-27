import React from 'react';
import Logo from '../assets/Courselink-logo-no-bg.png';

function AddSource() {
  return (
    <div className='w-full min-h-[100vh] flex flex-col items-center gap-y-18'>
        <div className='bg-white w-full h-20 flex justify-start items-center shadow-md pl-4 pr-4'>
                <img className='w-27 h-20 object-fill' src={Logo}/>

        </div>

        <form>
            <div className='w-150 h-180 shadow-2xl p-12 flex flex-col gap-y-4'>
                <h1 className='text-2xl font-bold'>Add new resource</h1>
                <input type="text" placeholder='Your name' 
                        className='w-full h-14 border-1 rounded-xl pl-5 pr-5 bg-slate-100'/>

                <input type="text" placeholder='Course Name' 
                        className='w-full h-14 border-1 rounded-xl pl-5 pr-5 bg-slate-100'/>
                
                <input type="text" placeholder='Type of resource' 
                        className='w-full h-14 border-1 rounded-xl pl-5 pr-5 bg-slate-100'/>
                
                <input type="text" placeholder='Source (Where you found resource)' 
                        className='w-full h-14 border-1 rounded-xl pl-5 pr-5 bg-slate-100'/>                

                <input type="text" placeholder='If its a link, paste it here' 
                        className='w-full h-14 border-1 rounded-xl pl-5 pr-5 bg-slate-100'/>
                
                <input type="text" placeholder='Drop file here'
                        className='w-full h-full border-1 rounded-xl pl-5 pr-5 bg-slate-100'/>
            </div>
        </form>
    </div>
  )
}

export default AddSource