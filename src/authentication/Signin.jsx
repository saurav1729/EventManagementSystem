import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import korusBgSmall from '../resources/korusBgSmall.svg';
import axios from 'axios';
import AuthContext from '../context/AuthContext'; // Adjust the import based on your file structure

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(()=>{
    window.scrollTo(0,0);
  })

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/user/signin', { email, password });
      if (response.status === 200) {
        // console.log(response);
        const { token, user } = response.data;
        await authContext.login(
          user.fullName,
          user.email,
          user.access,
          token,
          36000,
        );
        // console.log(authContext);
        navigate('/');

      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='bg-yellow-ochre w-100vw h-[100vh] px-[150px] py-3  text-center'>
      <div className="container text-white flex box shadow-signup rounded-3xl">
        <div className="leftSide bg-black rounded-l-3xl relative">
          <img src={korusBgSmall} alt="" className='w-[600px] h-full object-cover rounded-3xl' />
          <div className='absolute top-40 w-full font-freeman text-[3.5rem]'>
            <h1>Welcome</h1>
            <h1 className='text-yellow-ochre '>Back</h1>
          </div>
        </div>
        <div className="rightSide bg-black w-[600px] p-[3rem] py-[5rem] rounded-r-3xl">
          <h2 className='text-[2.5rem] font-freeman text-yellow-ochre mb-3'>Sign In</h2>
          <div className='flex flex-col items-center'>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-[25rem] text-white bg-black border border-white rounded-[24px] placeholder:text-white block font-freeman p-5 text-xl mb-5'
              placeholder="Email:"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-[25rem] text-white bg-black border border-white rounded-[24px] placeholder:text-white block font-freeman p-5 text-xl mb-5'
              placeholder="Password:"
            />
            <button onClick={handleSignIn} className='bg-yellow-ochre w-[10rem] p-3 font-freeman text-2xl rounded-[24px] mb-2'>Sign In</button>
            <p>Don't have an account? <span className='font-freeman text-yellow-ochre underline'><a href="/signup">Sign Up</a></span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
