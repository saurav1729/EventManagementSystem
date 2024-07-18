import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import AuthContext from '../context/AuthContext';
import logo from '../resources/kiitlogo.svg';
import defaultImg from '../assets/Default.png';

const Nav = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log(authCtx);
    authCtx.logout();
    navigate('/signin');
    console.log(authCtx);
  };

  return (
    <>
      <div className='absolute w-screen h-20 bg-black opacity-85'></div>
      <nav className='text-white flex justify-around w-screen'>
        <div className='z-[1]'>
          <img src={logo} alt="KIIT Logo" />
        </div>
        <div className='flex items-center'>
          <div className='z-[1] mx-10 bg-yellow-ochre text-xl rounded-[25px] p-[10px] px-[20px] font-freeman hover:bg-[#CB9D0698] hover:scale-110'>
            <Link to="/">Home</Link>
          </div>
          <div className='z-[1] mx-10 bg-yellow-ochre text-xl rounded-[25px] p-[10px] px-[20px] font-freeman hover:bg-[#CB9D0698] hover:scale-110'>
            <Link to="/about">About</Link>
          </div>
          <div className='z-[1] mx-10 bg-yellow-ochre text-xl rounded-[25px] p-[10px] px-[20px] font-freeman hover:bg-[#CB9D0698] hover:scale-110'>
            <Link to="/societies">Societies</Link>
          </div>
          {authCtx.isLoggedIn ? (
            <div className='h-[40px] w-[40px] z-50 cursor-pointer'>
              <img onClick={handleLogout} className='h-full w-full object-cover' src={defaultImg} alt="User" />
            </div>
          ) : (
            <div className='z-[1] mx-10 bg-yellow-ochre text-xl rounded-[25px] p-[10px] px-[20px] font-freeman hover:bg-[#CB9D0698] hover:scale-110'>
              <Link to="/signin">
                <Button>Login</Button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav;
