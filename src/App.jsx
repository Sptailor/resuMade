import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { User, GraduationCap, Briefcase } from "lucide-react"
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
    <div className="cv-builder relative">
      {/* Background decorative elements for left panel */}
      <div className="left-panel relative space-y-8 p-8 bg-gradient-to-br from-slate-50 via-blue-50/20 to-purple-50/30 overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute top-10 -left-10 w-32 h-32 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 -right-10 w-40 h-40 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-green-200/25 to-blue-200/25 rounded-full blur-xl"></div>
        
        {/* Header */}
        <div className="relative text-center mb-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/30">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">✨</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Resume Builder
            </h1>
          </div>
          <p className="text-slate-600 mt-3 text-sm">Create your professional resume</p>
        </div>

        <Card className="group relative shadow-2xl border-0 bg-white/70 backdrop-blur-xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
          <CardHeader className="relative pb-6 pt-8">
            <CardTitle className="flex items-center gap-4 text-2xl font-bold text-slate-800">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <div>Personal Details</div>
                <p className="text-sm font-normal text-slate-500 mt-1">Tell us about yourself</p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="relative">
            <Person personData={personData} setPersonData={setPersonData} />
          </CardContent>
        </Card>

        <Card className="group relative shadow-2xl border-0 bg-white/70 backdrop-blur-xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-green-500/5 to-teal-500/5"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500"></div>
          <CardHeader className="relative pb-6 pt-8">
            <CardTitle className="flex items-center gap-4 text-2xl font-bold text-slate-800">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <div>Education</div>
                <p className="text-sm font-normal text-slate-500 mt-1">Add your academic achievements</p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="relative">
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
          </CardContent>
        </Card>

        <Card className="group relative shadow-2xl border-0 bg-white/70 backdrop-blur-xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-purple-500/5 to-indigo-500/5"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500"></div>
          <CardHeader className="relative pb-6 pt-8">
            <CardTitle className="flex items-center gap-4 text-2xl font-bold text-slate-800">
              <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <div>
                <div>Work Experience</div>
                <p className="text-sm font-normal text-slate-500 mt-1">Showcase your professional journey</p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="relative">
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
          </CardContent>
        </Card>
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
