import { Input } from "@/components/ui/input"

function Person({ personData, setPersonData }) {

  return (
    <div style={{ 
      background: 'linear-gradient(145deg, #f1f5f9 0%, #e2e8f0 100%)',
      padding: '28px', 
      borderRadius: '16px', 
      border: '1px solid #cbd5e1',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
    }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        marginBottom: '20px',
        gap: '24px'
      }}>
        <label htmlFor="name" style={{ 
          minWidth: '140px', 
          fontWeight: '700', 
          color: '#1e293b',
          fontSize: '15px',
          textShadow: '0 1px 2px rgba(0,0,0,0.1)'
        }}>
          Full Name *
        </label>
        <Input
          id="name"
          type="text"
          value={personData.name}
          onChange={(e) => setPersonData({ ...personData, name: e.target.value })}
          placeholder="John Doe"
          className="flex-1 px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-lg"
          required
        />
      </div>

      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        marginBottom: '20px',
        gap: '24px'
      }}>
        <label htmlFor="email" style={{ 
          minWidth: '140px', 
          fontWeight: '700', 
          color: '#1e293b',
          fontSize: '15px',
          textShadow: '0 1px 2px rgba(0,0,0,0.1)'
        }}>
          Email Address *
        </label>
        <Input
          id="email"
          type="email"
          value={personData.email}
          onChange={(e) => setPersonData({ ...personData, email: e.target.value })}
          placeholder="john@example.com"
          className="flex-1 px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-lg"
          required
        />
      </div>

      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '24px'
      }}>
        <label htmlFor="phone" style={{ 
          minWidth: '140px', 
          fontWeight: '700', 
          color: '#1e293b',
          fontSize: '15px',
          textShadow: '0 1px 2px rgba(0,0,0,0.1)'
        }}>
          Phone Number
        </label>
        <Input
          id="phone"
          type="tel"
          value={personData.phone}
          onChange={(e) => setPersonData({ ...personData, phone: e.target.value })}
          placeholder="+1 (555) 123-4567"
          className="flex-1 px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-lg"
        />
      </div>
    </div>
  );
}

export default Person;