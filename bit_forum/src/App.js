import React from 'react';
import './App.css';
import Header from './components/Header/Header';

import {
  BrowserRouter as Router,
  Route,
  Routes, 
} from "react-router-dom";

import Question from './components/Add-Question/Question';
import StackOverflow from './components/StackOverflow';
import ViewQuestion from "./components/ViewQuestion";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
        <Route path="/add-question" element={<Question/>} />
        <Route path="/question" element={<ViewQuestion/>} />
          <Route path="/" element={<StackOverflow/ > }/>
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
