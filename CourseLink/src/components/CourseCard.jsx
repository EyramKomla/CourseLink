import React from 'react'

function CourseCard({courseTitle, author, link, description, sourcePath, year, courseTopic}) {
  return (
    <div className='w-full h-55 border-2 border-slate-400 m-0 flex flex-col rounded-md'>
      
        <div className='w-full h-[16%]  border-black flex items-center pl-4 pr-4'>
          <p className='mr-1'>Course Title:</p>
          <p className='w-70% overflow-x-hidden'>{courseTitle}</p>
        </div>
        
        <div className='w-full h-[16%] border-black flex items-center pl-4 pr-4'>
          <p className='mr-1'>Year:</p>
          <p>{year}</p>
        </div>
        <div className='w-full h-[16%] flex items-center justify-between pl-4 pr-4'>
          <p>Author: {author}</p>
        </div>
        <div className='w-full h-[16%] flex items-center pl-4 pr-4 gap-x-2'>
          <p>Description: </p>
          <p className='w-70% overflow-x-hidden'>{description}</p>
        </div>
        <div className='w-full h-[16%] flex items-center pl-4 pr-4 gap-x-2'>
          <p>Resource: </p>
          <a href={sourcePath} download={true} className='text-blue-400 underline'>{courseTitle}</a>
        </div>
        <div className='w-full h-[16%] flex items-center pl-4 pr-4 gap-x-2'>
          <p>Link: </p>
          <a href={link} target="_blank" rel="noopener noreferrer" className='w-70% overflow-x-hidden text-blue-500 hover:underline'>
            {link}
          </a>
        </div>
          
    </div>
  )
}

export default CourseCard