import React, { useState } from "react";
import {AiOutlineArrowRight} from 'react-icons/ai'
import art1 from '../Assets/photos/Design-removebg-preview.png'
import art2 from '../Assets/photos/Design2-removebg-preview.png'




const Articles = () => {

    const [shift,useshift] = useState(true)

    const handleshift = () => {
        useshift(!shift);
        console.log(shift)
    }

    return(
        <div className="text-white flex flex-col h-screen lg:pt-28 lg:pr-28 lg:pl-36 pt-16 pr-16 pl-16 lg:gap-20 gap-10 w-full overflow-hidden">
            <div className="flex gap-14">
                <h1 className="font-Arvo lg:text-4xl md:text-4xl sm:text-3xl text-2xl font-bold">Stories & Articles</h1>
                <AiOutlineArrowRight className={`sm:hidden ease-linear duration-300 ${shift ? '' : 'rotate-180'}`} onClick={handleshift} size={25} />
            </div>
            <div className={`ease-in-out duration-200 transform ${shift ? '' : 'translate-x-[-70%]'}`}>
                <div className={"flex lg:gap-32 sm:gap-5 gap-8"}>
                    <div className="flex w-[18rem] flex-col gap-5">
                        <div className="buttonn lg:w-[18rem] lg:h-[18rem] w-[14rem] h-[14rem]">
                            <img className="lg:w-[16rem] lg:h-[16rem] w-[12rem] h-[12rem]" src={art1} alt="/" />
                        </div>
                        <div className="font-Signika flex flex-col mx-auto pl-5 pr-5 gap-5">
                            <h1>The Innovation of Angle Body Piston Actuated Valves by ALBI Fluid Controls</h1>
                            <p>Chemiteck</p>
                        </div>
                    </div>
                    <div className="flex w-[18rem] flex-col gap-5">
                        <div className="buttonn lg:w-[18rem] lg:h-[18rem] md:w-[14rem] md:h-[14rem] w-[14rem] h-[14rem]">
                            {/* <img className="lg:w-[16rem] lg:h-[16rem] w-[12rem] h-[12rem]" src={art2} alt="/" /> */}
                        </div>
                        <div className="font-Signika flex flex-col mx-auto pl-5 pr-5 gap-5">
                            <h1>The Innovation of Angle Body Piston Actuated Valves by ALBI Fluid Controls</h1>
                            <p>Chemiteck</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Articles