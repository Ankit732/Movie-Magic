import Home from "./Home";
import SingleMovie from "./SingleMovie";

import Error from "./Error";
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      
    <Routes>
      <Route path="/" element={<Home />} />
      
      <Route path="/movie/:id" element={<SingleMovie />}/>
      <Route path='*' element={<Error/>}/>
      </Routes>
     
 
  
    </div>
  );
}

export default App;
