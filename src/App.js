import Main from './Components/Main';
import Header from './Components/Header';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import HealthProtocol from './Components/MainComponents/HealthProtocol';
import RegGuide from './Components/MainComponents/RegGuide';
export default function App() {
  return (
    <div className = "w-full " id = "Main">
      <Header />
      <div className = "container w-full">
        <Routes>
          <Route path = "/" element = {<Main />} />
          <Route path = "/health-protocol" element = {<HealthProtocol />} />
          <Route path = "/reg-guide" element = {<RegGuide />} />
        </Routes>
      </div>
    </div>
    
    
    
  )
}

