import React from 'react'
import { useState,useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import {useTypewriter,cursor} from 'react-simple-typewriter'
import koruslogo from '../resources/koruslogo.svg'
import infinityLogo from '../resources/infinityMelody.svg'
import klavier from '../resources/klavier.svg'
import pic2 from '../resources/pic2.svg'
import { Link } from "react-router-dom";


const Hero = () => {

  const images = [koruslogo, infinityLogo, pic2, klavier];
  const [currentImages, setCurrentImages] = useState(images);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prevImages) => {
        const [first, ...rest] = prevImages;
        return [...rest, first];
      });
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);
  const [typeEffect]=useTypewriter({
    words:['seconds','seconds'],
    loop:{},
    typeSpeed:150,
    delaySpeed:40
  })
 
  return (
    <>

      <div className='absolute w-screen h-[85vh] top-20 bg-black opacity-85'>
      </div>
      <div className='w-screen h-[85vh] flex'>
        {/* <div className='z-[1] w-[50%] h-[70vh] p-[10px] pt-8 flex flex-col items-center'>
            <img className='w-[15rem] h-[17rem] mt-2 rounded-[45px] border-yellow-ochre border-[10px] mx-auto ' src={koruslogo}></img>
            <div className='flex flex-row justify-center gap-2'>
            <img className='w-[10rem] h-[10rem] mt-2 rounded-[45px] border-yellow-ochre border-[10px] hover:border-[#CB9D0698] ' src={infinityLogo}></img>
            <img className='w-[10rem] h-[10rem] mt-2 rounded-[45px] border-yellow-ochre border-[10px] hover:border-[#CB9D0698] ' src={pic2}></img>
            <img className='w-[10rem] h-[10rem] mt-2 rounded-[45px] border-yellow-ochre border-[10px] hover:border-[#CB9D0698] ' src={klavier}></img>
            </div>

            <div className='h-[5rem] rounded-[14px] w-[377px] bg-yellow-ochre mx-auto mt-[20px] flex justify-center items-center text-[2rem] text-[#ffffff] font-[400] font-freeman'>book your slot</div>

        </div> */}


<div className='z-[1] w-[50%] h-[70vh] p-[10px] pt-8 flex flex-col items-center'>
      <img
        className='w-[15rem] h-[17rem] mt-2 rounded-[45px] border-yellow-ochre border-[10px] mx-auto'
        src={currentImages[0]}
        alt="Top Image"
      />
      <div className='flex flex-row justify-center gap-2'>
        {currentImages.slice(1).map((image, index) => (
          <img
            key={index}
            className='w-[10rem] h-[10rem] mt-2 rounded-[45px] border-yellow-ochre border-[10px] hover:border-[#CB9D0698]'
            src={image}
            alt={`Image ${index + 1}`}
          />
        ))}
      </div>
      {/* <div className='h-[5rem] rounded-[14px] w-[377px] bg-yellow-ochre mx-auto mt-[20px] flex justify-center items-center text-[2rem] text-[#ffffff] font-[400] font-freeman'>book your slot</div> */}
    </div>
        <div className='z-[1] text-[white] pt-[54px] w-[550px] '>
          <div className='ml-7'>
          <h1 className='mt-[3.5rem] ml-[3rem] text-[3rem] font-[500] font-freeman'>Now book</h1>
          <h1 className='ml-[3rem] text-[3rem] font-[500] font-freeman'>your slot in <span className='text-yellow-ochre'>{typeEffect}</span></h1>
          </div>

        <Link to="./form"> <div className='h-[5rem] rounded-[14px] w-[377px] bg-yellow-ochre mx-auto mt-[20px] flex justify-center items-center text-[2rem] text-[#ffffff] font-[400] font-freeman hover:bg-[#886800] hover:cursor-pointer'>book your slot</div></Link>
        </div>
      </div>
    </>
  )
}

export default Hero