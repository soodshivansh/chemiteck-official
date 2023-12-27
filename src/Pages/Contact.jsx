import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer"
import '../Components/Navbar.scss'
import { NavLink, useLocation } from 'react-router-dom';

export default function Contact (){

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const form = useRef();
    const [popupMessage, setPopupMessage] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
 
        emailjs.sendForm('service_lmyu80h', 'template_zcmpkwr', form.current, 'ToteC8De5aLWnOSVP')
        .then((result) => {
            console.log(result.text);
            console.log("message sent");
            setPopupMessage("Mail sent successfully!");
            form.current.reset();
        }, (error) => {
            console.log(error.text);
            setPopupMessage("An error occurred. Please try again later.");
        });
    };

    const closePopup = () => {
        setPopupMessage(null);
    };


    return(
        <div>
            <Navbar />
            <div className="text-white flex md:flex-row flex-col justify-center w-full p-10 gap-20 mt-16 mb-5">
                <div className="text-left flex flex-col">
                    <h1 className="font-Arvo text-[#090F1D] md:text-4xl sm:text-2xl text-2xl font-semibold">GET IN TOUCH</h1>
                    <div className="bg-[#415cab] w-80 h-2 mt-5 mb-5"></div>
                    <div className='text-[#415cab]'>
                        <div className='flex gap-5 p-5'>
                            <i className="fa-solid fa-location-dot fa-xl relative top-2 text-[#090F1D]"></i>
                            <p className='text-lg'>RTG-82, Shipra Royal Tower market, Indirapuram, Ghaziabad, UP - 201014</p>
                        </div>
                        <div className='flex gap-5 p-5'>
                            <i className="fa-solid fa-phone fa-xl relative top-2 text-[#090F1D]"></i>
                            <p className='text-lg'>+91 9560391635 ,  +91 9289381979</p>
                        </div>
                        <div className='flex gap-5 p-5'>
                            <i className="fa-solid fa-envelope fa-xl relative top-2 text-[#090F1D]"></i>
                            <p className='text-lg'>sales@chemiteck.in , chemiteck1675@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    {/* <form className="" ref={form} onSubmit={sendEmail}>
                        <div className="grid gap-6" id="form">
                            <div className="w-full flex gap-3">
                                <input className="text-black capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-black" type="text" placeholder="First Name" id="First-Name" name="First-Name" required min="0" max="15" />
                                <input className="text-black p-3 capitalize shadow-2xl  glass w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]" type="text" placeholder="Last Name" id="Last-Name" name="Last-Name" min="0" max="15" />
                            </div>
                            <div className="grid gap-6 w-full">
                                <input className="text-black p-3 shadow-2xl  glass w-full placeholder:text-black outline-none focus:border-solid border-[#035ec5] focus:border-[1px]" type="Email" placeholder="Email" id="Email" name="email" required min="0" max="30" />
                            </div>
                            <div className="flex gap-3">
                                <textarea className="text-black p-3 glass shadow-2xl  w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]" type="text" placeholder="Message" name="message" required min="0" max="200" rows="5" />
                            </div>
                            <button className="outline-none glass shadow-2xl  w-full p-3  bg-[#ffffff42] hover:border-[#035ec5] hover:border-solid hover:border-[1px]  hover:text-[#035ec5] font-bold" type="submit" value="Send">Submit</button>
                        </div>
                    </form> */}


                    <div class="w-96 rounded-xl bg-[#090F1D]">
                        <form className="" ref={form} onSubmit={sendEmail}>
                            <div class="flex flex-col gap-2 p-8">
                                <p class="text-center text-3xl text-gray-300 mb-4">Enquire</p>
                                <input class="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800" type="text" placeholder="Full Name" name="Full-Name" required min="0" max="15" />
                                <input class="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800" type="Email" placeholder="Email" id="Email" name="email" required min="0" max="40" />
                                <input class="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800" type="text" placeholder="Message" name="message" required min="0" max="200" rows="5" />
                                <label class="flex cursor-pointer items-center justify-between p-1 text-slate-400">
                                Accept terms of use
                                <div class="relative inline-block">
                                    <input class="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-gary-400 checked:border-green-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2" type="checkbox" />
                                    <span class="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-slate-600 transition-all duration-200 peer-checked:left-7 peer-checked:bg-green-300"></span>
                                </div>
                                </label>
                                <button class="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95" type="submit" value="Send">Submit</button>
                            </div>
                        </form>
                    </div>


                    {popupMessage && (
                        <div className="popup">
                            <div className="popup-content">
                                <span className="close" onClick={closePopup}>&times;</span>
                                <p>{popupMessage}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="relative p-5 h-[50vh] w-[100%] overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.7067536462932!2d77.37438527547978!3d28.6385497256615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce57118fc3e19%3A0xe11686805a18e5a1!2sRoyale%20Tower!5e0!3m2!1sen!2sin!4v1701701757100!5m2!1sen!2sin" width="100%" height="100%" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div> 
            <Footer />
        </div>
    )
}