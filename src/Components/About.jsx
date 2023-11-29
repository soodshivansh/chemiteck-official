import React from "react";
import logo from '../Assets/photos/albi-logo-removebg-preview.png'

const About = () => {

    return(
        <div className="w-full flex justify-center flex-col mx-auto md:p-10 p-5 bg-[#e6e7e7]">
            <div className="bg-[#090f1d] rounded-[50px] w-full justify-center flex flex-col lg:p-28 p-14">
                <div className="w-full lg:gap-0 gap-10 flex lg:flex-row flex-col items-center justify-center mx-auto">
                    <div className="text-center lg:text-left">
                        <img className="lg:w-[80%] md:w-2/3 w-4/5 mx-auto" src={logo} alt="/" />
                    </div>
                    <div className="text-white lg:text-left text-center lg:w-[50%]">
                        <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold border-b pb-4">About Our Company</h1>
                        <p className="pt-10">Chemiteck Engineering Enterprises, an Authorised Channel partner of M/s PHBB Valves Pvt. Limited, M/s Engineers Combine and M/s Flowmax Engineering in North India.</p>
                        <br />
                        <p><b>PHBB</b> specialised in special services ball & Butterfly valves with exotic metallurgies, complying to most modern & latest technology as well as compliance to latest edition international standards, meeting all your specified requirements in terms of quality, performance & delivery, fully equipped to meet all your Valve and Valve Automation related demands.</p>
                    </div>
                </div>

                <div className="flex flex-col justify-start items-start pt-28 gap-10">
                    <div>
                        <h1 className="text-white lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold border-b pb-5">Our Partners</h1>
                    </div>
                    <div className="flex sm:flex-row flex-col gap-10">
                        <div className="card lg:w-[300px] lg:h-[200px] w-[250px] h-[150px]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
                            <div className="card__content">
                                <p className="card__title">Card Title</p>
                                <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                            </div>
                        </div>
                        <div className="card lg:w-[300px] lg:h-[200px] w-[250px] h-[150px]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
                            <div className="card__content">
                                <p className="card__title">Card Title</p>
                                <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    )
}

export default About