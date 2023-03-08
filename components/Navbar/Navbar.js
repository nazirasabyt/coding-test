import React, { useContext } from "react";
import Link from "next/link";
import { IoAirplane, IoBed } from "react-icons/io5";
import Image from "next/image";
import AuthContext from "../../context/auth_context";

const Navbar = () => {
  const ctx = useContext(AuthContext);

  return (
    <header className='shadow-lg  bg-hero-pattern bg-cover bg-center h-[599px] w-[1380px sm:rounded-3xl sm:my-8 sm:mx-24 '>
      <section className='flex items-center justify-between mx-auto text-white py-6 px-8 '>
        <nav className=' hidden font-semibold sm:flex flex-row gap-4'>
          <Link href='' className='flex justify-center items-center'>
            <span>
              <IoAirplane className='md:text-2xl' />
            </span>
            Find Flight
          </Link>
          <Link href='' className='flex justify-center items-center'>
            <span>
              <IoBed className='md:text-2xl' />
            </span>
            Find Stays
          </Link>
        </nav>
        <Link href='/'>
          {" "}
          <Image
            width={120}
            height={40}
            src='/img/logo.png'
            alt='Logo Navbar'
          />
        </Link>
        <div className='flex gap-2 text-xs sm:text-sm'>
          {!ctx.isLoggedIn && <button>Login</button>}
          {ctx.isLoggedIn && <button>My Profile</button>}
          {!ctx.isLoggedIn && (
            <button className='bg-white text-black rounded-lg py-2 px-4'>
              Sign-up
            </button>
          )}
          {ctx.isLoggedIn && (
            <button className='bg-white text-black rounded-lg py-2 px-4'>
              Logout
            </button>
          )}
        </div>
      </section>
      <section className='flex justify-center items-center  text-center text-white '>
        <div className='mt-16 sm:mt-12'>
          {" "}
          <h2 className='text-2xl sm:text-[45px] mb-4'>Helping Others</h2>
          <h1 className='text-6xl sm:text-[80px] '>LIVE & TRAVEL</h1>
          <p className='text-sm sm:text-[20px] mt-4'>
            Special offers to suit your plan
          </p>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
