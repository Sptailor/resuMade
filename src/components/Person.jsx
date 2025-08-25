import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function Person({ personData, setPersonData }) {

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <Label htmlFor="name" className="text-sm font-semibold text-slate-700 flex items-center gap-2">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          Full Name
        </Label>
        <Input
          id="name"
          type="text"
          value={personData.name}
          onChange={(e) => setPersonData({ ...personData, name: e.target.value })}
          placeholder="Enter your full name"
          className="h-12 text-base bg-white/60 backdrop-blur-sm border-slate-200/50 focus:border-blue-400 focus:ring-4 focus:ring-blue-200/30 transition-all duration-300 rounded-xl shadow-sm hover:shadow-md"
        />
      </div>

      <div className="space-y-3">
        <Label htmlFor="email" className="text-sm font-semibold text-slate-700 flex items-center gap-2">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          Email Address
        </Label>
        <Input
          id="email"
          type="email"
          value={personData.email}
          onChange={(e) => setPersonData({ ...personData, email: e.target.value })}
          placeholder="your.email@example.com"
          className="h-12 text-base bg-white/60 backdrop-blur-sm border-slate-200/50 focus:border-blue-400 focus:ring-4 focus:ring-blue-200/30 transition-all duration-300 rounded-xl shadow-sm hover:shadow-md"
        />
      </div>

      <div className="space-y-3">
        <Label htmlFor="phone" className="text-sm font-semibold text-slate-700 flex items-center gap-2">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          Phone Number
        </Label>
        <Input
          id="phone"
          type="tel"
          value={personData.phone}
          onChange={(e) => setPersonData({ ...personData, phone: e.target.value })}
          placeholder="+1 (555) 123-4567"
          className="h-12 text-base bg-white/60 backdrop-blur-sm border-slate-200/50 focus:border-blue-400 focus:ring-4 focus:ring-blue-200/30 transition-all duration-300 rounded-xl shadow-sm hover:shadow-md"
        />
      </div>
    </div>
  );
}

export default Person;