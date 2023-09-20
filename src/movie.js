import React from 'react'
import { useGlobalContext } from './context'
import {NavLink} from 'react-router-dom'
import './movie.css'


const Movies= () => {
    const {movie,isLoading,isError,inputs}= useGlobalContext();
 
   
   
  return (isError===true ? <div className='movieErr'>
  <h1>No Result found for "{inputs}"</h1>
  <div>Please try searching again with another keyword</div>
</div>:isLoading ?<h1>Loading....</h1>: <div className='moviebox'  >   {movie.map(item=>{
       const {Title,imdbID,Poster}=item;
      
       
       return <>
      
       
        <div className='sub-box' key={imdbID}>
          <NavLink to={`/movie/${imdbID}`}  className='navs'>
            
          <h1 className='heading' >
            
           {Title.length>15 ?Title.substring(0,15)+"...":Title}
          </h1>
          <div className='poster'>
            <img src={Poster} alt='poster'></img>

          </div>
          </NavLink>
        </div>
       
       

      
       
       
       </>
      
        
    

        
       })}</div>
  )
}

export default Movies