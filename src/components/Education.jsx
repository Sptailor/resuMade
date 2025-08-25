import { useState } from "react";

import '../styles/Education.css';
function Education({educationData, setEducationData}) {
  

  const handleDegreeChange = (e) => {

    const newEducation ={ ...educationData, degree: e.target.value };
    setEducationData(newEducation);
  };

  const handleInstitutionChange = (e) => {
    const newEducation = { ...educationData, institution: e.target.value };
    setEducationData(newEducation);
  };

  const handleYearChange = (e) => {
    const newEducation = { ...educationData, year: e.target.value };
    setEducationData(newEducation);
  };

  return (
    <>
 
      <h1>{educationData.degree}</h1>
      <h2>{educationData.institution}</h2>
      <h3>{educationData.year}</h3>
      <input
        type="text"
        onChange={handleDegreeChange}
        value={educationData.degree}
        placeholder="Degree"
      />
      <input
        type="text"
        onChange={handleInstitutionChange}
        value={educationData.institution}
        placeholder="Institution"
      />
      <input
        type="text"
        onChange={handleYearChange}
        value={educationData.year}
        placeholder="Year of Graduation"
      />
   
    </>
  );
}
export default Education;