import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Footer, Header, Features, Scroll } from './containers';
import { VRJam, NBAApp, Turtle, Java, Other, Resume, AOA } from './containers';
import { Project, Navbar, ChatBot } from './components';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<>
            <Header />
            <Features />
            <ChatBot />
            <Project />
            <Scroll />
          </>} />
          <Route path="/vrjam" element={<VRJam />} />
          <Route path="/nbaapp" element={<NBAApp />} />
          <Route path="/turtle" element={<Turtle />} />
          <Route path="/java" element={<Java />} />
          <Route path="/other" element={<Other />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<AOA />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
