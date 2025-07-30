import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Courselink-logo-no-bg.png';
import SearchBar from '../components/SearchBar';
import CourseCard from '../components/CourseCard';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { FaSearch } from 'react-icons/fa';

const querySnapshot = await getDocs(collection(db, "resources"));


const docsData = querySnapshot.docs.map(doc => ({
  id: doc.id,
  ...doc.data(),
}));

function Landingpage() {

  const [query, setQuery] = useState('');

  const handleSearch = (query) =>{
    console.log("This is the search: ", query)
  }



  return (
    <div className='flex flex-col items-center min-h-screen w-full'>
      {/* Nav bar */}
      <div className='fixed bg-white w-full h-20 flex justify-between items-center shadow-md pl-4 pr-4'>
        <img className='w-27 h-20 object-fill' src={Logo}/>
          
        <div className="flex items-center gap-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="border-solid border-blue-400 border-2 p-2 rounded-2xl w-full h-10 pl-5"
              />
              <button type="submit" className="h-10 w-12 flex justify-center items-center bg-blue-500 text-white rounded-3xl border-blue-400">
                <FaSearch className='text-white' size={18}/>
              </button>
            </div>

      </div>

      {/* Main content */}
      <div className='w-full h-auto'>
        <div className='w-full h-auto pl-28 pr-28 mt-30 flex flex-col justify-start items-center gap-y-12'>
          { query ? 
          (docsData.filter((resource) => resource.courseTitle.toLowerCase().includes(query.toLowerCase())).map((resource) => (
              <CourseCard 
                key={resource.id}
                courseTitle={resource.courseTitle}
                author={resource.author}
                year={resource.year}
                description={resource.description}
                link={resource.link}
                sourcePath={resource.sourcePath}
              />))) :
          
          (
            docsData.map((resource) => (
              <CourseCard 
                key={resource.id}
                courseTitle={resource.courseTitle}
                author={resource.author}
                year={resource.year}
                description={resource.description}
                link={resource.link}
                sourcePath={resource.sourcePath}
              />
            )
            ))
          }
        </div>
      </div>

      
    </div>
  )
}

export default Landingpage