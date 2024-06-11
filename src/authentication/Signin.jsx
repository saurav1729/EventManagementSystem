import React from 'react'
import korusBgSmall from '../resources/korusBgSmall.svg'

const Signin = () => {
  return (
    <div className='bg-yellow-ochre w-100vw h-[100vh] px-[150px] py-[50px] text-center'>
      <div className="container text-white flex box shadow-signup rounded-3xl">
        <div className="leftSide bg-black rounded-l-3xl">
          <img src={korusBgSmall} alt="" className='w-[600px] h-[650px] object-cover rounded-3xl' />
          <div className='z-1 absolute top-40 p-24 font-freeman text-[4.5rem]'>
            <h1>Welcome</h1>
            <h1 className='text-yellow-ochre text-left'>Back</h1>
          </div>
        </div>
        <div className="rightSide bg-black w-[600px] p-[4rem] py-[8rem] rounded-r-3xl">
          <h2 className='text-[2.5rem] font-freeman text-yellow-ochre mb-3'>Sign In</h2>
          <div className='flex flex-col items-center'>
            <input type="text" className='w-[25rem] text-white bg-black border border-white rounded-[24px] placeholder:text-white block font-freeman p-5 text-xl mb-5' placeholder="Email:"/>
            <input type="password" className='w-[25rem] text-white bg-black border border-white rounded-[24px] placeholder:text-white block font-freeman p-5 text-xl mb-5' placeholder="Password:"/>
            <button className='bg-yellow-ochre w-[10rem] p-3 font-freeman text-2xl rounded-[24px] mb-2'>Sign In</button>
            <p className=''>Don't have an account? <span className='font-freeman text-yellow-ochre underline'><a href="/signup">SignUp</a></span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin