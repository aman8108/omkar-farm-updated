import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navebarrr from './Header/Navebarrr';
import Home from './Home/Home';
import AboutPages from './Zpages/AboutPages';
import ActivityPage from './Zpages/ActivityPage';
import AccomodationPage from './Zpages/AccomodationPage';
import ContectPage from './Zpages/ContectPage';
import GalleryPage from './Zpages/GalleryPage';
import Whatsappicon from './Whatsappicon/Whatsappicon';
import EventP from './Zpages/EventP';
import Amenities from './Amenities/Amenities';
// import Light from './Light/Light';








function App() {
  return (
    <>
    <Navebarrr/>
    <Whatsappicon/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about-us' element={<AboutPages/>}/>
      <Route path='/activitypage' element={<ActivityPage/>}/>
      <Route path='/eventpage' element={<EventP/>}/>
      <Route path='/accomodation' element={<AccomodationPage/>}/>
      <Route path='/gallery' element={<GalleryPage/>}/>
      <Route path='/contect-us' element={<ContectPage/>}/>
      {/* <Route path='/light' element={<Light />}/> */}
     
     
      
    </Routes>
    
    
    </>
  );
}

export default App;
