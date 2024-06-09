import React from 'react'
import rightCharacter from "../assets/formPic2.svg"
import leftCharacter from "../assets/LeftFormPic.svg"


const Form = () => {
  return (
    <div className='formPage bg-black w-screen h-screen justify-center flex-col flex items-center'>
        <div className='w-[80%] h-[7rem] bg-[#CB9D06] mt-7 flex justify-center items-center text-[#fff] font-freeman flex-col rounded-[12px] leading-[41px]'>
            <div className='text-[2rem] font-[900] tracking-wide'>KIIT STUDENT ACTIVITY CENTRE</div>
            <div className='text-[1.7rem] font-[900] tracking-wide'>Campus 13{' '}( Karmansha )</div>
        </div>
            <div className='w-[85%] h-[70%] mt-4 bg-[#000] rounded-[1.5rem] border border-[#F3EBE8] relative z-10 flex flex-col'>
              <img className='h-[12rem] absolute -top-[12.1rem] right-4' src={rightCharacter} alt="right character" />
              <img className='absolute h-[15rem] -top-[9.5rem] z-0 -left-[3rem]' src={leftCharacter} alt="left character" />
              <div className='p-[2rem] pl-10 flex gap-16 mx-auto'>
              <div className='flex text-[white] p-2 w-[35rem]  h-[3rem] rounded-[1.5rem] text-[1.25rem] font-freeman border border-[#F3EBE8] bg-[#000] gap-3 justify-center items-center'><div className='ml-5'>Name:</div> <input className='bg-[#000] w-[27rem] outline-none   active:outline-none border-[#fff] text-yellow-ochre placeholder:text-[#CB9D0650]' type="text" name='name' placeholder='saurav jha' /></div>
              <div className='flex text-[white] p-2 w-[35rem]  h-[3rem] rounded-[1.5rem] text-[1.25rem] font-freeman border border-[#F3EBE8] bg-[#000] gap-3 justify-center items-center'><div className='ml-5'>Roll Number:</div> <input className='bg-[#000] w-[25rem] outline-none  active:outline-none border-[#fff] text-yellow-ochre placeholder:text-[#CB9D0650]' type="text" name='name' placeholder='22053276'  /></div>
              </div>
              <div className='p-[2rem] -mt-9 flex gap-16 mx-auto'>
              <div className='flex text-[white] p-2  w-[35rem] h-[3rem] rounded-[1.5rem] text-[1.25rem] font-freeman border border-[#F3EBE8] bg-[#000] gap-3 justify-center items-center '><div className='ml-5'>contact:</div> <input className='bg-[#000] w-[25rem] outline-none active:outline-none border-[#fff] text-yellow-ochre placeholder:text-[#CB9D0650]' type="text" name='name' placeholder='123455689'  /></div>
              <div className='flex text-[white] p-2  w-[35rem] h-[3rem] rounded-[1.5rem] text-[1.25rem] font-freeman border border-[#F3EBE8] bg-[#000] gap-3 justify-center items-center'><div className='ml-5'>Branch:</div> <input className='bg-[#000] w-[26rem] outline-none  active:outline-none border-[#fff] text-yellow-ochre placeholder:text-[#CB9D0650]' type="" name='name' placeholder='cse'  /></div>
              </div>
            </div>
    </div>
  )
}

export default Form