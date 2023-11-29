import React from "react";
import animationdata from '../Assets/Animation - 1701010131495.json'
import Lottie from "lottie-react";

const Markers = () => {
    return (
        <div className="text-[#273767] bg-[#e6e7e7] w-full mx-auto p-10">
            <div className="max-w-[1300px] w-full mx-auto flex flex-col md:flex-row justify-center items-center lg:gap-20">
                <div className="flex flex-col gap-5 text-center md:text-left">
                    <h1 className="lg:text-3xl md:text-2xl sm:text-2xl text-xl font-bold p-4 border-b border-gray-600">Discover Our Range of Flow Level Measurement Field Instruments</h1>
                    <h1 className="lg:text-3xl md:text-2xl sm:text-2xl text-xl font-bold p-4 border-b border-gray-600">Experience the Best in Valve Solutions</h1>
                    <h1 className="lg:text-3xl md:text-2xl sm:text-2xl text-xl font-bold p-4">Discover a Wide Range of Instrument Air & Process Filters</h1>
                </div>
                <div className="w-full md:w-2/3 lg:w-1/2 text-center">
                    <Lottie className="w-full md:w-4/5 lg:w-full mx-auto" animationData={animationdata} />
                </div>
            </div>
        </div>
    );
}

export default Markers;
