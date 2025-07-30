import React, { useState } from 'react';
import Logo from '../assets/Courselink-logo-no-bg.png';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { BiLoader } from 'react-icons/bi';
import {  getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../firebase';



function AddSource() {

        const [author, setAuthor] = useState("");
        const [courseName, setCourseName] = useState("");
        const [year, setYear] = useState("");
        const [description, setDescription] = useState("");
        const [link, setLink] = useState("N/A");
        const [isLoading, setIsLoading] = useState(false);
        const [file, setFile] = useState(null);
        
        const [previewURL, setPreviewURL] = useState(null);

        const handleFileChange = (e) => {
                const selectedFile = e.target.files[0];
                setFile(selectedFile);
        };

        const handleSubmit = async (e) =>{
                e.preventDefault();
                let sourcePath = "N/A";
                try{
                        setIsLoading(true);
                        if (file) {
                                const storageRef = ref(storage, `uploads/${file.name}`);
                                await uploadBytes(storageRef, file);
                                console.log("File uploaded successfully: ", storageRef["fullPath"]);
                                sourcePath = await getDownloadURL(storageRef);

                        }

                        const resourceRef = await addDoc(collection(db, "resources"), {
                                author: author,
                                year: year,
                                courseTitle: courseName,
                                description: description,
                                link: link,
                                sourcePath: sourcePath,
                        });
                        setIsLoading(false);
                        
                        
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
                        placeholder='Course Title - Course Topic' 
                        onChange={(e) => setCourseName(e.target.value)}
                        className='w-full h-14 border-1 rounded-xl pl-5 pr-5 bg-slate-100'/>
                     

                <input type="text"
                        className='w-full h-14 border-1 rounded-xl pl-5 pr-5 bg-slate-100'
                        onChange={(e) => setYear(e.target.value)}
                        placeholder='Year'/>

                <input type="text" 
                        placeholder='Your name' 
                        onChange={(e) => setAuthor(e.target.value)}
                        className='w-full h-14 border-1 rounded-xl pl-5 pr-5 bg-slate-100'/>
                
                <input type="text" 
                        placeholder='One line description of the resource' 
                        onChange={(e) => setDescription(e.target.value)}
                        className='w-full h-14 border-1 rounded-xl pl-5 pr-5 bg-slate-100'/>                

                <input type="text" 
                        placeholder='If its a link, paste it here' 
                        onChange={(e) => setLink(e.target.value)}
                        className='w-full h-14 border-1 rounded-xl pl-5 pr-5 bg-slate-100'/>
                
                <div className='w-full h-50 border-1 rounded-xl p-5 bg-slate-100 flex flex-col items-center justify-start gap-y-2'>
                        <input type="file" placeholder='Drop file here' 
                                accept="image/*,audio/*,video/*,.pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx" 
                                onChange={handleFileChange}
                                className='w-full h-[50%] border-1 rounded-xl pl-5 pr-5 bg-slate-500'/>

                        
                </div>

                <button type="submit" 
                        className='bg-[#2fbaa1] rounded-md w-36 h-14 text-white flex justify-center items-center hover:cursor-pointer'
                        onClick={handleSubmit}>
                        {isLoading ? <BiLoader className='animate-spin text-2xl' /> : <p>Add Resource</p>}
                </button>
            </div>
        </form>
    </div>
  )
}

export default AddSource