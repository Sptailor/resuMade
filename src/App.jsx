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
    <>
      <div className={`cv-builder ${isDarkTheme ? 'dark-theme' : ''}`} style={{
        background: isDarkTheme
          ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
          : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)',
        position: 'relative',
        minHeight: '100vh'
      }}>
        {/* Professional Glass Form Panel */}
      <div className={`left-panel ${isDarkTheme ? 'left-panel-dark' : 'left-panel-light'}`}>
        {/* Glassmorphic Form Header */}
        <div className={`header-container ${isDarkTheme ? 'header-dark' : 'header-light'}`}>
          {/* Enhanced Theme Toggle Button */}
          <button
            id="theme-toggle-button"
            onClick={() => setIsDarkTheme(!isDarkTheme)}
            className={`${isDarkTheme ? 'theme-toggle-dark' : 'theme-toggle-light'}`}
            title={isDarkTheme ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            <span className={`theme-toggle-emoji ${isDarkTheme ? 'theme-toggle-emoji-dark' : 'theme-toggle-emoji-light'}`}>
              {isDarkTheme ? '☀️' : '🌙'}
            </span>
          </button>

          <div>
            <h1 className={`main-title ${isDarkTheme ? 'main-title-dark' : 'main-title-light'}`}>
              Resume Builder
            </h1>

            <p className={`main-subtitle ${isDarkTheme ? 'main-subtitle-dark' : 'main-subtitle-light'}`}>
              Create your professional resume with ease
            </p>
          </div>
        </div>

        <div className="px-8 py-8">
          <div className="space-y-8">
            {/* Personal Information Section */}
            <section
              className="rounded-2xl p-8 transition-all duration-300 hover:shadow-xl"
              style={{
                background: isDarkTheme
                  ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(51, 65, 85, 0.6) 100%)'
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(248, 250, 252, 0.7) 100%)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: isDarkTheme
                  ? '1px solid rgba(148, 163, 184, 0.2)'
                  : '1px solid rgba(203, 213, 225, 0.3)',
                boxShadow: isDarkTheme
                  ? '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
              }}
            >
              <div className="mb-6">
                <h2
                  className="text-2xl font-semibold mb-2 tracking-tight"
                  style={{
                    color: isDarkTheme ? '#f1f5f9' : '#0f172a'
                  }}
                >
                  Personal Information
                </h2>
                <p
                  style={{
                    color: isDarkTheme ? 'rgba(203, 213, 225, 0.8)' : 'rgba(51, 65, 85, 0.7)',
                    fontSize: '16px'
                  }}
                >
                  Tell us about yourself
                </p>
              </div>
              <Person personData={personData} setPersonData={setPersonData} isDarkTheme={isDarkTheme} />
            </section>

            {/* Education Section */}
            <section
              className="rounded-2xl p-8 transition-all duration-300 hover:shadow-xl"
              style={{
                background: isDarkTheme
                  ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(51, 65, 85, 0.6) 100%)'
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(248, 250, 252, 0.7) 100%)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: isDarkTheme
                  ? '1px solid rgba(148, 163, 184, 0.2)'
                  : '1px solid rgba(203, 213, 225, 0.3)',
                boxShadow: isDarkTheme
                  ? '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
              }}
            >
              <div className="mb-6">
                <h2
                  className="text-2xl font-semibold mb-2 tracking-tight"
                  style={{
                    color: isDarkTheme ? '#f1f5f9' : '#0f172a'
                  }}
                >
                  Education
                </h2>
                <p
                  style={{
                    color: isDarkTheme ? 'rgba(203, 213, 225, 0.8)' : 'rgba(51, 65, 85, 0.7)',
                    fontSize: '16px'
                  }}
                >
                  Your academic background
                </p>
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
            <section
              className="rounded-2xl p-8 transition-all duration-300 hover:shadow-xl"
              style={{
                background: isDarkTheme
                  ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(51, 65, 85, 0.6) 100%)'
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(248, 250, 252, 0.7) 100%)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: isDarkTheme
                  ? '1px solid rgba(148, 163, 184, 0.2)'
                  : '1px solid rgba(203, 213, 225, 0.3)',
                boxShadow: isDarkTheme
                  ? '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
              }}
            >
              <div className="mb-6">
                <h2
                  className="text-2xl font-semibold mb-2 tracking-tight"
                  style={{
                    color: isDarkTheme ? '#f1f5f9' : '#0f172a'
                  }}
                >
                  Work Experience
                </h2>
                <p
                  style={{
                    color: isDarkTheme ? 'rgba(203, 213, 225, 0.8)' : 'rgba(51, 65, 85, 0.7)',
                    fontSize: '16px'
                  }}
                >
                  Your professional journey
                </p>
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
    </>
  );
}


export default App
