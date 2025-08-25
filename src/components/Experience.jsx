
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

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
    <div>
      {/* Simple Form */}
      <div>
        <div>
          <label htmlFor="title">Job Title:</label>
          <Input
            id="title"
            type="text"
            placeholder="Software Engineer"
            value={currentExperience.title}
            onChange={(e) => setCurrentExperience({ ...currentExperience, title: e.target.value })}
            className="border border-purple-300 focus:border-purple-500"
          />
        </div>
        
        <div>
          <label htmlFor="company">Company:</label>
          <Input
            id="company"
            type="text"
            placeholder="Company Name"
            value={currentExperience.company}
            onChange={(e) => setCurrentExperience({ ...currentExperience, company: e.target.value })}
            className="border border-purple-300 focus:border-purple-500"
          />
        </div>
        
        <div>
          <label htmlFor="years">Years:</label>
          <Input
            id="years"
            type="text"
            placeholder="2021-2024"
            value={currentExperience.years}
            onChange={(e) => setCurrentExperience({ ...currentExperience, years: e.target.value })}
            className="border border-purple-300 focus:border-purple-500"
          />
        </div>
        
        <Button 
          onClick={editingIndex !== null ? updateExperience : addExperience}
          className="bg-purple-500 hover:bg-purple-600 text-white"
        >
          {editingIndex !== null ? "Update" : "Add"} Experience
        </Button>
      </div>

      {/* Dropdown List */}
      {experienceList.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h4 style={{ color: '#333', marginBottom: '10px' }}>Experience List:</h4>
          <div style={{ border: '2px solid #9333ea', borderRadius: '4px', maxHeight: '200px', overflowY: 'auto' }}>
            {experienceList.map((experience, index) => (
              <div key={index} style={{ 
                padding: '10px', 
                backgroundColor: index % 2 === 0 ? '#faf5ff' : '#ffffff',
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                borderBottom: index < experienceList.length - 1 ? '1px solid #e5e7eb' : 'none'
              }}>
                <span style={{ flex: 1 }}>{experience.title} - {experience.company} ({experience.years})</span>
                <div style={{ display: 'flex', gap: '5px' }}>
                  <Button
                    onClick={() => editExperience(index)}
                    size="sm"
                    className="bg-green-500 hover:bg-green-600 text-white"
                    style={{ fontSize: '12px', padding: '4px 8px' }}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => deleteExperience(index)}
                    size="sm"
                    className="bg-red-500 hover:bg-red-600 text-white"
                    style={{ fontSize: '12px', padding: '4px 8px' }}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Experience;
