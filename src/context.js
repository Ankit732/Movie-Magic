import React, { useContext, useEffect, useState } from "react";
import axios from 'axios'

//create container -> store the values -> give it to the consumer -> make it global-> use it
const appContext= React.createContext(); // created the container






const Consumer=({children})=>{

 
  const[isLoading, setLoading]= useState(true);
  const[movie,setMovie]=useState([]);
  const [inputs ,setInputs]= useState("Godfather")
  const [isError,setError]=useState(false);
   
  const url=`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${inputs}`;
  

  const movies=async(URL)=>{
    try {    const res= await axios.get(URL);
      const {data}= res;
     console.log(res);
      
      if(data.Response==="True"){
        setLoading(false);
        setMovie(data.Search);
       setError(false)
        
      }
      else{
        setError(true);
      }
     
      
    } catch (error) {
      console.log(error.message)
      
      
    }

  
  }

  useEffect(()=>{
   let timerOut= setTimeout(()=>{
      movies(url);
    },500)
  return ()=> clearTimeout(timerOut)
  
   
    },[url])
 return <appContext.Provider value={{movie,isLoading,inputs,setInputs,isError}}>
   {children} 
  </appContext.Provider>
}
const useGlobalContext=()=>{
  return useContext(appContext);

}
export{Consumer,useGlobalContext}