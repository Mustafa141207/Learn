import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Navbar/Nav'

export default function Master() {
  return (<>
  <Nav/>
       <Outlet/>
  
  </>
    
  
  
  )
}
