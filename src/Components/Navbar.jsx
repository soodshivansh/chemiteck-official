import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import './Navbar.scss';
import Headroom from "react-headroom";

const Navbar = () => {

    const [nav,usenav] = useState(true)

    const handlenav = () => {
        usenav(!nav)
    }

    return(
        <>
            <Headroom>
                <div className={`font-hind flex justify-between items-center h-20 max-w-[1240] mx-auto px-4 text-white bg-[#090f1d] border-b`} id="navbar">
                    <h1 className="text-3xl font-bold text-[#415CAB]"><NavLink to="/">Chemiteck.</NavLink></h1>
                    <ul className="hidden md:flex items-center relative lg:left-16">
                        <NavLink to="/"><li className="p-4 hover:border-b">Home</li></NavLink>
                        <a href="/#about"><li className="p-4 hover:border-b">About</li></a>
                        <NavLink to="/products"><li className="p-4 hover:border-b">Products</li></NavLink>
                        <a href="/#articles"><li className="p-4 hover:border-b">Resources</li></a>
                        {/* <li className="p-4 hover:border-b">Solutions</li> */}
                        {/* <li className="p-4 hover:border-b">Services</li> */}
                        <NavLink to="/catalogues" className="lg:hidden md:block hidden p-4 hover:border-b"><li>Catalogue</li></NavLink>
                        <NavLink to="/contactus"><li className="lg:hidden md:block hidden p-4 hover:border-b">Contact</li></NavLink>
                    </ul>
                    <div className="hidden lg:flex gap-3">
                        <NavLink to="/catalogues" className="navbarbutton" ><button>Catalogue</button></NavLink>
                        <NavLink to="/contactus"><button className="navbarbutton">Contact</button></NavLink>
                    </div>
                    <div onClick={handlenav} className="block md:hidden">
                        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                    </div>
                </div>
            </Headroom>
            <div className={!nav ? 'font-hind fixed text-white left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-50' : 'font-hind fixed left-[-100%] top-0 ease-in-out duration-500 h-full z-50'}>
                <h1 className="w-full text-3xl font-bold text-[#415CAB] mx-4 my-8">Chemiteck.</h1>
                <ul className="uppercase p-4">
                    <NavLink to="/"><li className="p-4 border-b border-gray-600 ">Home</li></NavLink>
                    <a href="/#about"><li className="p-4 border-b border-gray-600 " onClick={() => usenav(!nav)}>About</li></a>
                    <NavLink to="/products"><li className="p-4 border-b border-gray-600 ">Products</li></NavLink>
                    <a href="/#articles"><li className="p-4 border-b border-gray-600 " onClick={() => usenav(!nav)}>Resources</li></a>
                    <div className="flex flex-col mx-auto gap-5 mt-10">
                        <NavLink to="/catalogues" className="navbarbutton w-full"><button>Catalogue</button></NavLink>
                        <NavLink to="/contactus"><button className="navbarbutton w-full">Contact</button></NavLink>
                    </div>
                </ul>
            </div>
        </>
    )
}

export default Navbar