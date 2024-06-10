import React from 'react'
import korusBgSmall from '../resources/korusBgSmall.svg'

const Signup = () => {
  return (
    <div className='bg-yellow-ochre w-screen h-screen px-[150px] py-[50px] text-center'>
      <div className="container text-white flex box shadow-signup rounded-3xl">
        <div className="leftSide bg-black rounded-l-3xl">
          <img src={korusBgSmall} alt="" className='w-[600px] h-[650px] object-cover rounded-3xl' />
          <div className='z-1 absolute top-40 p-24 font-freeman text-[3rem]'>
            <h1>Don't have an</h1>
            <h1>account?</h1>
            <h1 className='text-yellow-ochre'>SignUp Now</h1>
          </div>
        </div>
        <div className="rightSide bg-black w-[600px] p-[4rem] rounded-r-3xl">
          <h2 className='text-[2.5rem] font-freeman text-yellow-ochre mb-3'>Sign Up</h2>
          <div className='flex flex-col items-center'>
            <input type="text" className='w-[25rem] text-white bg-black border border-white rounded-[24px] placeholder:text-white block font-freeman p-5 text-xl mb-5' placeholder="Full Name:"/>
            <input type="text" className='w-[25rem] text-white bg-black border border-white rounded-[24px] placeholder:text-white block font-freeman p-5 text-xl mb-5' placeholder="Email:"/>
            <input type="password" className='w-[25rem] text-white bg-black border border-white rounded-[24px] placeholder:text-white block font-freeman p-5 text-xl mb-5' placeholder="Create Password:"/>
            <input type="password" className='w-[25rem] text-white bg-black border border-white rounded-[24px] placeholder:text-white block font-freeman p-5 text-xl mb-5' placeholder="Repeat Password:"/>
            <button className='bg-yellow-ochre w-[10rem] p-3 font-freeman text-2xl rounded-[24px] mb-2'>Sign Up</button>
            <p className=''>Already have an account? <span className='font-freeman text-yellow-ochre underline'><a href="">SignIn</a></span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup