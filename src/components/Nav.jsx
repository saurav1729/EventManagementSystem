import React from 'react'
import logo from '../resources/kiitlogo.svg'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='bg-black text-white flex justify-around w-screen'>
        <div><img src={logo} alt="" /></div>
        <div className='flex items-center'>
            <div className='mx-10 bg-yellow-ochre text-xl rounded-[25px] p-[10px] px-[20px] font-freeman hover:bg-[#CB9D0698] hover:scale-110'><Link to="/">Home</Link></div>
            <div className='mx-10 bg-yellow-ochre text-xl rounded-[25px] p-[10px] px-[20px] font-freeman hover:bg-[#CB9D0698] hover:scale-110'><Link to="/about">About</Link></div>
            <div className='mx-10 bg-yellow-ochre text-xl rounded-[25px] p-[10px] px-[20px] font-freeman hover:bg-[#CB9D0698] hover:scale-110'><Link to="/societies">Socities</Link></div>
        </div>
    </nav>
  )
}

export default Nav