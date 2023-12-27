import p29 from '../Assets/Product images/29-removebg-preview.png'
import p30 from '../Assets/Product images/30-removebg-preview.png'
import p31 from '../Assets/Product images/31-removebg-preview.png'
import p32 from '../Assets/Product images/32-removebg-preview.png'
import p33 from '../Assets/Product images/33-removebg-preview.png'
import p34 from '../Assets/Product images/34-removebg-preview.png'
import p35 from '../Assets/Product images/35-removebg-preview.png'
import p36 from '../Assets/Product images/36-removebg-preview.png'


import'./Navbar.scss'

const products = [
    {
      id: 1,
      image: p29,
      title: 'Flow Control Valve',
      description: '',
    },
    {
      id: 2,
      image: p30,
      title: 'Dairy Clamp with Rubber',
      description: '',
    },
    {
      id: 3,
      image: p31,
      title: 'Ferrule Blind',
      description: '',
    },
    {
      id: 4,
      image: p32,
      title: 'TC Ends Butterfly Valves',
      description: '',
    },
    {
      id: 5,
      image: p33,
      title: 'Dairy Pipe Holder 1',
      description: '',
    },
    {
      id: 6,
      image: p34,
      title: 'Dairy Pipe Holder 2',
      description: '',
    },
    {
      id: 7,
      image: p35,
      title: 'Sample Valve Threaded with SMS Union',
      description: '',
    },
    {
      id: 8,
      image: p36,
      title: 'SMS / DIN / IDF Union',
      description: '',
    },
  ];

export default function SSTCFittingsValves(){
    return(
        <div className='text-white flex flex-col items-center w-full mx-auto md:pl-10'>
            {products.map((product) => (
                <div key={product.id} className='flex items-center md:flex-row flex-col w-[80%]'>
                    <div className='md:p-10 p-5 flex md:flex-col flex-row'>
                        <img className='w-60' src={product.image} alt='/' />
                        <div className='bg-[#415CAB] md:w-44 md:h-2 w-2 h-44'></div>
                    </div>
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
                </div>
            ))}
        </div>
    )
}