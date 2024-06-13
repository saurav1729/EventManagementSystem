import React from 'react'
import logo from '../resources/kiitlogo.svg'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <div className='absolute w-screen h-20 bg-black opacity-85'>
    </div>
    <nav className='text-white flex justify-around w-screen'>
        <div className='z-[1]'><img src={logo} alt="" /></div>
        <div className='flex items-center'>
            <div className= 'z-[1] mx-10 bg-yellow-ochre text-xl rounded-[25px] p-[10px] px-[20px] font-freeman hover:bg-[#CB9D0698] hover:scale-110'><Link to="/">Home</Link></div>
            <div className='z-[1] mx-10 bg-yellow-ochre text-xl rounded-[25px] p-[10px] px-[20px] font-freeman hover:bg-[#CB9D0698] hover:scale-110'><Link to="/about">About</Link></div>
            <div className='z-[1] mx-10 bg-yellow-ochre text-xl rounded-[25px] p-[10px] px-[20px] font-freeman hover:bg-[#CB9D0698] hover:scale-110'><Link to="/societies">Societies</Link></div>

        </div>
    </nav>
    </>
  )
}

export default Nav