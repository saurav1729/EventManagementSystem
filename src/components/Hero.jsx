import React from 'react'
import {useTypewriter,cursor} from 'react-simple-typewriter'
import koruslogo from '../resources/koruslogo.svg'
import infinityLogo from '../resources/infinityMelody.svg'
import klavier from '../resources/klavier.svg'
import pic2 from '../resources/pic2.svg'


const Hero = () => {
  const [typeEffect]=useTypewriter({
    words:['seconds','seconds'],
    loop:{},
    typeSpeed:150,
    delaySpeed:40
  })
 
  return (
    <>
      <div className='bg-[#000000] w-screen h-screen flex'>
        <div className='w-[50%] h-full p-[10px] pt-10 flex flex-col items-center'>
            <img className='w-[22rem] h-[17rem] mt-2 rounded-[45px] border-yellow-ochre border-[10px] mx-auto hover:border-[#CB9D0698] ' src={koruslogo}></img>
            <div className='flex flex-row justify-center gap-2'>
            <img className='w-[10rem] h-[10rem] mt-2 rounded-[45px] border-yellow-ochre border-[10px] hover:border-[#CB9D0698] ' src={infinityLogo}></img>
            <img className='w-[10rem] h-[10rem] mt-2 rounded-[45px] border-yellow-ochre border-[10px] hover:border-[#CB9D0698] ' src={pic2}></img>
            <img className='w-[10rem] h-[10rem] mt-2 rounded-[45px] border-yellow-ochre border-[10px] hover:border-[#CB9D0698] ' src={klavier}></img>
            </div>
            <div className='h-[5rem] rounded-[14px] w-[377px] bg-yellow-ochre mx-auto mt-[20px] flex justify-center items-center text-[2rem] text-[#ffffff] font-[400] cursor-pointer font-freeman hover:bg-[#CB9D0698]'>book your slot</div>
        </div>
        <div className='text-[white] pt-[30px]'><h1 className='mt-[3.5rem] ml-[3rem] text-[3rem] font-[500] font-freeman'>Now book</h1>
             <h1 className='ml-[3rem] text-[3rem] font-[500] font-freeman'>your slot in <span className='text-yellow-ochre'>{typeEffect}</span></h1>
        </div>
      </div>
    </>
  )
}

export default Hero