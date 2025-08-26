import { Input } from "@/components/ui/input"
import { useState } from "react"

function Person({ personData, setPersonData, isDarkTheme }) {
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    if (!phone) return true; // Phone is optional
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setPersonData({ ...personData, name: value });
    
    if (value.trim() === '') {
      setErrors({ ...errors, name: 'Name is required' });
    } else if (value.trim().length < 2) {
      setErrors({ ...errors, name: 'Name must be at least 2 characters' });
    } else {
      const newErrors = { ...errors };
      delete newErrors.name;
      setErrors(newErrors);
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setPersonData({ ...personData, email: value });
    
    if (value.trim() === '') {
      setErrors({ ...errors, email: 'Email is required' });
    } else if (!validateEmail(value)) {
      setErrors({ ...errors, email: 'Please enter a valid email address' });
    } else {
      const newErrors = { ...errors };
      delete newErrors.email;
      setErrors(newErrors);
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPersonData({ ...personData, phone: value });
    
    if (value.trim() !== '' && !validatePhone(value)) {
      setErrors({ ...errors, phone: 'Please enter a valid phone number' });
    } else {
      const newErrors = { ...errors };
      delete newErrors.phone;
      setErrors(newErrors);
    }
  };

  return (
    <div style={{ 
      background: isDarkTheme 
        ? 'linear-gradient(145deg, #374151 0%, #4b5563 100%)'
        : 'linear-gradient(145deg, #f1f5f9 0%, #e2e8f0 100%)',
      padding: '24px', 
      borderRadius: '16px', 
      border: isDarkTheme ? '1px solid #6b7280' : '1px solid #cbd5e1',
      boxShadow: isDarkTheme 
        ? '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)'
        : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
    }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        marginBottom: '18px',
        gap: '20px'
      }}>
        <label htmlFor="name" style={{ 
          minWidth: '130px', 
          fontWeight: '700', 
          color: isDarkTheme ? '#f8fafc' : '#1e293b',
          fontSize: '15px',
          textShadow: isDarkTheme ? '0 1px 2px rgba(0,0,0,0.3)' : '0 1px 2px rgba(0,0,0,0.1)'
        }}>
          Full Name *
        </label>
        <div style={{ flex: 1 }}>
          <Input
            id="name"
            type="text"
            value={personData.name}
            onChange={handleNameChange}
            placeholder="John Doe"
            className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-lg ${
              errors.name
                ? (isDarkTheme ? 'bg-gray-700 border-red-400 text-white placeholder-gray-400 focus:border-red-300' : 'bg-white border-red-400 focus:border-red-500')
                : (isDarkTheme ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400' : 'bg-white border-slate-200 focus:border-blue-500')
            }`}
            required
          />
          {errors.name && (
            <div style={{
              color: '#ef4444',
              fontSize: '12px',
              marginTop: '4px',
              fontWeight: '500'
            }}>
              {errors.name}
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
        <label htmlFor="email" style={{ 
          minWidth: '130px', 
          fontWeight: '700', 
          color: isDarkTheme ? '#f8fafc' : '#1e293b',
          fontSize: '15px',
          textShadow: isDarkTheme ? '0 1px 2px rgba(0,0,0,0.3)' : '0 1px 2px rgba(0,0,0,0.1)'
        }}>
          Email Address *
        </label>
        <div style={{ flex: 1 }}>
          <Input
            id="email"
            type="email"
            value={personData.email}
            onChange={handleEmailChange}
            placeholder="john@example.com"
            className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-lg ${
              errors.email
                ? (isDarkTheme ? 'bg-gray-700 border-red-400 text-white placeholder-gray-400 focus:border-red-300' : 'bg-white border-red-400 focus:border-red-500')
                : (isDarkTheme ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400' : 'bg-white border-slate-200 focus:border-blue-500')
            }`}
            required
          />
          {errors.email && (
            <div style={{
              color: '#ef4444',
              fontSize: '12px',
              marginTop: '4px',
              fontWeight: '500'
            }}>
              {errors.email}
            </div>
          )}
        </div>
      </div>

      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '20px'
      }}>
        <label htmlFor="phone" style={{ 
          minWidth: '130px', 
          fontWeight: '700', 
          color: isDarkTheme ? '#f8fafc' : '#1e293b',
          fontSize: '15px',
          textShadow: isDarkTheme ? '0 1px 2px rgba(0,0,0,0.3)' : '0 1px 2px rgba(0,0,0,0.1)'
        }}>
          Phone Number
        </label>
        <div style={{ flex: 1 }}>
          <Input
            id="phone"
            type="tel"
            value={personData.phone}
            onChange={handlePhoneChange}
            placeholder="+1 (555) 123-4567"
            className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-lg ${
              errors.phone
                ? (isDarkTheme ? 'bg-gray-700 border-red-400 text-white placeholder-gray-400 focus:border-red-300' : 'bg-white border-red-400 focus:border-red-500')
                : (isDarkTheme ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400' : 'bg-white border-slate-200 focus:border-blue-500')
            }`}
          />
          {errors.phone && (
            <div style={{
              color: '#ef4444',
              fontSize: '12px',
              marginTop: '4px',
              fontWeight: '500'
            }}>
              {errors.phone}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Person;