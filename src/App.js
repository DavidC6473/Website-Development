import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Footer, Header, Features } from './containers';
import { VRJam, NBAApp, Turtle, Java } from './containers';
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
          </>} />
          <Route path="/vrjam" element={<VRJam />} />
          <Route path="/nbaapp" element={<NBAApp />} />
          <Route path="/turtle" element={<Turtle />} />
          <Route path="/java" element={<Java />} />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
