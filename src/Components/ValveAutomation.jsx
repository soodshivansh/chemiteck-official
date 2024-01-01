import LefR from '../Animation/LefR'
import RightL from '../Animation/RightL'
import p13 from '../Assets/Product images/13-removebg-preview.png'
import p14 from '../Assets/Product images/14-removebg-preview.png'
import p15 from '../Assets/Product images/15-removebg-preview.png'
import p16 from '../Assets/Product images/16-removebg-preview.png'
import p17 from '../Assets/Product images/17-removebg-preview.png'
import p18 from '../Assets/Product images/18-removebg-preview.png'
import p19 from '../Assets/Product images/19-removebg-preview.png'
import p20 from '../Assets/Product images/20-removebg-preview.png'
import p21 from '../Assets/Product images/21-removebg-preview.png'
import p22 from '../Assets/Product images/22-removebg-preview.png'
import p23 from '../Assets/Product images/23-removebg-preview.png'
import p24 from '../Assets/Product images/24-removebg-preview.png'
import p25 from '../Assets/Product images/25-removebg-preview.png'
import p26 from '../Assets/Product images/26-removebg-preview.png'
import p27 from '../Assets/Product images/27-removebg-preview.png'
import p28 from '../Assets/Product images/28-removebg-preview.png'

import'./Navbar.scss'

const products = [
    {
      id: 1,
      image: p13,
      title: 'Pneumatic actuators',
      description: '"PHBB" make Pneumatic rotary Rack & Pinion actuators for qtr turn valves.',
    },
    {
      id: 2,
      image: p14,
      title: 'Ball valve with Pneumatic actuators',
      description: '2 Pc / 3 Pc Ball Valves in screwed/socketweld ends connections with Pneumatic Rotary actuators',
    },
    {
      id: 3,
      image: p15,
      title: 'Ball valve flanged with Pneumatic actuators',
      description: '2 Pc / 3 Pc Ball Valves in Flanged end connections with Pneumatic Rotary actuators',
    },
    {
      id: 4,
      image: p16,
      title: 'Ball valve flanged with Pneumatic actuators',
      description: '3 way or 4 way Multiport ball valves with pneumatic or elctric actuators',
    },
    {
      id: 5,
      image: p17,
      title: 'Butterfly valve with Pneumatic actuators',
      description: 'Butterfly valves with pneumatic actuators',
    },
    {
      id: 6,
      image: p18,
      title: 'Shut down valves',
      description: 'Shutdown Ball Valves with Spring Return single acting actuators.',
    },
    {
      id: 7,
      image: p19,
      title: 'Butterfly with electric actuator',
      description: 'Butterfly Valves with Electric actuators.',
    },
    {
      id: 8,
      image: p20,
      title: 'Butterfly control valve',
      description: 'Butterfly Control Valves.',
    },
    {
      id: 9,
      image: p21,
      title: 'Actuated Butterfly valve with TC ends',
      description: 'Butterfly On - Off / Control Butterfly Valves for Dairy / Beverages industry.',
    },
    {
      id: 10,
      image: p22,
      title: 'Angle Piston Valves S/E',
      description: 'ALBI make angle body piston actuated valves with Single acting or double acting linear actuators. Body Material shall be CF8 or CF8M. Ends Screwed to BSP (F).',
    },
    {
      id: 11,
      image: p23,
      title: 'Angle Piston Valves Flanged end',
      description: 'ALBI make angle body piston actuated valves with Single acting or double acting linear actuators. Body Material shall be CF8 or CF8M. Ends Flanged 150#.',
    },
    {
      id: 12,
      image: p24,
      title: 'Angle Piston Valves TC ends',
      description: 'ALBI make angle body piston actuated valves with Single acting or double acting linear actuators. Body Material shall be CF8 or CF8M. Ends Triclover ends (TC ends).',
    },
    {
      id: 13,
      image: p25,
      title: 'Timer Drain Valves',
      description: 'Timer drain valves in Brass body with inbuilt strainer. Both opening time and closing time adjustable. Suitable for automatic drain of water / condensdate from Driers / compressors/ Air storage vessels.',
    },
    {
      id: 14,
      image: p26,
      title: 'Pulse jet Valves',
      description: 'Pulse jet solenoid valves for bag filrers.',
    },
    {
      id: 15,
      image: p27,
      title: 'Namur Solenoid Valves',
      description: '5/2 way - 3/2 way convertible NAMUR solenoid valves in aluminium body for double acting and single acting rotary pneumatic actuators.',
    },
    {
      id: 16,
      image: p28,
      title: 'Flow Meters',
      description: 'Turbine Flow Meters',
    },
  ];

export default function ValveAutomation(){
    return(
        <div className='text-white flex flex-col items-center w-full mx-auto md:pl-10'>
            {products.map((product) => (
                <div key={product.id} className='flex items-center md:flex-row flex-col w-[80%]'>
                  <LefR>
                    <div className='md:p-10 p-5 flex md:flex-col flex-row'>
                        <img className='w-60' src={product.image} alt='/' />
                        <div className='bg-[#415CAB] md:w-44 md:h-2 w-2 h-44'></div>
                    </div>
                    </LefR>
                    <RightL>
                    <div className='md:p-10 md:text-left text-center flex flex-col justify-start'>
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