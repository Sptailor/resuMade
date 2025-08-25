
import '../styles/Experience.css';

function Experience({
  currentExperience,
  setCurrentExperience,
  experienceList,
  addExperience,
  editExperience,
  updateExperience,
  deleteExperience,
  editingIndex
}) {
  return (
    <>
      <div className="experience-form">
        <input
          type="text"
          placeholder="Job Title"
          value={currentExperience.title}
          onChange={(e) => setCurrentExperience({ ...currentExperience, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Company"
          value={currentExperience.company}
          onChange={(e) => setCurrentExperience({ ...currentExperience, company: e.target.value })}
        />
        <input
          type="text"
          placeholder="Years"
          value={currentExperience.years}
          onChange={(e) => setCurrentExperience({ ...currentExperience, years: e.target.value })}
        />
        <button onClick={editingIndex !== null ? updateExperience : addExperience}>
          {editingIndex !== null ? 'Update' : 'Add'} Experience
        </button>
      </div>

      <div className="experience-list">
        {experienceList.map((experience, index) => (
          <div key={index} className="experience-item">
            <div>
              <strong>{experience.title}</strong> at {experience.company} ({experience.years})
            </div>
            <div>
              <button onClick={() => editExperience(index)}>Edit</button>
              <button onClick={() => deleteExperience(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Experience;
