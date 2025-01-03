
import { Link } from "react-router-dom"
import React from 'react'

const Navbar = () => {
  return (
    <div>
     
<Link to='/about'><button>about</button></Link>
   <Link to='/home' > <h4>home</h4></Link>
    
    </div>
    
  )
}

export default Navbar