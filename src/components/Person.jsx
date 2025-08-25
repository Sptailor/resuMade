import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function Person({ personData, setPersonData }) {

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Label htmlFor="name" className="block text-sm font-medium text-slate-700">
          Full Name *
        </Label>
        <Input
          id="name"
          type="text"
          value={personData.name}
          onChange={(e) => setPersonData({ ...personData, name: e.target.value })}
          placeholder="Enter your full name"
          className="w-full h-10 px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3">
          <Label htmlFor="email" className="block text-sm font-medium text-slate-700">
            Email Address *
          </Label>
          <Input
            id="email"
            type="email"
            value={personData.email}
            onChange={(e) => setPersonData({ ...personData, email: e.target.value })}
            placeholder="your.email@example.com"
            className="w-full h-10 px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div className="space-y-3">
          <Label htmlFor="phone" className="block text-sm font-medium text-slate-700">
            Phone Number
          </Label>
          <Input
            id="phone"
            type="tel"
            value={personData.phone}
            onChange={(e) => setPersonData({ ...personData, phone: e.target.value })}
            placeholder="+1 (555) 123-4567"
            className="w-full h-10 px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
}

export default Person;