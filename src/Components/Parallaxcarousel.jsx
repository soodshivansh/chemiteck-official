import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Navbar.scss'
import A from '../Assets/photos/Capture3-removebg.png'
import B from '../Assets/photos/Angle_valve-removebg-preview-removebg-preview.png'
import C from '../Assets/photos/Capture5-removebg.png'
import D from '../Assets/photos/Capture6-removebg.png'
import E from '../Assets/photos/Capture7-removebg.png'
import F from '../Assets/photos/p2-removebg.png'
import G from '../Assets/photos/Capture11.png'
import H from '../Assets/photos/Capture12.png'
import I from '../Assets/photos/Capture-removebg.png'
import J from '../Assets/photos/r1.png'
import K from '../Assets/photos/Capture11.png'

gsap.registerPlugin(ScrollTrigger);

const Parallaxcarousel = () => {

    const comp1 = useRef();

    useLayoutEffect(() => {
  
        gsap.to(comp1.current, {
            scrollTrigger: {
                trigger: ".rightshift",
                start: "top 94%",
                end: "bottom 100px",
                markers: false,
                scrub: true,
                toggleActions: "restart none none none"
            },
            x: 450,
            duration: 3,
          });
        
      }, []);

    const comp2 = useRef();

    useLayoutEffect(() => {
  
        gsap.to(comp2.current, {
            scrollTrigger: {
                trigger: ".leftshift",
                start: "top 125%",
                end: "bottom 100px",
                markers: false,
                scrub: true,
                toggleActions: "restart none none none"
            },
            x: -450,
            duration: 3,
          });
        
      }, []);

    return(
        <div className="overflow-hidden max-w-[2200px] w-full mx-auto -z-10">
            <div className="rightshift flex justify-center" ref={comp1}>
            <div className="flex w-[1960px] justify-center gap-5 mt-10 mb-28 -ml-[50%]">
                <div className="box border md:w-96 md:h-60 sm:w-64 sm:h-44 w-44 h-32">
                <img src={A} alt='/' className='w-[60%]'/>
                </div>
                <div className="box border md:w-96 md:h-60 sm:w-64 sm:h-44 w-44 h-32">
                <img className="w-[7rem]" src={B} alt='/'/>
                </div>
                <div className="box border md:w-96 md:h-60 sm:w-64 sm:h-44 w-44 h-32">
                <img src={C} alt='/' className='w-[60%]'/>
                </div>
                <div className="box border md:w-96 md:h-60 sm:w-64 sm:h-44 w-44 h-32">
                <img src={D} alt='/' className='w-[60%]'/>
                </div>
                <div className="box border md:w-96 md:h-60 sm:w-64 sm:h-44 w-44 h-32">
                <img src={E} alt='/' className='w-[60%]'/>
                </div>
                <div className="box border md:w-96 md:h-60 sm:w-64 sm:h-44 w-44 h-32">
                <img src={A} alt='/' className='w-[7rem]'/>
                </div>
            </div>
            </div>
            <div className="leftshift flex justify-center" ref={comp2}>
            <div className="flex w-[1960px] justify-start gap-5 -mt-24 mb-28 ml-[50%]">
                <div className="box border md:w-96 md:h-60 sm:w-64 sm:h-44 w-44 h-32">
                <img src={F} alt='/' className='w-[60%]'/>
                </div>
                <div className="box border md:w-96 md:h-60 sm:w-64 sm:h-44 w-44 h-32">
                <img src={G} alt='/' className='w-[60%]'/>
                </div>
                <div className="box border md:w-96 md:h-60 sm:w-64 sm:h-44 w-44 h-32">
                <img src={H} alt='/' className='w-[60%]'/>
                </div>
                <div className="box border md:w-96 md:h-60 sm:w-64 sm:h-44 w-44 h-32">
                <img src={I} alt='/' className='w-[60%]'/>
                </div>
                <div className="box border md:w-96 md:h-60 sm:w-64 sm:h-44 w-44 h-32">
                <img src={J} alt='/' className='w-[60%]'/>
                </div>
                <div className="box border md:w-96 md:h-60 sm:w-64 sm:h-44 w-44 h-32">
                <img src={K} alt='/' className='w-[60%]'/>
                </div>
            </div>
            </div>
        </div>

    )
}

export default Parallaxcarousel