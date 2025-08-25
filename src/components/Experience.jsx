
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
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
        <div className="space-y-3">
          <Label htmlFor="title" className="text-sm font-semibold text-slate-700 flex items-center gap-2">
            <div className="w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"></div>
            Job Title
          </Label>
          <Input
            id="title"
            type="text"
            placeholder="Software Engineer"
            value={currentExperience.title}
            onChange={(e) => setCurrentExperience({ ...currentExperience, title: e.target.value })}
            className="h-12 text-base bg-white/60 backdrop-blur-sm border-slate-200/50 focus:border-violet-400 focus:ring-4 focus:ring-violet-200/30 transition-all duration-300 rounded-xl shadow-sm hover:shadow-md"
          />
        </div>
        
        <div className="space-y-3">
          <Label htmlFor="company" className="text-sm font-semibold text-slate-700 flex items-center gap-2">
            <div className="w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"></div>
            Company
          </Label>
          <Input
            id="company"
            type="text"
            placeholder="Tech Corp Inc."
            value={currentExperience.company}
            onChange={(e) => setCurrentExperience({ ...currentExperience, company: e.target.value })}
            className="h-12 text-base bg-white/60 backdrop-blur-sm border-slate-200/50 focus:border-violet-400 focus:ring-4 focus:ring-violet-200/30 transition-all duration-300 rounded-xl shadow-sm hover:shadow-md"
          />
        </div>
        
        <div className="space-y-3">
          <Label htmlFor="years" className="text-sm font-semibold text-slate-700 flex items-center gap-2">
            <div className="w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"></div>
            Duration
          </Label>
          <Input
            id="years"
            type="text"
            placeholder="2021-2023"
            value={currentExperience.years}
            onChange={(e) => setCurrentExperience({ ...currentExperience, years: e.target.value })}
            className="h-12 text-base bg-white/60 backdrop-blur-sm border-slate-200/50 focus:border-violet-400 focus:ring-4 focus:ring-violet-200/30 transition-all duration-300 rounded-xl shadow-sm hover:shadow-md"
          />
        </div>
        
        <Button 
          onClick={editingIndex !== null ? updateExperience : addExperience}
          className="w-full mt-6 h-12 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
        >
          {editingIndex !== null ? (
            <>
              <Save className="mr-3 h-5 w-5" />
              Update Experience
            </>
          ) : (
            <>
              <Plus className="mr-3 h-5 w-5" />
              Add Experience
            </>
          )}
        </Button>
      </div>

      {/* List Section */}
      {experienceList.length > 0 && (
        <>
          <Separator />
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium text-slate-700">Added Experience</h4>
              <Badge variant="secondary">
                {experienceList.length} {experienceList.length === 1 ? 'entry' : 'entries'}
              </Badge>
            </div>
            <div className="space-y-3">
              {experienceList.map((experience, index) => (
                <div key={index} className="p-3 border border-slate-200 rounded-lg bg-slate-50/50">
                  <div className="flex justify-between items-start">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <p className="font-medium text-slate-800 text-sm truncate pr-2 flex items-center gap-2">
                          <Briefcase className="h-3 w-3 text-slate-600" />
                          {experience.title}
                        </p>
                        <Badge variant="outline" className="text-xs">
                          {experience.years}
                        </Badge>
                      </div>
                      <p className="text-slate-600 text-sm truncate pl-5">{experience.company}</p>
                    </div>
                    <div className="flex gap-1 ml-3">
                      <Button
                        onClick={() => editExperience(index)}
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0"
                      >
                        <Pencil className="h-3 w-3" />
                      </Button>
                      <Button
                        onClick={() => deleteExperience(index)}
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Experience;
