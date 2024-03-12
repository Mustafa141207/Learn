import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
 <>
 <div className="container">
 <nav
  class="navbar navbar-expand-sm navbar-light bg-light"
 >
  <div class="container">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler d-lg-none"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapsibleNavId"
      aria-controls="collapsibleNavId"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
      <ul class="navbar-nav me-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <a class="nav-link active" href="#" aria-current="page"
            >Home
            <span class="visually-hidden">(current)</span></a
          >
        </li>
        <li class="nav-item">
          <Link to='login' class="nav-link" href="#">Login</Link>
        </li>
        <li class="nav-item">
          <Link to='register' class="nav-link" href="#">Register</Link>
        </li>
        <li class="nav-item">
          <Link to='Reset' class="nav-link" href="#">Reset</Link>
        </li>
      
      </ul>
      
    </div>
  </div>
 </nav>
 </div>

 
 </>
  )
}
