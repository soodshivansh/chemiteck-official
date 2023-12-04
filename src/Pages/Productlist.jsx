import React, { useState } from 'react';
import Footer from "../Components/Footer";
import Navbar from '../Components/Navbar';
import Valve from '../Components/Valve';
import ValveAutomation from '../Components/ValveAutomation';
import SSTCFittingsAndValves from '../Components/SSTCFittings&Valves';
import '../Components/Navbar.scss'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import list from '../Components/list.json'

export default function Productlist() {
  const [selectedValue, setSelectedValue] = useState('value-1');

  const renderComponent = () => {
    switch (selectedValue) {
      case 'value-1':
        return <Valve />;
      case 'value-2':
        return <ValveAutomation />;
      case 'value-3':
        return <SSTCFittingsAndValves />;
      default:
        return null;
    }
  };

  const [isOpen,setIsOpen] = useState(false)
  const [text,settext] = useState('Valve');

  const changetext = (name,i) => {
    settext(name);
    setIsOpen(false);
    console.log(i)
  }

  return (
    <div>
      <Navbar />
      <div className=" md:block hidden text-white w-full mx-auto gap-10 p-10 -z-10">
        <div className="radio-input w-full mx-auto">
          <label>
            <input
              type="radio"
              id="value-1"
              name="value-radio"
              value="value-1"
              checked={selectedValue === 'value-1'}
              onChange={() => setSelectedValue('value-1')}
            />
            <span className="font-cabin text-xl">Valve</span>
          </label>
          <label>
            <input
              type="radio"
              id="value-2"
              name="value-radio"
              value="value-2"
              checked={selectedValue === 'value-2'}
              onChange={() => setSelectedValue('value-2')}
            />
            <span className="font-cabin text-xl">Valve Automation</span>
          </label>
          <label>
            <input
              type="radio"
              id="value-3"
              name="value-radio"
              value="value-3"
              checked={selectedValue === 'value-3'}
              onChange={() => setSelectedValue('value-3')}
            />
            <span className="font-cabin text-xl">SS TC Fittings & Valves</span>
          </label>
          <span className="selection"></span>
        </div>
      </div>

      <div className='md:hidden relative flex flex-col items-center p-10 w-full h-[340px] rounded-lg'>
          <button onClick={() => setIsOpen((prev) => !prev)} className='bg-[#414CAB] p-4 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white'>
              {text}
              {!isOpen ? (
                <AiOutlineCaretDown className='h-8' />
              ):(
                <AiOutlineCaretUp className='h-8' />
              )}
          </button>
          {isOpen && 
            <div className='bg-[#414CAB] absolute top-32 flex flex-col items-start rounded-lg p-2 w-[80%]'>
            {list.map((item, i) => (
              <div
                onClick={() => {setSelectedValue(`value-${i+1}`);changetext(item.value,i)}}
                className='flex w-full justify-between p-4 hover:bg-[#1a2544] cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4'
                key={i}
              >
                <h3 className='font-bold'>
                  {item.value}
                </h3>
              </div>
            ))}
          </div>          
          }
      </div>

      <div className={`flex md:-mt-0 -mt-48 duration-200 ${isOpen ? '-mt-0' : ''}`}>
        {renderComponent()}
      </div>

      <Footer />
    </div>
  );
}
