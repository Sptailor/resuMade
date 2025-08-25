import { useState } from 'react'

import './App.css'
import Person from './components/Person.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
function App() {
  
const [personData, setPersonData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [educationList, setEducationList] = useState([]);
  const [experienceList, setExperienceList] = useState([]);
  const [currentEducation, setCurrentEducation] = useState({
    degree: "",
    institution: "",
    year: "",
  });
  const [currentExperience, setCurrentExperience] = useState({
    title: "",
    company: "",
    years: "",
  });
  const [editingEducationIndex, setEditingEducationIndex] = useState(null);
  const [editingExperienceIndex, setEditingExperienceIndex] = useState(null);

  const addEducation = () => {
    if (currentEducation.degree || currentEducation.institution || currentEducation.year) {
      setEducationList([...educationList, currentEducation]);
      setCurrentEducation({ degree: "", institution: "", year: "" });
    }
  };

  const editEducation = (index) => {
    setCurrentEducation(educationList[index]);
    setEditingEducationIndex(index);
  };

  const updateEducation = () => {
    const updatedList = [...educationList];
    updatedList[editingEducationIndex] = currentEducation;
    setEducationList(updatedList);
    setCurrentEducation({ degree: "", institution: "", year: "" });
    setEditingEducationIndex(null);
  };

  const deleteEducation = (index) => {
    setEducationList(educationList.filter((_, i) => i !== index));
  };

  const addExperience = () => {
    if (currentExperience.title || currentExperience.company || currentExperience.years) {
      setExperienceList([...experienceList, currentExperience]);
      setCurrentExperience({ title: "", company: "", years: "" });
    }
  };

  const editExperience = (index) => {
    setCurrentExperience(experienceList[index]);
    setEditingExperienceIndex(index);
  };

  const updateExperience = () => {
    const updatedList = [...experienceList];
    updatedList[editingExperienceIndex] = currentExperience;
    setExperienceList(updatedList);
    setCurrentExperience({ title: "", company: "", years: "" });
    setEditingExperienceIndex(null);
  };

  const deleteExperience = (index) => {
    setExperienceList(experienceList.filter((_, i) => i !== index));
  };

  return (
    <div className="cv-builder">
      <div className="left-panel">
        <h2>Personal Details</h2>
        <Person personData={personData} setPersonData={setPersonData} />
        <h2>Education</h2>
        <Education 
          currentEducation={currentEducation} 
          setCurrentEducation={setCurrentEducation}
          educationList={educationList}
          addEducation={addEducation}
          editEducation={editEducation}
          updateEducation={updateEducation}
          deleteEducation={deleteEducation}
          editingIndex={editingEducationIndex}
        />
        <h2>Work Experience</h2>
        <Experience 
          currentExperience={currentExperience}
          setCurrentExperience={setCurrentExperience}
          experienceList={experienceList}
          addExperience={addExperience}
          editExperience={editExperience}
          updateExperience={updateExperience}
          deleteExperience={deleteExperience}
          editingIndex={editingExperienceIndex}
        />
      </div>
      <div className="right-panel">
        <h2>{personData.name}</h2>
        <div id="contactInfo">
          <p>Email: {personData.email}</p>
          <p>Phone: {personData.phone}</p>
        </div>
        <div id="educationContainer">
          <h3>Education</h3>
          {educationList.map((education, index) => (
            <div key={index} className="education-display">
              <div className="education-line">
                <p>{education.institution}</p> <p>{education.year}</p>
              </div>
              <p>{education.degree}</p>
            </div>
          ))}
        </div>
        <div id="workExperienceContainer">
          <h3>Work Experience</h3>
          {experienceList.map((experience, index) => (
            <div key={index} className="experience-display">
              <p><strong>{experience.title}</strong></p>
              <p>{experience.company}</p>
              <p>{experience.years}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default App
