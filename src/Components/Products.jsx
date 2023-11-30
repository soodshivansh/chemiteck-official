import React from "react";
import p1 from '../Assets/valve.png'
import p2 from '../Assets/valve  automation.png'
import p3 from '../Assets/technology.png'

const About = () => {

    return(
        <div className="bg-[#e6e7e7] w-full p-20">
            <div className="text-black max-w-[800px] p-2 w-full mx-auto text-center flex flex-col justify-top">
                <h1 className="font-Arvo lg:text-5xl md:text-4xl sm:text-3xl text-3xl font-bold">Your Solution in Every Product.</h1>
            </div>
            <div className="font-Signika max-w-[1200px] w-full flex md:flex-row flex-col mx-auto gap-2 mt-20">
                <div className="md:w-[50%] w-[100%] h-60 bg-white hover:bg-[#415CAB] flex flex-col items-center justify-around mx-auto">
                    <img className="" src={p1} alt="/" />
                    <h1 className="lg:text-3xl sm:text-2xl text-xl font-bold text-center">Valve</h1>
                </div>
                <div className="md:w-[50%] w-[100%] h-60 bg-white hover:bg-[#415CAB] flex flex-col items-center justify-around mx-auto">
                    <img className="" src={p2} alt="/" />
                    <h1 className="lg:text-3xl sm:text-2xl text-xl font-bold text-center">Valve Automation</h1>
                </div>
                <div className="md:w-[50%] w-[100%] h-60 bg-white hover:bg-[#415CAB] flex flex-col items-center justify-around mx-auto">
                    <img className="" src={p3} alt="/" />
                    <h1 className="lg:text-3xl sm:text-2xl text-xl font-bold text-center">SS TC Fittings & Valves</h1>
                </div>
            </div>
        </div>

    )
}

export default About