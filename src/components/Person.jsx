import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function Person({ personData, setPersonData }) {

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <Label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">
          Full Name *
        </Label>
        <Input
          id="name"
          type="text"
          value={personData.name}
          onChange={(e) => setPersonData({ ...personData, name: e.target.value })}
          placeholder="John Doe"
          className="w-full h-12 px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
          required
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-3">
          <Label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
            Email Address *
          </Label>
          <Input
            id="email"
            type="email"
            value={personData.email}
            onChange={(e) => setPersonData({ ...personData, email: e.target.value })}
            placeholder="john@example.com"
            className="w-full h-12 px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
            required
          />
        </div>

        <div className="space-y-3">
          <Label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-2">
            Phone Number
          </Label>
          <Input
            id="phone"
            type="tel"
            value={personData.phone}
            onChange={(e) => setPersonData({ ...personData, phone: e.target.value })}
            placeholder="+1 (555) 123-4567"
            className="w-full h-12 px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
          />
        </div>
      </div>
    </div>
  );
}

export default Person;