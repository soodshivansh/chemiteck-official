import './App.scss';          
import Home from './Pages/Home'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Productlist from './Pages/Productlist';
import Valve from './Components/Valve';
import ValvAutomation from './Components/ValveAutomation';
import SSTCFittingsValves from './Components/SSTCFittings&Valves';
import Contact from './Pages/Contact';
import Progressicon from './Components/Progressicon';
import Cataloguepage from './Pages/Cataloguepage';
import { Analytics } from '@vercel/analytics/react';

export default function App() {

  return (

    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route index path='/' element={<Home />} />
          <Route path='/products' element={<Productlist />} />
          <Route path='/catalogues' element={<Cataloguepage />} />
          <Route path='/contactus' element={<Contact />} />
          <Route path='/products/valve' element={<Valve />} />
          <Route path='/products/Valve-Automation' element={<ValvAutomation />} />
          <Route path='/products/SS-TC-Fittings-Valves' element={<SSTCFittingsValves />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}


