
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './comp/Homepage';
import IoTPage from './comp/Iot';
import Alit from './comp/Alit';
import AI from './comp/Ai';
import Business from './comp/Buss';
import Bi from './comp/bi';
import Bigdata from './comp/big';
import Testing from './comp/testing';
import Eai from './comp/Eai';
import Delivery from './comp/dil';
import Coust from './comp/coust';
import Dev from './comp/Devops';
import Ms from './comp/Microsoft';
import Line from './comp/Line';
import Webdevelop from './comp/web';
import Mobile from './comp/Mobile';
import AboutCompany from './comp/About';
import Chous from './comp/Chose';
import ContactUs from './comp/Cont';
import TRAINING from './comp/Trg';
import Client from './comp/Client';
// import About from './comp/About';

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/Iot' element={<IoTPage />} />
      <Route path='/analytics_bigdata' element={< Alit/>} />
      <Route path='/Cloud Computing' element={< AI/>} />
      <Route path='/business_intelligence' element={< Business/>} />
      <Route path='/bi_analytics' element={< Bi/>} />
      <Route path='/bi_analytics_data' element={< Bigdata/>} />
      <Route path='/testing' element={< Testing/>} />
      <Route path='/eai' element={< Eai/>} />
      <Route path='/Delivery' element={< Delivery/>} />
      <Route path='/Customized Services' element={< Coust/>} />
      <Route path='/Devops' element={< Dev/>} />
      <Route path='/Microsoft_Solutions' element={< Ms/>} />
      <Route path='/lineof_business' element={< Line/>} />
      <Route path='/webdevelop' element={< Webdevelop/>} />
      <Route path='/Mobiledevelopment' element={< Mobile/>} />
      <Route path='/aboutus' element={< AboutCompany/>} />
      <Route path='/why_we' element={< Chous/>} />
      <Route path='/contact' element={< ContactUs/>} />
      <Route path='/TRAINING' element={< TRAINING/>} />
      <Route path='/Client' element={< Client/>} />




      {/* <Route path='/about' element={<About />} /> */}

      

      

   
    </Routes>
  </Router>
  );
}

export default App;
