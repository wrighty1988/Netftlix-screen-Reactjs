import React from 'react';
import './App.css';
import Box from './components/Box';

function App() {
  return (
    <div>
      <h1>Frequently asked questions</h1>

      <div className="container">
        <Box question="What is Netflix ?"/>
        <Box question="How much does Netflix cost ?"/>
        <Box question="How can i watch ?"/>
        <Box question="How can i cancel ?"/>
        <Box question="What can i watch on Netflix ?"/>
        <Box question="How does the free trial work ?"/>
      </div>
      <div>
        <a  href='#' className="button" >TRY 30 DAYS FREE</a>
      </div>
    </div>
  );
}

export default App;
