
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Pencil, Trash2, Plus, Save, Briefcase } from "lucide-react"

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
    <div className="space-y-6">
      {/* Form Section */}
      <div className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <Label htmlFor="title" className="block text-sm font-medium text-slate-700">
              Job Title *
            </Label>
            <Input
              id="title"
              type="text"
              placeholder="Software Engineer"
              value={currentExperience.title}
              onChange={(e) => setCurrentExperience({ ...currentExperience, title: e.target.value })}
              className="w-full h-10 px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>
          
          <div className="space-y-3">
            <Label htmlFor="years" className="block text-sm font-medium text-slate-700">
              Duration *
            </Label>
            <Input
              id="years"
              type="text"
              placeholder="2021-2023"
              value={currentExperience.years}
              onChange={(e) => setCurrentExperience({ ...currentExperience, years: e.target.value })}
              className="w-full h-10 px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>
        </div>
        
        <div className="space-y-3">
          <Label htmlFor="company" className="block text-sm font-medium text-slate-700">
            Company *
          </Label>
          <Input
            id="company"
            type="text"
            placeholder="Google, Microsoft, Apple"
            value={currentExperience.company}
            onChange={(e) => setCurrentExperience({ ...currentExperience, company: e.target.value })}
            className="w-full h-10 px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            required
          />
        </div>
        
        <Button 
          onClick={editingIndex !== null ? updateExperience : addExperience}
          className="w-full h-10 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-md transition-colors"
        >
          {editingIndex !== null ? (
            <>
              <Save className="mr-2 h-4 w-4" />
              Update Experience
            </>
          ) : (
            <>
              <Plus className="mr-2 h-4 w-4" />
              Add Experience
            </>
          )}
        </Button>
      </div>

      {/* List Section */}
      {experienceList.length > 0 && (
        <div className="pt-4 border-t border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-medium text-slate-900">Work Experience</h4>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
              {experienceList.length}
            </Badge>
          </div>
          <div className="space-y-3">
            {experienceList.map((experience, index) => (
              <div key={index} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <div className="flex justify-between items-start">
                  <div className="flex-1 min-w-0">
                    <h5 className="font-medium text-slate-900 mb-1 flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-slate-600" />
                      {experience.title}
                    </h5>
                    <p className="text-sm text-slate-600 mb-1">{experience.company}</p>
                    <p className="text-xs text-slate-500">{experience.years}</p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button
                      onClick={() => editExperience(index)}
                      variant="outline"
                      size="sm"
                      className="h-8 px-3 text-xs"
                    >
                      <Pencil className="h-3 w-3 mr-1" />
                      Edit
                    </Button>
                    <Button
                      onClick={() => deleteExperience(index)}
                      variant="outline"
                      size="sm"
                      className="h-8 px-3 text-xs text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-3 w-3 mr-1" />
                      Delete
                    </Button>
                  </div>
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
