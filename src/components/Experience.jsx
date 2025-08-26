
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
      {/* Clean Form */}
      <div style={{ 
        background: 'linear-gradient(145deg, #f3e8ff 0%, #e9d5ff 100%)', 
        padding: '28px', 
        borderRadius: '16px', 
        border: '1px solid #c4b5fd',
        marginBottom: '24px',
        boxShadow: '0 4px 6px -1px rgba(124, 58, 237, 0.1), 0 2px 4px -1px rgba(124, 58, 237, 0.06)'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginBottom: '20px',
          gap: '24px'
        }}>
          <label htmlFor="title" style={{ 
            minWidth: '140px', 
            fontWeight: '700', 
            color: '#6d28d9',
            fontSize: '15px',
            textShadow: '0 1px 2px rgba(109, 40, 217, 0.2)'
          }}>
            Job Title *
          </label>
          <Input
            id="title"
            type="text"
            placeholder="Software Engineer"
            value={currentExperience.title}
            onChange={(e) => setCurrentExperience({ ...currentExperience, title: e.target.value })}
            className="flex-1 px-4 py-3 bg-white border-2 border-purple-300 rounded-xl focus:border-purple-600 focus:outline-none transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-lg"
          />
        </div>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginBottom: '20px',
          gap: '24px'
        }}>
          <label htmlFor="company" style={{ 
            minWidth: '140px', 
            fontWeight: '700', 
            color: '#6d28d9',
            fontSize: '15px',
            textShadow: '0 1px 2px rgba(109, 40, 217, 0.2)'
          }}>
            Company *
          </label>
          <Input
            id="company"
            type="text"
            placeholder="Company Name"
            value={currentExperience.company}
            onChange={(e) => setCurrentExperience({ ...currentExperience, company: e.target.value })}
            className="flex-1 px-4 py-3 bg-white border-2 border-purple-300 rounded-xl focus:border-purple-600 focus:outline-none transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-lg"
          />
        </div>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginBottom: '24px',
          gap: '24px'
        }}>
          <label htmlFor="years" style={{ 
            minWidth: '140px', 
            fontWeight: '700', 
            color: '#6d28d9',
            fontSize: '15px',
            textShadow: '0 1px 2px rgba(109, 40, 217, 0.2)'
          }}>
            Years *
          </label>
          <Input
            id="years"
            type="text"
            placeholder="2021-2024"
            value={currentExperience.years}
            onChange={(e) => setCurrentExperience({ ...currentExperience, years: e.target.value })}
            className="flex-1 px-4 py-3 bg-white border-2 border-purple-300 rounded-xl focus:border-purple-600 focus:outline-none transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-lg"
          />
        </div>
        
        <Button 
          onClick={editingIndex !== null ? updateExperience : addExperience}
          className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
        >
          {editingIndex !== null ? "✏️ Update Experience" : "💼 Add Experience"}
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
