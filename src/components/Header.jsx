import React, { useEffect, useState } from 'react';
import LogoWhite from '../../public/logo-white.svg';
import LogoDark from '../../public/logo-dark.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  const [header, setHeader] = useState(true);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });
  return (
    <header
      className={`${
        header ? 'bg-white py-6 shadow-lg' : 'bg-transparent py-8'
      } fixed z-50 w-full transition-all duration-500`}>
      <div className='container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0'>
        {/* Logo */}
        <a href='/'>
          {header ? (
            <img
              className='w-[160px]'
              src={LogoDark}
            />
          ) : (
            <img
              className='w-[160px]'
              src={LogoWhite}
            />
          )}
        </a>
        {/* nav */}
        <nav className={`${header ? 'text-primary' : 'text-white'} flex gap-x-4 font-tertiary tracking-[3px] text-[15px] items-center uppercase lg:gap-x-8`}>
          <Link to='/' className='hover:text-accent transition'>Home</Link>
          <Link to='/contact' className='hover:text-accent transition'>Rooms</Link>
          <Link to='/login' className='hover:text-accent transition'>Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
