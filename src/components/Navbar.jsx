import React from 'react'
import {Link} from 'react-router-dom'
import '../app.css'
const Navbar = () => {
  return (
    <div className='nav'>
        <div className='nav__logo'> 
        <span><b>Notary</b></span>
        </div>
        <div className='nav__btns'>
         <button> <Link to='/'>Home</Link></button>
         <button> <Link to='/contact'>Contact</Link></button>
         <button> <Link to='/about'>About</Link></button>
        </div>
    </div>
  )
}

export default Navbar
