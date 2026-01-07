import p1 from '../Assets/Product images/1-removebg-preview.png'
import p2 from '../Assets/Product images/2-removebg-preview.png'
import p3 from '../Assets/Product images/3-removebg-preview.png'
import p4 from '../Assets/Product images/4-removebg-preview.png'
import p5 from '../Assets/Product images/5-removebg-preview.png'
import p6 from '../Assets/Product images/6-removebg-preview.png'
import p7 from '../Assets/Product images/7-removebg-preview.png'
import p8 from '../Assets/Product images/8-removebg-preview.png'
import p9 from '../Assets/Product images/9-removebg-preview.png'
import p10 from '../Assets/Product images/10-removebg-preview.png'
import p11 from '../Assets/Product images/11-removebg-preview.png'
import p12 from '../Assets/Product images/42-removebg-preview.png'
import p13 from '../Assets/Product images/43-removebg-preview.png'
import'./Navbar.scss'
import React from 'react'
import LefR from '../Animation/LefR'
import RightL from '../Animation/RightL'

const products = [
  {
    id: 1,
    image: p12,
    title: 'PTFE Sleaved Plug Valves',
    description: '<b>Galli&Cassina</b> make 2-way & 3-way PTFE sleaved plug valves',
  },
  {
    id: 2,
    image: p13,
    title: 'Lubricated Plug Valves',
    description: '<b>Galli&Cassina</b> make 2-way & 3-way lubricated plug valves',
  },
  {
    id: 3,
    image: p1,
    title: '1 pc ball valve S/E',
    description: '<b>ALBI</b> make Two Pc Ball Valves in CF8 and CF8M body/Ball, ends screwed to BSP (F) 1000WOG.',
  },
  {
    id: 4,
      image: p2,
      title: '3 pc ball valve S/E',
      description: 'PHBB make 3 Pc Ball valves in WCB/A105/CF8/CF8M body and SS316 Ball, PTFE seats, ends screwed or socketweld class 800# IBR/NIBR.',
    },
    {
      id: 5,
      image: p3,
      title: '2 pc ball valve flanged',
      description: 'PHBB make 2 Pc Ball valves in WCB/CF8/CF8M/CF3M body and SS316/SS316L Ball, RPTFE seats, ends Flanged to ANSI B 16.5 150#/300#/600#/900#.',
    },
    {
      id: 6,
      image: p4,
      title: '3 pc ball valve flanged',
      description: 'Flowmax make 3 Pc Ball valves in WCB/CF8/CF8M body and SS316 Ball, PTFE seats, ends flanged to class ANSI B 16.5 150#.',
    },
    {
      id: 7,
      image: p5,
      title: 'Butterfly valves      ',
      description: 'Wafer Type Butterfly Valves in Cast Iron/Cast Steel (WCB) body, CF8/DI disc, EPDM/NBR PN-10/PN-16 suitable for mounting between ANSI flanges.',
    },
    {
      id: 8,
      image: p6,
      title: 'Wafer check valve',
      description: 'Wager Type check valves in MS/CF8 body and MS/CF8 disc with EPDM sealing ring, suitable for mounting between ANSI flanges.',
    },
    {
      id: 9,
      image: p7,
      title: 'Disc check valve',
      description: 'Disc check valves in CF8/CF8M body and spring, suitable for mounting between ANSI flanges.',
    },
    {
      id: 10,
      image: p8,
      title: '3 way ball valve S/E',
      description: 'ALBI make 3 way L Port or T port ball valves in CF8/CF8M body and ball, PTFE seats, ends screwed (BSP f) 1000 WOG.',
    },
    {
      id: 11,
      image: p9,
      title: '3 way ball valve flanged',
      description: "PHBB make 3 way 'L' Port or 'T' port ball valves in WCB/CF8/CF8M body and CF8/CF8M ball, PTFE seats, ends flanged to ANSI B 16.5 150#/300#.",
    },
    {
      id: 12,
      image: p10,
      title: '3 way ball valve with TC end',
      description: 'ALBI make 3 way L Port or T port ball valves in CF8/CF8M body and ball, PTFE seats, endsTriclover ends (TC ends) 1000 WOG.',
    },
    {
      id: 13,
      image: p11,
      title: 'Needle valve',
      description: 'Needle valves in SS304/SS316 ends screwed BSP/NPT.',
    },
  ];

export default function Valve(){
    return(
        <div className='text-white flex flex-col items-center w-full mx-auto md:pl-10'>
            {products.map((product) => (
              
                <div className='flex items-center md:flex-row flex-col w-[80%]'>
                  <LefR>
                    <div
                      className='md:p-10 p-5 flex md:flex-col flex-row'>
                        <img className='w-64' src={product.image} alt='/' />
                        <div className='bg-[#415CAB] md:w-44 md:h-2 w-2 h-44'></div>
                    </div>
                    </LefR>
                    <RightL>
                    <div className='md:p-10 p-0 md:text-left text-center flex flex-col justify-start'>
                        <div className='md:flex-row flex items-center flex-row-reverse gap-6 w-full md:justify-start justify-center'>
                        <h1 className='font-Arvo text-[#090F1D] md:text-4xl sm:text-3xl text-2xl font-semibold md:py-6'>
                            {product.title}
                        </h1>
                        <div className='bg-[#415CAB] w-2 h-20'></div>
                        </div>
                        <p
                        dangerouslySetInnerHTML={{ __html: product.description }}
                        className='font-cabin sm:text-l text-base font-bold text-gray-500 md:p-0 p-5'
                        ></p>
                    </div>
                    </RightL>
                </div>
            ))}
        </div>
    )
}