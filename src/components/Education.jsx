import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

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
    <div>
      {/* Simple Form */}
      <div>
        <div>
          <label htmlFor="degree">Degree:</label>
          <Input
            id="degree"
            type="text"
            onChange={(e) => setCurrentEducation({ ...currentEducation, degree: e.target.value })}
            value={currentEducation.degree}
            placeholder="Bachelor of Science"
            className="border border-blue-300 focus:border-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="institution">Institution:</label>
          <Input
            id="institution"
            type="text"
            onChange={(e) => setCurrentEducation({ ...currentEducation, institution: e.target.value })}
            value={currentEducation.institution}
            placeholder="University Name"
            className="border border-blue-300 focus:border-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="year">Year:</label>
          <Input
            id="year"
            type="text"
            onChange={(e) => setCurrentEducation({ ...currentEducation, year: e.target.value })}
            value={currentEducation.year}
            placeholder="2024"
            className="border border-blue-300 focus:border-blue-500"
          />
        </div>
        
        <Button 
          onClick={editingIndex !== null ? updateEducation : addEducation}
          className="bg-blue-500 hover:bg-blue-600 text-white"
        >
          {editingIndex !== null ? "Update" : "Add"} Education
        </Button>
      </div>

      {/* Dropdown List */}
      {educationList.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h4 style={{ color: '#333', marginBottom: '10px' }}>Education List:</h4>
          <div style={{ border: '2px solid #3b82f6', borderRadius: '4px', maxHeight: '200px', overflowY: 'auto' }}>
            {educationList.map((education, index) => (
              <div key={index} style={{ 
                padding: '10px', 
                backgroundColor: index % 2 === 0 ? '#f0f9ff' : '#ffffff',
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                borderBottom: index < educationList.length - 1 ? '1px solid #e5e7eb' : 'none'
              }}>
                <span style={{ flex: 1 }}>{education.degree} - {education.institution} ({education.year})</span>
                <div style={{ display: 'flex', gap: '5px' }}>
                  <Button
                    onClick={() => editEducation(index)}
                    size="sm"
                    className="bg-green-500 hover:bg-green-600 text-white"
                    style={{ fontSize: '12px', padding: '4px 8px' }}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => deleteEducation(index)}
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
export default Education;