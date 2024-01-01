import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled, {keyframes, css} from 'styled-components';
import './Navbar.scss'
import A from '../Assets/photos/Capture3-removebg.png'
import B from '../Assets/Product images/Capture4-removebg.png'
import C from '../Assets/photos/Capture5-removebg.png'
import D from '../Assets/photos/Capture6-removebg.png'
import E from '../Assets/photos/Capture7-removebg.png'
import F from '../Assets/photos/p2-removebg.png'
import G from '../Assets/photos/Capture11.png'
import H from '../Assets/photos/Capture12.png'
import I from '../Assets/photos/Capture-removebg.png'
import J from '../Assets/photos/r1.png'
import K from '../Assets/photos/Capture11.png'
import L from '../Assets/Product images/38-removebg-preview.png'
import M from '../Assets/Product images/39-removebg-preview.png'
import N from '../Assets/Product images/40-removebg-preview.png'
import FadeIn from '../Animation/FadeIn';

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

      const row1 = [A, B, C, D, E ,N ,L];
      const row2 = [ F, G, H, I, J, K, M];

    return(
        <FadeIn>
        <div className="overflow-hidden max-w-[2200px] w-full mx-auto -z-10">
            <div className="rightshift flex justify-center">
                <div className="flex justify-center mt-10 mb-28">
                    <div className='hidden w-[1960px] md:flex gap-5 -ml-[30%]' ref={comp1}>
                        {
                        row1.map((item) => (
                            <div className="box border rounded-xl w-80 h-60">
                                <img src={item} alt='/' className='w-[50%]'/>
                            </div>
                        ))
                        }
                    </div>
                    <div className='flex md:hidden'>
                        <div className='Wrapper w-[700px]'>
                            <div className='Marquee flex gap-5'>
                                <MarqueeGroup className='flex gap-5'>
                                    {
                                        row1.map(el => (
                                            <div className='flex items-center justify-center bg-[#212e56] rounded-xl w-44 h-40 border overflow-hidden'>
                                                <img src={el} className='w-[70%]' />
                                            </div>
                                        ))
                                    }
                                </MarqueeGroup>
                                <MarqueeGroup className='flex gap-5'>
                                    {
                                        row1.map(el => (
                                            <div className='flex items-center justify-center bg-[#212e56] rounded-xl w-44 h-40 border overflow-hidden'>
                                                <img src={el} className='w-[70%]' />
                                            </div>
                                        ))
                                    }
                                </MarqueeGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="leftshift flex justify-center">
                <div className="flex w-[700px] justify-start gap-5 -mt-24 mb-28">
                    <div className='hidden md:flex gap-5 -ml-[50%]' ref={comp2}>
                        {
                        row2.map((item) => (
                            <div className="box border rounded-xl md:w-80 md:h-60 sm:w-64 sm:h-44 w-44 h-32 overflow-hidden">
                                <img src={item} alt='/' className='w-[50%]'/>
                            </div>
                        ))
                        }
                    </div>
                    <div className='flex md:hidden'>
                        <div className='Wrapper w-[700px]'>
                            <div className='Marquee flex gap-5 ml-24'>
                                <MarqueeGroup className='flex gap-5'>
                                    {
                                        row2.map(el => (
                                            <div className='flex items-center justify-center bg-[#212e56] rounded-xl w-44 h-40 border overflow-hidden'>
                                                <img src={el} className='w-[70%]' />
                                            </div>
                                        ))
                                    }
                                </MarqueeGroup>
                                <MarqueeGroup className='flex gap-5'>
                                    {
                                        row2.map(el => (
                                            <div className='flex items-center justify-center bg-[#212e56] rounded-xl w-44 h-40 border overflow-hidden'>
                                                <img src={el} className='w-[70%]' />
                                            </div>
                                        ))
                                    }
                                </MarqueeGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </FadeIn>
    )
}

const scrollX = keyframes`
from{
    left: translateX(0);
}
to{
    transform: translateX(-100%);
}
`;

const MarqueeGroup = styled.div`
animation: ${scrollX} 15s linear infinite
`

export default Parallaxcarousel