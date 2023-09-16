import { useEffect, useState } from 'react';
import Header from './components/Header';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Body from './components/Body';
import Footer from './components/Footer'
import Stories from './components/Stories';
import { PhotoProvider } from './PhotoContext/PhotoContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {



  return (
   <Router>
     <div className="App">
      <PhotoProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Body/>}/>
        <Route path='/stories' element={<Stories/>}/>
        <Route path='/features' element={<Features/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
      </Routes>
      <Footer />
      </PhotoProvider>
    </div>
   </Router>
  );
}

export default App;
