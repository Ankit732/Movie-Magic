
import { NavLink, useParams } from 'react-router-dom'
import './SingleMovie.css'

import React, { useEffect, useState } from "react";
import axios from 'axios'

const SingleMovie=()=>{

 
  const[isLoading, setLoading]= useState(true);
  const[movie,setMovie]=useState({});
  
  const [isError,setError]=useState(false);
  const {id}=useParams()
   
  const url=`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${id}`;
  

  const movies=async(URL)=>{
    setLoading(true)
    
    try {    const res= await axios.get(URL);
      
      const {data}= res;
      console.log(data)
      
    
      
      if(data.Response==="True"){
        setLoading(false);
        setMovie(data);
        
       setError(false)
       console.log("ankit")
        
      }
      else{
        setError(true);
      }
     
      
    } catch (error) {
      console.log(error.message)
      
      
    }

  
  }
  const {Title,Poster,Year,Director,imdbRating,Writer}=movie;

  useEffect(()=>{
   
      movies(url);
  

  
   
    },[id])

    return(
    
     isError ? <h1>there is an error</h1> : isLoading ? <h1 className='loadingS'>Loading...</h1> :
     <div className='main'>
    <div className='main-box'>
      <img src={Poster}/>
      <div className='singlemovie'>
        <h1>{Title}</h1>
     
    <p  className='writer'> Writer :   {Writer}</p>
     <p >Director: {Director}</p>
     <p>{imdbRating}/10</p>
     <p>{Year}</p>
     <NavLink to={'/'}>
     <button className='btn btn-primary'>Go-Back</button>
     </NavLink>
     
      </div>
      </div>
     </div>
     
   
  
   
         
    )

  }

export default SingleMovie