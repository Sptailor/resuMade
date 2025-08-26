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
  editingIndex,
  isDarkTheme
}) {
  return (
    <div>
      {/* Clean Form */}
      <div style={{ 
        background: isDarkTheme 
          ? 'linear-gradient(145deg, #581c87 0%, #6b21a8 100%)' 
          : 'linear-gradient(145deg, #f3e8ff 0%, #e9d5ff 100%)', 
        padding: '24px', 
        borderRadius: '16px', 
        border: isDarkTheme ? '1px solid #7c3aed' : '1px solid #c4b5fd',
        marginBottom: '20px',
        boxShadow: isDarkTheme 
          ? '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)'
          : '0 4px 6px -1px rgba(124, 58, 237, 0.1), 0 2px 4px -1px rgba(124, 58, 237, 0.06)'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginBottom: '18px',
          gap: '20px'
        }}>
          <label htmlFor="title" style={{ 
            minWidth: '130px', 
            fontWeight: '700', 
            color: isDarkTheme ? '#e9d5ff' : '#6d28d9',
            fontSize: '15px',
            textShadow: isDarkTheme ? '0 1px 2px rgba(0,0,0,0.3)' : '0 1px 2px rgba(109, 40, 217, 0.2)'
          }}>
            Job Title *
          </label>
          <Input
            id="title"
            type="text"
            placeholder="Software Engineer"
            value={currentExperience.title}
            onChange={(e) => setCurrentExperience({ ...currentExperience, title: e.target.value })}
            className={`flex-1 px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-lg ${
              isDarkTheme 
                ? 'bg-gray-700 border-purple-400 text-white placeholder-gray-300 focus:border-purple-300' 
                : 'bg-white border-purple-300 focus:border-purple-600'
            }`}
          />
        </div>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginBottom: '18px',
          gap: '20px'
        }}>
          <label htmlFor="company" style={{ 
            minWidth: '130px', 
            fontWeight: '700', 
            color: isDarkTheme ? '#e9d5ff' : '#6d28d9',
            fontSize: '15px',
            textShadow: isDarkTheme ? '0 1px 2px rgba(0,0,0,0.3)' : '0 1px 2px rgba(109, 40, 217, 0.2)'
          }}>
            Company *
          </label>
          <Input
            id="company"
            type="text"
            placeholder="Company Name"
            value={currentExperience.company}
            onChange={(e) => setCurrentExperience({ ...currentExperience, company: e.target.value })}
            className={`flex-1 px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-lg ${
              isDarkTheme 
                ? 'bg-gray-700 border-purple-400 text-white placeholder-gray-300 focus:border-purple-300' 
                : 'bg-white border-purple-300 focus:border-purple-600'
            }`}
          />
        </div>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginBottom: '20px',
          gap: '20px'
        }}>
          <label htmlFor="years" style={{ 
            minWidth: '130px', 
            fontWeight: '700', 
            color: isDarkTheme ? '#e9d5ff' : '#6d28d9',
            fontSize: '15px',
            textShadow: isDarkTheme ? '0 1px 2px rgba(0,0,0,0.3)' : '0 1px 2px rgba(109, 40, 217, 0.2)'
          }}>
            Years *
          </label>
          <Input
            id="years"
            type="text"
            placeholder="2021-2024"
            value={currentExperience.years}
            onChange={(e) => setCurrentExperience({ ...currentExperience, years: e.target.value })}
            className={`flex-1 px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-lg ${
              isDarkTheme 
                ? 'bg-gray-700 border-purple-400 text-white placeholder-gray-300 focus:border-purple-300' 
                : 'bg-white border-purple-300 focus:border-purple-600'
            }`}
          />
        </div>
        
        <Button 
          onClick={editingIndex !== null ? updateExperience : addExperience}
          className={`w-full py-3 px-6 font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] ${
            isDarkTheme 
              ? 'bg-gray-800 hover:bg-gray-700 text-white border-2 border-purple-400' 
              : 'bg-purple-700 hover:bg-purple-800 text-white'
          }`}
        >
          {editingIndex !== null ? "✏️ Update Experience" : "💼 Add Experience"}
        </Button>
      </div>

      {/* Dropdown List */}
      {experienceList.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h4 style={{ color: isDarkTheme ? '#e2e8f0' : '#333', marginBottom: '10px' }}>Experience List:</h4>
          <div style={{ border: isDarkTheme ? '2px solid #7c3aed' : '2px solid #9333ea', borderRadius: '4px', maxHeight: '200px', overflowY: 'auto' }}>
            {experienceList.map((experience, index) => (
              <div key={index} style={{ 
                padding: '10px', 
                backgroundColor: isDarkTheme 
                  ? (index % 2 === 0 ? '#374151' : '#4b5563')
                  : (index % 2 === 0 ? '#faf5ff' : '#ffffff'),
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                borderBottom: index < experienceList.length - 1 ? (isDarkTheme ? '1px solid #6b7280' : '1px solid #e5e7eb') : 'none'
              }}>
                <span style={{ flex: 1, color: isDarkTheme ? '#f3f4f6' : '#000' }}>{experience.title} - {experience.company} ({experience.years})</span>
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