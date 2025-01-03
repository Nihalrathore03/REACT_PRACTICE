//  import axios from 'axios'
//  import React,{useEffect, useState} from 'react'


// const App = () => {
// const [data, setData] = useState([])
//  const get= async()=>{

//  const res= await axios.get("https://picsum.photos/v2/list?page=2&limit=10");
//  const data=  res.data;
//  setData(data);
//  console.log(data);
//  }
//  useEffect(() => {
//    get();
 

//  }, [])
 
//   return (
//     <>
//     <h2 >helow</h2>
//     <button onClick={get}>data</button>
//     {data.map((elem,idx)=>{
//       return <div key={idx} id='box'>
//         <h4>author = {elem.author}</h4>
//         <h4>{elem.id}</h4>
//        <img src={elem.download_url} width={elem.width} height={elem.height} />
       
      
//       </div>
//     })}
//     </>
//   )
// }

// export default App



import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Navbar from './Navbar'

const App = () => {

  return (
    <div>
    <Navbar/>
      <Routes>
        <Route path='/about' element={<About/>}/>

        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App






