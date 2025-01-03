import axios from 'axios'
import React from 'react'

const About = () => {
  // const get = async()=>{
  //   const res = await axios.get("https://picsum.photos/v2/list?page=2&limit=100")
  //   const data=  res.data;
  //   console.log(data);
  // }

  const get= async()=>{

    const res= await axios.get("https://picsum.photos/v2/list?page=2&limit=10");
    const data=  res.data;
    // setData(data);
    console.log(data);
    }
  return (
    <div><h1 >about section</h1>
    
    <button onClick={get}>dd </button></div>
  )
}

export default About