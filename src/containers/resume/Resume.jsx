import React from 'react';
import './resume.css';

const Resume = () => {
  return (
    <div className="pdf-container">
      <h1>Resume</h1>
      <div className="resume-container">
        <embed src={require('./David-Clarke-CV.pdf')} type="application/pdf" width="100%" height="2400px" />
      </div>
    </div>
  );
};

export default Resume;


