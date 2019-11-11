import React from 'react';
import logo from './logo.svg';
import './App.css';
import CourseEditor from "./components/CourseEditor" 

function App() {
  return (
    <div className="container">
        <CourseEditor findAllItems={() => {}}/>
    </div>
  );
}

export default App;
