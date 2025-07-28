import React, { useState } from 'react';
import Logo from '../assets/Courselink-logo-no-bg.png';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';

function AddSource() {

        const [author, setAuthor] = useState("");
        const [courseName, setCourseName] = useState("");
        const [resourceType, setResourceType] = useState("");
        const [source, setSource] = useState("");
        const [link, setLink] = useState("");

        const handleSubmit = async (e) =>{
                e.preventDefault();
                try{
                        const resourceRef = await addDoc(collection(db, "resources"), {
                                author: author,
                                courseName: courseName,
                                resourceType: resourceType,
                                source: source,
                                link: link
                        })
                        console.log("Document was sent with document id: ", resourceRef.id)
                }catch(e){
                        console.error("Error adding document: ", e);
                }
        }

  return (
    <div className='w-full min-h-[100vh] flex flex-col items-center gap-y-18'>

        <div className='bg-white w-full h-20 flex justify-start items-center shadow-md pl-4 pr-4'>
                <img className='w-27 h-20 object-fill' src={Logo}/>

        </div>

        <form>
            <div className='w-150 min-h-180 h-auto shadow-2xl p-12 flex flex-col items-center gap-y-4'>
                <h1 className='text-2xl font-bold'>Add new resource</h1>

                <input type="text" 
                        placeholder='Your name' 
                        onChange={(e) => setAuthor(e.target.value)}
                        className='w-full h-14 border-1 rounded-xl pl-5 pr-5 bg-slate-100'/>

                <input type="text" 
                        placeholder='Course Name' 
                        onChange={(e) => setCourseName(e.target.value)}
                        className='w-full h-14 border-1 rounded-xl pl-5 pr-5 bg-slate-100'/>
                
                <select onChange={(e) => setResourceType(e.target.value)}
                        className='w-full h-14 border-1 rounded-xl pl-5 pr-5 bg-slate-100'>
                                <option value="" disabled selected>Select Resource Type</option>
                                <option value="Class Group">Class Group</option>
                                <option value="Study Group">Study Group</option>
                        </select>
                
                <input type="text" 
                        placeholder='Source (Where you found resource)' 
                        onChange={(e) => setSource(e.target.value)}
                        className='w-full h-14 border-1 rounded-xl pl-5 pr-5 bg-slate-100'/>                

                <input type="text" 
                        placeholder='If its a link, paste it here' 
                        onChange={(e) => setLink(e.target.value)}
                        className='w-full h-14 border-1 rounded-xl pl-5 pr-5 bg-slate-100'/>
                
                <input type="text" placeholder='Drop file here'
                        className='w-full h-50 border-1 rounded-xl pl-5 pr-5 bg-slate-100'/>
                <button type="submit" 
                        className='bg-[#2fbaa1] rounded-md w-36 h-14 text-white'
                        onClick={handleSubmit}>
                                Add Resource
                </button>
            </div>
        </form>
    </div>
  )
}

export default AddSource