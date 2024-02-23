import { useEffect, useState } from 'react';
import Layout from './components/Layout';
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
      <PhotoProvider>
        <Header />
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Body/>} />
          <Route path="stories" element={<Stories/>} />
          <Route path="features" element={<Features/>} />
          <Route path="pricing" element={<Pricing/>} />
        </Route>
      </Routes>
      <Footer/>
      </PhotoProvider>
  );
}

export default App;
