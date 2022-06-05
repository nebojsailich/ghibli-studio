import React from "react";
import Logo from "../../assets/img/ghibli.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=' h-[60px] drop-shadow-md bg-orange-400 '>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center '>
          <div>
            <img src={Logo} className='w-10 h-15 ml-10 ' alt='Logo' />
          </div>
          <h1 className=' font-body xl:text-3xl md:text-2xl sm:text-2xl xs:text-1xl  font-bold font-sans ml-2 text-white hover:font-bold '>
            Ghibli Studio
          </h1>
        </div>
        <nav className=' mr-8 xl:text-2xl md:text-2xl sm:text-2xl xs:text-1xl   font-body text-white font-medium'>
          <ul className='flex flex-row content-between '>
            <li>
              <NavLink
                to='/'
                style={({ isActive }) =>
                  isActive ? { color: "purple" } : { color: "white" }
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <Link
                className=' focus:text-purple-900 hover:text-red-800'
                to='/history'
              >
                History
              </Link>
            </li>
            <li>
              <Link
                className=' focus:text-purple-800 hover:text-red-800'
                to='/movies'
              >
                Movies
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
