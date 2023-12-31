import React from "react";
import logo from '../Assets/photos/albi-logo-removebg-preview.png'
import part1 from '../Assets/photos/logo2-removebg.png'
import part2 from '../Assets/photos/ec-logo.png'
import part3 from '../Assets/photos/flowmaxlogo.png'
import part4 from '../Assets/photos/ztech-control-system-90x90.png'
import FadeIn from "../Animation/FadeIn";

const About = () => {

    return(
        <FadeIn>
        <div id="about" className="w-full flex justify-center flex-col items-center md:p-10 p-5 bg-[#EFF9F0]">
            <div className="bg-[#090f1d] rounded-[50px] w-full justify-center flex flex-col lg:p-28 sm:p-14 p-7">
                <div className="w-full lg:gap-0 gap-10 flex lg:flex-row flex-col items-center justify-center mx-auto">
                    <div className="text-center lg:text-left">
                        <img className="lg:w-[80%] md:w-2/3 sm:w-3/5 w-4/5 mx-auto" src={logo} alt="/" />
                    </div>
                    <div className="text-white lg:text-left text-center lg:w-[50%]">
                        <h1 className="font-Arvo lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold border-b pb-4">About Our Company</h1>
                        <p className="font-Signika sm:text-xl pt-10"><b>Chemiteck Engineering Enterprises</b>, an Authorised Channel partner of M/s PHBB Valves Pvt. Limited, M/s Engineers Combine and M/s Flowmax Engineering in North India.</p>
                        <br />
                        <p className="font-Signika sm:text-xl"><b>PHBB</b> specialised in special services ball & Butterfly valves with exotic metallurgies, complying to most modern & latest technology as well as compliance to latest edition international standards, meeting all your specified requirements in terms of quality, performance & delivery, fully equipped to meet all your Valve and Valve Automation related demands.</p>
                    </div>
                </div>

                <div className="flex flex-col justify-start items-start pt-28 gap-10">
                    <div>
                        <h1 className="font-Arvo text-white lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold border-b pb-5">Our Partners</h1>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-4 xmd:grid-cols-3 sm:grid-cols-2 gap-10">
                        <a href="https://phbbvalves.com/" target="_blank">
                        <div className="card lg:w-[280px] lg:h-[200px] w-[250px] h-[150px]">
                            <img src={part1} alt="/" />
                            <div className="card__content flex items-center justify-center">
                                <p className="font-Signika card__title">PHBB</p>
                            </div>
                        </div>
                        </a>
                        <div className="card lg:w-[280px] lg:h-[200px] w-[250px] h-[150px]">
                            <img src={part2} alt="/" />
                            <div className="card__content flex items-center justify-center">
                                <p className="font-Signika card__title">Engineers Combine</p>
                            </div>
                        </div>
                        <div className="card lg:w-[280px] lg:h-[200px] w-[250px] h-[150px]">
                            <img src={part3} alt="/" />
                            <div className="card__content flex items-center justify-center">
                                <p className="font-Signika card__title">Flowmax Valves</p>
                            </div>
                        </div>
                        <div className="card lg:w-[280px] lg:h-[200px] w-[250px] h-[150px]">
                            <img src={part4} alt="/" />
                            <div className="card__content flex items-center justify-center">
                                <p className="font-Signika card__title">Ztek Flowmeters</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </FadeIn>
    )
}

export default About