import { useState } from 'react'

import './App.css'
import Person from './components/Person.jsx'
import Education from './components/Education.jsx'
function App() {
  
const [personData, setPersonData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [educationData, setEducationData] = useState({
    degree: "",
    institution: "",
    year: "",
  });

  return (
    <div className="cv-builder">
      <div className="left-panel">
        <h2>Personal Details</h2>
        <Person personData={personData} setPersonData={setPersonData} />
        <h2>Education</h2>
        <Education educationData={educationData} setEducationData={setEducationData} />
      </div>
      <div className="right-panel">
        <h2>{personData.name}</h2>
        <div id="contactInfo">
          <p>Email: {personData.email}</p>
          <p>Phone: {personData.phone}</p>
        </div>
        <div id="educationContainer">

          <h3>Education</h3>
          <span id="educationLine">
          <p>{educationData.institution}</p> <p>{educationData.year}</p>
          </span>
          <p>{educationData.degree}</p>

          <p></p>
        </div>
      </div>
    </div>
  );
}


export default App
