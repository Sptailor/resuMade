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
      {/* Clean Form */}
      <div style={{ 
        background: 'linear-gradient(145deg, #dbeafe 0%, #bfdbfe 100%)', 
        padding: '28px', 
        borderRadius: '16px', 
        border: '1px solid #93c5fd',
        marginBottom: '24px',
        boxShadow: '0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06)'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginBottom: '20px',
          gap: '24px'
        }}>
          <label htmlFor="degree" style={{ 
            minWidth: '140px', 
            fontWeight: '700', 
            color: '#1e40af',
            fontSize: '15px',
            textShadow: '0 1px 2px rgba(30, 64, 175, 0.2)'
          }}>
            Degree *
          </label>
          <Input
            id="degree"
            type="text"
            onChange={(e) => setCurrentEducation({ ...currentEducation, degree: e.target.value })}
            value={currentEducation.degree}
            placeholder="Bachelor of Science"
            className="flex-1 px-4 py-3 bg-white border-2 border-blue-300 rounded-xl focus:border-blue-600 focus:outline-none transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-lg"
          />
        </div>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginBottom: '20px',
          gap: '24px'
        }}>
          <label htmlFor="institution" style={{ 
            minWidth: '140px', 
            fontWeight: '700', 
            color: '#1e40af',
            fontSize: '15px',
            textShadow: '0 1px 2px rgba(30, 64, 175, 0.2)'
          }}>
            Institution *
          </label>
          <Input
            id="institution"
            type="text"
            onChange={(e) => setCurrentEducation({ ...currentEducation, institution: e.target.value })}
            value={currentEducation.institution}
            placeholder="University Name"
            className="flex-1 px-4 py-3 bg-white border-2 border-blue-300 rounded-xl focus:border-blue-600 focus:outline-none transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-lg"
          />
        </div>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginBottom: '24px',
          gap: '24px'
        }}>
          <label htmlFor="year" style={{ 
            minWidth: '140px', 
            fontWeight: '700', 
            color: '#1e40af',
            fontSize: '15px',
            textShadow: '0 1px 2px rgba(30, 64, 175, 0.2)'
          }}>
            Year *
          </label>
          <Input
            id="year"
            type="text"
            onChange={(e) => setCurrentEducation({ ...currentEducation, year: e.target.value })}
            value={currentEducation.year}
            placeholder="2024"
            className="flex-1 px-4 py-3 bg-white border-2 border-blue-300 rounded-xl focus:border-blue-600 focus:outline-none transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-lg"
          />
        </div>
        
        <Button 
          onClick={editingIndex !== null ? updateEducation : addEducation}
          className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
        >
          {editingIndex !== null ? "✏️ Update Education" : "➕ Add Education"}
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