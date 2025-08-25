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
      {/* Clean Form Panel */}
      <div className="left-panel bg-white border-r border-slate-200 overflow-y-auto">
        {/* Form Header */}
        <div className="sticky top-0 bg-white border-b border-slate-200 px-8 py-6 z-10">
          <h1 className="text-2xl font-bold text-slate-900 mb-1">Resume Builder</h1>
          <p className="text-slate-600 text-sm">Fill in your details to create a professional resume</p>
        </div>

        <div className="px-8 py-8">
          <form className="max-w-3xl space-y-12">
            {/* Personal Information Section */}
            <section>
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-slate-900 mb-2">Personal Information</h2>
                <p className="text-sm text-slate-600">Basic details about yourself</p>
              </div>
              <Person personData={personData} setPersonData={setPersonData} />
            </section>

            {/* Education Section */}
            <section>
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-slate-900 mb-2">Education</h2>
                <p className="text-sm text-slate-600">Your academic background and qualifications</p>
              </div>
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
            </section>

            {/* Work Experience Section */}
            <section>
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-slate-900 mb-2">Work Experience</h2>
                <p className="text-sm text-slate-600">Your professional work history</p>
              </div>
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
            </section>
          </form>
        </div>
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
