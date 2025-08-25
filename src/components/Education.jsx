import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Pencil, Trash2, Plus, Save } from "lucide-react"

function Education({
  currentEducation, 
  setCurrentEducation,
  educationList,
  addEducation,
  editEducation,
  updateEducation,
  deleteEducation,
  editingIndex
}) {

  return (
    <div className="space-y-6">
      {/* Form Section */}
      <div className="space-y-6">
        <div className="space-y-3">
          <Label htmlFor="degree" className="text-sm font-semibold text-slate-700 flex items-center gap-2">
            <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></div>
            Degree
          </Label>
          <Input
            id="degree"
            type="text"
            onChange={(e) => setCurrentEducation({ ...currentEducation, degree: e.target.value })}
            value={currentEducation.degree}
            placeholder="Bachelor of Science in Computer Science"
            className="h-12 text-base bg-white/60 backdrop-blur-sm border-slate-200/50 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-200/30 transition-all duration-300 rounded-xl shadow-sm hover:shadow-md"
          />
        </div>
        
        <div className="space-y-3">
          <Label htmlFor="institution" className="text-sm font-semibold text-slate-700 flex items-center gap-2">
            <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></div>
            Institution
          </Label>
          <Input
            id="institution"
            type="text"
            onChange={(e) => setCurrentEducation({ ...currentEducation, institution: e.target.value })}
            value={currentEducation.institution}
            placeholder="University Name"
            className="h-12 text-base bg-white/60 backdrop-blur-sm border-slate-200/50 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-200/30 transition-all duration-300 rounded-xl shadow-sm hover:shadow-md"
          />
        </div>
        
        <div className="space-y-3">
          <Label htmlFor="year" className="text-sm font-semibold text-slate-700 flex items-center gap-2">
            <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></div>
            Year of Graduation
          </Label>
          <Input
            id="year"
            type="text"
            onChange={(e) => setCurrentEducation({ ...currentEducation, year: e.target.value })}
            value={currentEducation.year}
            placeholder="2023"
            className="h-12 text-base bg-white/60 backdrop-blur-sm border-slate-200/50 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-200/30 transition-all duration-300 rounded-xl shadow-sm hover:shadow-md"
          />
        </div>
        
        <Button 
          onClick={editingIndex !== null ? updateEducation : addEducation}
          className="w-full mt-6 h-12 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
        >
          {editingIndex !== null ? (
            <>
              <Save className="mr-3 h-5 w-5" />
              Update Education
            </>
          ) : (
            <>
              <Plus className="mr-3 h-5 w-5" />
              Add Education
            </>
          )}
        </Button>
      </div>

      {/* List Section */}
      {educationList.length > 0 && (
        <>
          <Separator />
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium text-slate-700">Added Education</h4>
              <Badge variant="secondary">
                {educationList.length} {educationList.length === 1 ? 'entry' : 'entries'}
              </Badge>
            </div>
            <div className="space-y-3">
              {educationList.map((education, index) => (
                <div key={index} className="p-3 border border-slate-200 rounded-lg bg-slate-50/50">
                  <div className="flex justify-between items-start">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <p className="font-medium text-slate-800 text-sm truncate pr-2">
                          {education.degree}
                        </p>
                        <Badge variant="outline" className="text-xs">
                          {education.year}
                        </Badge>
                      </div>
                      <p className="text-slate-600 text-sm truncate">{education.institution}</p>
                    </div>
                    <div className="flex gap-1 ml-3">
                      <Button
                        onClick={() => editEducation(index)}
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0"
                      >
                        <Pencil className="h-3 w-3" />
                      </Button>
                      <Button
                        onClick={() => deleteEducation(index)}
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
export default Education;