import React from 'react'

function CourseCard() {
  return (
    <div className='w-85 h-55 border-solid border-1 border-black m-0 flex flex-col'>
      <div className='w-full h-[50%] border-b-1 border-black'>

      </div>
      <div className='w-full h-[50%] text-sm'>
        <div className='w-full h-[30%] border-t-1 border-black flex items-center pl-4 pr-4'>
          <p className='w-70% overflow-x-hidden'>Course Name</p>
        </div>
        <div className='w-full h-[30%] border-t-1 border-black flex items-center pl-4 pr-4'>
          <p className='mr-1'>Type of resource:</p>
          <p>Source</p>
        </div>
        <div className='w-full h-[30%] border-t-1 border-black flex items-center justify-between pl-4 pr-4'>
          <p>Author: Author</p>
          <p>Rating: Rating</p>
        </div>
          
      </div>
    </div>
  )
}

export default CourseCard