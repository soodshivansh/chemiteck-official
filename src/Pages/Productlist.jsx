import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Valve from '../Components/Valve';
import ValveAutomation from '../Components/ValveAutomation';
import SSTCFittingsAndValves from '../Components/SSTCFittings&Valves';

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

  return (
    <div>
      <Navbar />
      <div className="text-white w-full mx-auto flex gap-10 p-10 -z-10">
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

      {renderComponent()}
    </div>
  );
}
