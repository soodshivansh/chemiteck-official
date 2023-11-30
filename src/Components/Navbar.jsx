import React, {useState, useEffect} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import './Navbar.scss'
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
                    <h1 className="text-3xl font-bold text-[#415CAB]">Chemiteck.</h1>
                    <ul className="hidden md:flex items-center relative lg:left-16">
                        <li className="p-4 hover:border-b">Home</li>
                        <li className="p-4 hover:border-b">About</li>
                        <li className="p-4 hover:border-b">Products</li>
                        <li className="p-4 hover:border-b">Articles</li>
                        {/* <li className="p-4 hover:border-b">Solutions</li> */}
                        {/* <li className="p-4 hover:border-b">Services</li> */}
                        <li className="lg:hidden md:block hidden p-4 hover:border-b">Catalogue</li>
                        <li className="lg:hidden md:block hidden p-4 hover:border-b">Contact</li>
                    </ul>
                    <div className="hidden lg:flex gap-3">
                        <button>Catalogue</button>
                        <button>Contact</button>
                    </div>
                    <div onClick={handlenav} className="block md:hidden">
                        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                    </div>
                </div>
            </Headroom>
            <div className={!nav ? 'fixed text-white left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-50' : 'fixed left-[-100%] top-0 ease-in-out duration-500 h-full z-50'}>
                <h1 className="w-full text-3xl font-bold text-[#415CAB] mx-4 my-8">Chemiteck.</h1>
                <ul className="uppercase p-4">
                    <li className="p-4 border-b border-gray-600 ">Home</li>
                    <li className="p-4 border-b border-gray-600 ">About</li>
                    <li className="p-4 border-b border-gray-600 ">Products</li>
                    <li className="p-4 border-b border-gray-600 ">Articles</li>
                    <div className="flex flex-col mx-auto gap-5 mt-10">
                        <button>Catalogue</button>
                        <button>Contact</button>
                    </div>
                </ul>
            </div>
        </>
    )
}

export default Navbar