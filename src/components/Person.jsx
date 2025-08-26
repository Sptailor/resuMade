import { Input } from "@/components/ui/input"

function Person({ personData, setPersonData, isDarkTheme }) {

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
        <Input
          id="name"
          type="text"
          value={personData.name}
          onChange={(e) => setPersonData({ ...personData, name: e.target.value })}
          placeholder="John Doe"
          className={`flex-1 px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-lg ${
            isDarkTheme 
              ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400' 
              : 'bg-white border-slate-200 focus:border-blue-500'
          }`}
          required
        />
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
        <Input
          id="email"
          type="email"
          value={personData.email}
          onChange={(e) => setPersonData({ ...personData, email: e.target.value })}
          placeholder="john@example.com"
          className={`flex-1 px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-lg ${
            isDarkTheme 
              ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400' 
              : 'bg-white border-slate-200 focus:border-blue-500'
          }`}
          required
        />
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
        <Input
          id="phone"
          type="tel"
          value={personData.phone}
          onChange={(e) => setPersonData({ ...personData, phone: e.target.value })}
          placeholder="+1 (555) 123-4567"
          className={`flex-1 px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-lg ${
            isDarkTheme 
              ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400' 
              : 'bg-white border-slate-200 focus:border-blue-500'
          }`}
        />
      </div>
    </div>
  );
}

export default Person;