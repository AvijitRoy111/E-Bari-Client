import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const AouthLayout = () => {
  return (

    <div className="flex flex-col min-h-screen ">
       <Navbar />
       <div className="flex flex-grow">
         <Outlet></Outlet>
       </div>

     </div>
   )
// }

// export default AouthLayout