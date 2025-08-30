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
    month: "",
    year: "",
    major: "",
  });
  const [currentExperience, setCurrentExperience] = useState({
    title: "",
    company: "",
    years: "",
    description: "",
  });
  const [editingEducationIndex, setEditingEducationIndex] = useState(null);
  const [editingExperienceIndex, setEditingExperienceIndex] = useState(null);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const addEducation = () => {
    if (currentEducation.degree && currentEducation.institution && currentEducation.month && currentEducation.year) {
      setEducationList([...educationList, currentEducation]);
      setCurrentEducation({ degree: "", institution: "", month: "", year: "", major: "" });
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
    setCurrentEducation({ degree: "", institution: "", month: "", year: "", major: "" });
    setEditingEducationIndex(null);
  };

  const deleteEducation = (index) => {
    setEducationList(educationList.filter((_, i) => i !== index));
  };

  const addExperience = () => {
    if (currentExperience.title && currentExperience.company && currentExperience.years) {
      setExperienceList([...experienceList, currentExperience]);
      setCurrentExperience({ title: "", company: "", years: "", description: "" });
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
    setCurrentExperience({ title: "", company: "", years: "", description: "" });
    setEditingExperienceIndex(null);
  };

  const deleteExperience = (index) => {
    setExperienceList(experienceList.filter((_, i) => i !== index));
  };

  return (
    <div className={`cv-builder ${isDarkTheme ? 'dark-theme' : ''}`} style={{
      backgroundColor: isDarkTheme ? '#111827' : '#f5f7fa',
      position: 'relative'
    }}>
      {/* Theme Toggle Button - Fixed in corner */}
      <button 
        onClick={() => setIsDarkTheme(!isDarkTheme)}
        className="fixed top-6 right-6 z-50 rounded-xl shadow-xl font-semibold transition-all duration-300 hover:scale-110 flex items-center justify-center text-sm border-2"
        style={{
          width: '50px',
          height: '50px',
          minWidth: '50px',
          minHeight: '50px',
          backgroundColor: isDarkTheme ? '#f3f4f6' : '#1f2937',
          color: isDarkTheme ? '#1f2937' : '#f3f4f6',
          borderColor: isDarkTheme ? '#e5e7eb' : '#374151'
        }}
        title={isDarkTheme ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        {isDarkTheme ? '☀️' : '🌙'}
      </button>
      {/* Clean Form Panel */}
      <div className={`left-panel border-r overflow-y-auto ${isDarkTheme ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
        {/* Form Header */}
        <div className={`sticky top-0 backdrop-blur-sm border-b px-8 py-6 z-10 shadow-sm ${isDarkTheme ? 'bg-gray-800/95 border-gray-700' : 'bg-white/95 border-gray-200'}`}>
          <div className="mb-2">
            <h1 className={`text-3xl font-bold tracking-tight ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>Resume Builder</h1>
          </div>
          <p className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>Create your professional resume with ease</p>
        </div>

        <div className="px-8 py-8">
          <div className="max-w-2xl mx-auto space-y-10">
            {/* Personal Information Section */}
            <section className={`rounded-2xl shadow-sm border p-6 ${isDarkTheme ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200/50'}`}>
              <div className="mb-6">
                <h2 className={`text-xl font-semibold mb-2 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>Personal Information</h2>
                <p className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>Tell us about yourself</p>
              </div>
              <Person personData={personData} setPersonData={setPersonData} isDarkTheme={isDarkTheme} />
            </section>

            {/* Education Section */}
            <section className={`rounded-2xl shadow-sm border p-6 ${isDarkTheme ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200/50'}`}>
              <div className="mb-6">
                <h2 className={`text-xl font-semibold mb-2 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>Education</h2>
                <p className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>Your academic background</p>
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
                isDarkTheme={isDarkTheme}
              />
            </section>

            {/* Work Experience Section */}
            <section className={`rounded-2xl shadow-sm border p-6 ${isDarkTheme ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200/50'}`}>
              <div className="mb-6">
                <h2 className={`text-xl font-semibold mb-2 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>Work Experience</h2>
                <p className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>Your professional journey</p>
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
                isDarkTheme={isDarkTheme}
              />
            </section>
          </div>
        </div>
      </div>

      <div className={`right-panel ${isDarkTheme ? 'dark' : ''}`} style={{
        backgroundColor: isDarkTheme ? '#1f2937' : '#fff',
        color: isDarkTheme ? '#f3f4f6' : '#222',
        borderTop: isDarkTheme ? '1px solid #374151' : '1px solid #ccc',
        borderRight: isDarkTheme ? '1px solid #374151' : '1px solid #ccc',
        borderBottom: isDarkTheme ? '1px solid #374151' : '1px solid #ccc',
        borderLeft: '4px solid #3b82f6'
      }}>
        <h2 style={{ 
          color: isDarkTheme ? '#f3f4f6' : '#222',
          borderBottomColor: isDarkTheme ? '#3b82f6' : '#3b82f6'
        }}>{personData.name}</h2>
        <div id="contactInfo" style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          gap: '30px', 
          flexWrap: 'wrap',
          marginBottom: '20px'
        }}>
          <p style={{ color: isDarkTheme ? '#d1d5db' : '#444', margin: 0 }}>Email: {personData.email}</p>
          <p style={{ color: isDarkTheme ? '#d1d5db' : '#444', margin: 0 }}>Phone: {personData.phone}</p>
        </div>
        <div id="educationContainer">
          <h3 style={{ color: isDarkTheme ? '#e5e7eb' : '#333' }}>Education</h3>
          {educationList.map((education, index) => (
            <div key={index} className="education-display" style={{ marginBottom: '15px' }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'baseline',
                marginBottom: '5px'
              }}>
                <p style={{ color: isDarkTheme ? '#d1d5db' : '#444', fontWeight: '600', margin: 0 }}>
                  {education.institution}
                </p>
                <p style={{ color: isDarkTheme ? '#d1d5db' : '#444', fontSize: '14px', fontStyle: 'italic', margin: 0 }}>
                  {education.month} {education.year}
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <p style={{ color: isDarkTheme ? '#d1d5db' : '#444', margin: 0 }}>
                  {education.degree}
                </p>
                {education.major && (
                  <p style={{ color: isDarkTheme ? '#d1d5db' : '#444', margin: 0, fontStyle: 'italic' }}>
                    - {education.major}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div id="workExperienceContainer">
          <h3 style={{ color: isDarkTheme ? '#e5e7eb' : '#333' }}>Work Experience</h3>
          {experienceList.map((experience, index) => (
            <div key={index} className="experience-display" style={{ marginBottom: '15px' }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'baseline',
                marginBottom: '5px'
              }}>
                <p style={{ color: isDarkTheme ? '#d1d5db' : '#444', fontWeight: '600', margin: 0 }}>
                  {experience.title} - {experience.company}
                </p>
                <p style={{ color: isDarkTheme ? '#d1d5db' : '#444', fontSize: '14px', fontStyle: 'italic', margin: 0 }}>
                  {experience.years}
                </p>
              </div>
              {experience.description && (
                <p style={{ 
                  color: isDarkTheme ? '#d1d5db' : '#444', 
                  margin: 0,
                  fontSize: '14px',
                  lineHeight: '1.4',
                  paddingTop: '3px',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word',
                  maxWidth: '100%',
                  textAlign: 'left'
                }}>
                  {experience.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default App
