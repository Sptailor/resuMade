import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

function Education({
  currentEducation, 
  setCurrentEducation,
  educationList,
  addEducation,
  editEducation,
  updateEducation,
  deleteEducation,
  editingIndex,
  isDarkTheme
}) {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!currentEducation.degree.trim()) {
      newErrors.degree = 'Degree is required';
    }
    
    if (!currentEducation.institution.trim()) {
      newErrors.institution = 'Institution is required';
    }
    
    if (!currentEducation.month) {
      newErrors.month = 'Month is required';
    }
    
    if (!currentEducation.year.trim()) {
      newErrors.year = 'Year is required';
    } else if (!/^\d{4}$/.test(currentEducation.year)) {
      newErrors.year = 'Year must be a 4-digit number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      if (editingIndex !== null) {
        updateEducation();
      } else {
        addEducation();
      }
      setErrors({});
    }
  };

  const handleFieldChange = (field, value) => {
    setCurrentEducation({ ...currentEducation, [field]: value });// Update the current education state

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
        width: '48vw',
        margin: '2%',
        background: isDarkTheme
          ? 'linear-gradient(145deg, #1e3a8a 0%, #3730a3 100%)'
          : 'linear-gradient(145deg, #dbeafe 0%, #bfdbfe 100%)',
        padding: '24px',
        borderRadius: '16px', 
        border: isDarkTheme ? '1px solid #4338ca' : '1px solid #93c5fd',
        marginBottom: '20px',
        boxShadow: isDarkTheme 
          ? '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)'
          : '0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06)'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginBottom: '18px',
          gap: '20px'
        }}>
          <label htmlFor="degree" style={{ 
            minWidth: '130px', 
            fontWeight: '700', 
            color: isDarkTheme ? '#ddd6fe' : '#1e40af',
            fontSize: '15px',
            textShadow: isDarkTheme ? '0 1px 2px rgba(0,0,0,0.3)' : '0 1px 2px rgba(30, 64, 175, 0.2)'
          }}>
            Degree *
          </label>
          <div style={{ flex: 1 }}>
            <Input
              id="degree"
              type="text"
              onChange={(e) => handleFieldChange('degree', e.target.value)}// Handle degree change
              value={currentEducation.degree}
              placeholder="Bachelor of Science"
              className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-lg ${
                errors.degree
                  ? (isDarkTheme ? 'bg-gray-700 border-red-400 placeholder-gray-300 focus:border-red-300' : 'bg-white border-red-400 focus:border-red-500')
                  : (isDarkTheme ? 'bg-gray-700 border-blue-400 placeholder-gray-300 focus:border-blue-300' : 'bg-white border-blue-300 focus:border-blue-600')
              }`}
              style={{ color: 'black' }}
            />
            {errors.degree && (
              <div style={{
                color: '#ef4444',
                fontSize: '12px',
                marginTop: '4px',
                fontWeight: '500'
              }}>
                {errors.degree}
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
          <label htmlFor="institution" style={{ 
            minWidth: '130px', 
            fontWeight: '700', 
            color: isDarkTheme ? '#ddd6fe' : '#1e40af',
            fontSize: '15px',
            textShadow: isDarkTheme ? '0 1px 2px rgba(0,0,0,0.3)' : '0 1px 2px rgba(30, 64, 175, 0.2)'
          }}>
            Institution *
          </label>
          <div style={{ flex: 1 }}>
            <Input
              id="institution"
              type="text"
              onChange={(e) => handleFieldChange('institution', e.target.value)}
              value={currentEducation.institution}
              placeholder="University Name"
              className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-lg ${
                errors.institution
                  ? (isDarkTheme ? 'bg-gray-700 border-red-400 placeholder-gray-300 focus:border-red-300' : 'bg-white border-red-400 focus:border-red-500')
                  : (isDarkTheme ? 'bg-gray-700 border-blue-400 placeholder-gray-300 focus:border-blue-300' : 'bg-white border-blue-300 focus:border-blue-600')
              }`}
              style={{ color: 'black' }}
            />
            {errors.institution && (
              <div style={{
                color: '#ef4444',
                fontSize: '12px',
                marginTop: '4px',
                fontWeight: '500'
              }}>
                {errors.institution}
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
          <label htmlFor="month" style={{ 
            minWidth: '130px', 
            fontWeight: '700', 
            color: isDarkTheme ? '#ddd6fe' : '#1e40af',
            fontSize: '15px',
            textShadow: isDarkTheme ? '0 1px 2px rgba(0,0,0,0.3)' : '0 1px 2px rgba(30, 64, 175, 0.2)'
          }}>
            Month *
          </label>
          <div style={{ flex: 1 }}>
            <select
              id="month"
              onChange={(e) => handleFieldChange('month', e.target.value)}
              value={currentEducation.month}
              className={`month-select-black w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-lg ${
                errors.month
                  ? (isDarkTheme ? 'bg-gray-700 border-red-400 focus:border-red-300' : 'bg-white border-red-400 focus:border-red-500')
                  : (isDarkTheme ? 'bg-gray-700 border-blue-400 focus:border-blue-300' : 'bg-white border-blue-300 focus:border-blue-600')
              }`}
              style={{
                color: 'black'
              }}
            >
            <option value="" style={{ backgroundColor: 'white', color: 'black' }}>Select Month</option>
            <option value="January" style={{ backgroundColor: 'white', color: 'black' }}>January</option>
            <option value="February" style={{ backgroundColor: 'white', color: 'black' }}>February</option>
            <option value="March" style={{ backgroundColor: 'white', color: 'black' }}>March</option>
            <option value="April" style={{ backgroundColor: 'white', color: 'black' }}>April</option>
            <option value="May" style={{ backgroundColor: 'white', color: 'black' }}>May</option>
            <option value="June" style={{ backgroundColor: 'white', color: 'black' }}>June</option>
            <option value="July" style={{ backgroundColor: 'white', color: 'black' }}>July</option>
            <option value="August" style={{ backgroundColor: 'white', color: 'black' }}>August</option>
            <option value="September" style={{ backgroundColor: 'white', color: 'black' }}>September</option>
            <option value="October" style={{ backgroundColor: 'white', color: 'black' }}>October</option>
            <option value="November" style={{ backgroundColor: 'white', color: 'black' }}>November</option>
            <option value="December" style={{ backgroundColor: 'white', color: 'black' }}>December</option>
            </select>
            {errors.month && (
              <div style={{
                color: '#ef4444',
                fontSize: '12px',
                marginTop: '4px',
                fontWeight: '500'
              }}>
                {errors.month}
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
          <label htmlFor="year" style={{ 
            minWidth: '130px', 
            fontWeight: '700', 
            color: isDarkTheme ? '#ddd6fe' : '#1e40af',
            fontSize: '15px',
            textShadow: isDarkTheme ? '0 1px 2px rgba(0,0,0,0.3)' : '0 1px 2px rgba(30, 64, 175, 0.2)'
          }}>
            Year *
          </label>
          <div style={{ flex: 1 }}>
            <Input
              id="year"
              type="text"
              onChange={(e) => handleFieldChange('year', e.target.value)}
              value={currentEducation.year}
              placeholder="2024"
              className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-lg ${
                errors.year
                  ? (isDarkTheme ? 'bg-gray-700 border-red-400 placeholder-gray-300 focus:border-red-300' : 'bg-white border-red-400 focus:border-red-500')
                  : (isDarkTheme ? 'bg-gray-700 border-blue-400 placeholder-gray-300 focus:border-blue-300' : 'bg-white border-blue-300 focus:border-blue-600')
              }`}
              style={{ color: 'black' }}
            />
            {errors.year && (
              <div style={{
                color: '#ef4444',
                fontSize: '12px',
                marginTop: '4px',
                fontWeight: '500'
              }}>
                {errors.year}
              </div>
            )}
          </div>
        </div>

        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginBottom: '20px',
          gap: '20px'
        }}>
          <label htmlFor="major" style={{ 
            minWidth: '130px', 
            fontWeight: '700', 
            color: isDarkTheme ? '#ddd6fe' : '#1e40af',
            fontSize: '15px',
            textShadow: isDarkTheme ? '0 1px 2px rgba(0,0,0,0.3)' : '0 1px 2px rgba(30, 64, 175, 0.2)'
          }}>
            Major
          </label>
          <div style={{ flex: 1 }}>
            <Input
              id="major"
              type="text"
              onChange={(e) => handleFieldChange('major', e.target.value)}
              value={currentEducation.major}
              placeholder="Computer Science"
              className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-lg ${
                isDarkTheme 
                  ? 'bg-gray-700 border-blue-400 text-white placeholder-gray-300 focus:border-blue-300' 
                  : 'bg-white border-blue-300 focus:border-blue-600'
              }`}
            />
          </div>
        </div>
        
        <Button 
          onClick={handleSubmit}
          className={`w-full py-3 px-6 font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] ${
            isDarkTheme 
              ? 'bg-gray-800 hover:bg-gray-700 text-white border-2 border-blue-400' 
              : 'bg-blue-700 hover:bg-blue-800 text-white'
          }`}
        >
          {editingIndex !== null ? "✏️ Update Education" : "➕ Add Education"}
        </Button>
      </div>

      {/* Dropdown List */}
      {educationList.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h4 style={{ color: isDarkTheme ? '#e2e8f0' : '#333', marginBottom: '10px' }}>Education List:</h4>
          <div style={{ border: isDarkTheme ? '2px solid #4338ca' : '2px solid #3b82f6', borderRadius: '4px', maxHeight: '200px', overflowY: 'auto' }}>
            {educationList.map((education, index) => (
              <div key={index} style={{ 
                padding: '10px', 
                backgroundColor: isDarkTheme 
                  ? (index % 2 === 0 ? '#374151' : '#4b5563')
                  : (index % 2 === 0 ? '#f0f9ff' : '#ffffff'),
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                borderBottom: index < educationList.length - 1 ? (isDarkTheme ? '1px solid #6b7280' : '1px solid #e5e7eb') : 'none'
              }}>
                <span style={{ flex: 1, color: isDarkTheme ? '#f3f4f6' : '#000' }}>
                  {education.degree} - {education.institution}
                </span>
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