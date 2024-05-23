import React from 'react'
import logo from '../resources/kiitlogo.svg'

const Nav = () => {
  return (
    <nav className='bg-black text-white flex justify-around w-screen'>
        <div><img src={logo} alt="" /></div>
        <div className='flex items-center'>
            <div className='mx-10 bg-yellow-ochre text-xl rounded-[25px] p-[10px] px-[20px] font-freeman hover:bg-[#CB9D0698] hover:scale-110'><a href="">Home</a></div>
            <div className='mx-10 bg-yellow-ochre text-xl rounded-[25px] p-[10px] px-[20px] font-freeman hover:bg-[#CB9D0698] hover:scale-110'><a href="">About</a></div>
            <div className='mx-10 bg-yellow-ochre text-xl rounded-[25px] p-[10px] px-[20px] font-freeman hover:bg-[#CB9D0698] hover:scale-110'><a href="">Socities</a></div>
        </div>
    </nav>
  )
}

export default Nav