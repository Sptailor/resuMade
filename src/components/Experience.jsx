import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

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
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!currentExperience.title.trim()) {
      newErrors.title = 'Job title is required';
    }
    
    if (!currentExperience.company.trim()) {
      newErrors.company = 'Company is required';
    }
    
    if (!currentExperience.years.trim()) {
      newErrors.years = 'Years are required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {// Handle form submission
    if (validateForm()) {
      if (editingIndex !== null) {
        updateExperience();
      } else {
        addExperience();
      }
      setErrors({});
    }
  };

  const handleFieldChange = (field, value) => { // Handle field changes
    setCurrentExperience({ ...currentExperience, [field]: value });
    
    // Clear error for this field when user starts typing
    if (errors[field]) {
      const newErrors = { ...errors };
      delete newErrors[field];
      setErrors(newErrors);
    }
  };
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
          <div style={{ flex: 1 }}>
            <Input
              id="title"
              type="text"
              placeholder="Software Engineer"
              value={currentExperience.title}
              onChange={(e) => handleFieldChange('title', e.target.value)}
              className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-lg ${
                errors.title
                  ? (isDarkTheme ? 'bg-gray-700 border-red-400 placeholder-gray-300 focus:border-red-300' : 'bg-white border-red-400 focus:border-red-500')
                  : (isDarkTheme ? 'bg-gray-700 border-purple-400 placeholder-gray-300 focus:border-purple-300' : 'bg-white border-purple-300 focus:border-purple-600')
              }`}
              style={{ color: 'black' }}
            />
            {errors.title && (
              <div style={{
                color: '#ef4444',
                fontSize: '12px',
                marginTop: '4px',
                fontWeight: '500'
              }}>
                {errors.title}
              </div>
            )}
          </div>
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
          <div style={{ flex: 1 }}>
            <Input
              id="company"
              type="text"
              placeholder="Company Name"
              value={currentExperience.company}// Company name value
              onChange={(e) => handleFieldChange('company', e.target.value)}
              className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-lg ${
                errors.company
                  ? (isDarkTheme ? 'bg-gray-700 border-red-400 placeholder-gray-300 focus:border-red-300' : 'bg-white border-red-400 focus:border-red-500')
                  : (isDarkTheme ? 'bg-gray-700 border-purple-400 placeholder-gray-300 focus:border-purple-300' : 'bg-white border-purple-300 focus:border-purple-600')
              }`}
              style={{ color: 'black' }}
            />
            {errors.company && (
              <div style={{
                color: '#ef4444',
                fontSize: '12px',
                marginTop: '4px',
                fontWeight: '500'
              }}>
                {errors.company}
              </div>
            )}
          </div>
        </div>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginBottom: '18px',
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
          <div style={{ flex: 1 }}>
            <Input
              id="years"
              type="text"
              placeholder="2021-2024"
              value={currentExperience.years}
              onChange={(e) => handleFieldChange('years', e.target.value)}
              className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-lg ${
                errors.years
                  ? (isDarkTheme ? 'bg-gray-700 border-red-400 placeholder-gray-300 focus:border-red-300' : 'bg-white border-red-400 focus:border-red-500')
                  : (isDarkTheme ? 'bg-gray-700 border-purple-400 placeholder-gray-300 focus:border-purple-300' : 'bg-white border-purple-300 focus:border-purple-600')
              }`}
              style={{ color: 'black' }}
            />
            {errors.years && (
              <div style={{
                color: '#ef4444',
                fontSize: '12px',
                marginTop: '4px',
                fontWeight: '500'
              }}>
                {errors.years}
              </div>
            )}
          </div>
        </div>

        <div style={{ 
          display: 'flex', 
          alignItems: 'flex-start', 
          marginBottom: '20px',
          gap: '20px'
        }}>
          <label htmlFor="description" style={{ 
            minWidth: '130px', 
            fontWeight: '700', 
            color: isDarkTheme ? '#e9d5ff' : '#6d28d9',
            fontSize: '15px',
            textShadow: isDarkTheme ? '0 1px 2px rgba(0,0,0,0.3)' : '0 1px 2px rgba(109, 40, 217, 0.2)',
            paddingTop: '8px'
          }}>
            Description
          </label>
          <div style={{ flex: 1 }}>
            <textarea
              id="description"
              placeholder="Brief description of your role and achievements..."
              value={currentExperience.description}
              onChange={(e) => {
                if (e.target.value.length <= 400) {
                  handleFieldChange('description', e.target.value);
                }
              }}
              maxLength={400}
              rows="3"
              className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-lg resize-vertical ${
                isDarkTheme 
                  ? 'bg-gray-700 border-purple-400 placeholder-gray-300 focus:border-purple-300' 
                  : 'bg-white border-purple-300 focus:border-purple-600'
              }`}
              style={{ color: 'black' }}
            />
            <div style={{ 
              textAlign: 'right', 
              fontSize: '12px', 
              color: isDarkTheme ? '#9ca3af' : '#6b7280',
              marginTop: '4px'
            }}>
              {currentExperience.description.length}/400 characters
            </div>
          </div>
        </div>
        
        <Button 
          onClick={handleSubmit}
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
                <span style={{ flex: 1, color: isDarkTheme ? '#f3f4f6' : '#000' }}>
                  {experience.title} - {experience.company}
                </span>
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