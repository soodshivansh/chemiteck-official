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
            <div className="text-white flex md:flex-row flex-col justify-center w-full p-10 gap-20">
                <div className="text-left flex flex-col">
                    <h1 className="font-Arvo md:text-4xl sm:text-2xl text-2xl font-semibold">GET IN TOUCH</h1>
                    <div className="bg-[#415cab] w-80 h-2 mt-5 mb-5"></div>
                    <div>
                        <div className='flex gap-5 p-5'>
                            <i className="fa-solid fa-location-dot fa-xl relative top-2"></i>
                            <p>RTG-82, Shipra Royal Tower market, Indirapuram, Ghaziabad, UP - 201014</p>
                        </div>
                        <div className='flex gap-5 p-5'>
                            <i className="fa-solid fa-phone fa-xl relative top-2"></i>
                            <p>+91 9560391635 ,  +91 9289381979</p>
                        </div>
                        <div className='flex gap-5 p-5'>
                            <i className="fa-solid fa-envelope fa-xl relative top-2"></i>
                            <p>sales@chemiteck.in , chemiteck1675@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <form className="" ref={form} onSubmit={sendEmail}>
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
                    </form>
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