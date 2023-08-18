 import {   useEffect, useRef, useState } from 'react';
 import { uploadFile } from './services/api';
import './App.css';

function App() {
  const logo = 'https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg'
  const fileInputRef = useRef() ;
  const [file , setFile] = useState('');

const onUploadClick = () =>{
  fileInputRef.current.click();
}

const [result , setResult ] = useState('');

useEffect( ()=>{
const getImage = async () =>{
 
if(file) {
  const data = new FormData();
  data.append("file", file);
  data.append("name", file.name);


 let response = await uploadFile(data);
 setResult(response.path)
}

// console.log(file)
}
getImage();
} ,[file])

  return (
    <div className='container' >

      
            <img src={logo} alt="banner" />
  
          <div className='wrapper'>
         <h1>simple file sharing</h1>
         <p>Upload and share the download link</p>
         <button onClick={()=> onUploadClick()} >Upload</button>
          <input type="file"
          ref={fileInputRef}
          style={{display:'none'}} 
          onChange={(e)=> setFile(e.target.files[0] )}
          />


          <a href={result} target='_blank'>{result}</a>
          </div>
    </div>
  );
}

export default App;
