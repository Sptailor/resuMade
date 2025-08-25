import '../styles/Education.css';
function Education({
  currentEducation, 
  setCurrentEducation,
  educationList,
  addEducation,
  editEducation,
  updateEducation,
  deleteEducation,
  editingIndex
}) {

  return (
    <>
      <div className="education-form">
        <input
          type="text"
          onChange={(e) => setCurrentEducation({ ...currentEducation, degree: e.target.value })}
          value={currentEducation.degree}
          placeholder="Degree"
        />
        <input
          type="text"
          onChange={(e) => setCurrentEducation({ ...currentEducation, institution: e.target.value })}
          value={currentEducation.institution}
          placeholder="Institution"
        />
        <input
          type="text"
          onChange={(e) => setCurrentEducation({ ...currentEducation, year: e.target.value })}
          value={currentEducation.year}
          placeholder="Year of Graduation"
        />
        <button onClick={editingIndex !== null ? updateEducation : addEducation}>
          {editingIndex !== null ? 'Update' : 'Add'} Education
        </button>
      </div>

      <div className="education-list">
        {educationList.map((education, index) => (
          <div key={index} className="education-item">
            <div>
              <strong>{education.degree}</strong> at {education.institution} ({education.year})
            </div>
            <div>
              <button onClick={() => editEducation(index)}>Edit</button>
              <button onClick={() => deleteEducation(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Education;