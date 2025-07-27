import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Courselink-logo-no-bg.png';
import SearchBar from '../components/SearchBar';
import CourseCard from '../components/CourseCard';

function Landingpage() {

  const handleSearch = (query) =>{
    console.log("This is the search: ", query)
  }

  return (
    <div className='flex flex-col items-center min-h-screen w-full'>
      {/* Nav bar */}
      <div className='fixed bg-white w-full h-20 flex justify-between items-center shadow-md pl-4 pr-4'>
        <img className='w-27 h-20 object-fill' src={Logo}/>
          
        <SearchBar onSearch={handleSearch}/>

      </div>

      {/* Main content */}
      <div className='w-full h-auto'>
        <div className='w-full h-auto pl-28 pr-28 mt-30 flex flex-row flex-wrap gap-x-15 gap-y-2'>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>

        </div>
      </div>

      <p>landingpage</p>
      <Link to='/signup'>Go to Sign up</Link>
    </div>
  )
}

export default Landingpage