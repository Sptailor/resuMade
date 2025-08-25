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
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <Label htmlFor="degree" className="block text-sm font-medium text-slate-700">
              Degree *
            </Label>
            <Input
              id="degree"
              type="text"
              onChange={(e) => setCurrentEducation({ ...currentEducation, degree: e.target.value })}
              value={currentEducation.degree}
              placeholder="Bachelor of Science"
              className="w-full h-10 px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>
          
          <div className="space-y-3">
            <Label htmlFor="year" className="block text-sm font-medium text-slate-700">
              Graduation Year *
            </Label>
            <Input
              id="year"
              type="text"
              onChange={(e) => setCurrentEducation({ ...currentEducation, year: e.target.value })}
              value={currentEducation.year}
              placeholder="2023"
              className="w-full h-10 px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>
        </div>
        
        <div className="space-y-3">
          <Label htmlFor="institution" className="block text-sm font-medium text-slate-700">
            Institution *
          </Label>
          <Input
            id="institution"
            type="text"
            onChange={(e) => setCurrentEducation({ ...currentEducation, institution: e.target.value })}
            value={currentEducation.institution}
            placeholder="University of California, Berkeley"
            className="w-full h-10 px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            required
          />
        </div>
        
        <Button 
          onClick={editingIndex !== null ? updateEducation : addEducation}
          className="w-full h-10 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-md transition-colors"
        >
          {editingIndex !== null ? (
            <>
              <Save className="mr-2 h-4 w-4" />
              Update Education
            </>
          ) : (
            <>
              <Plus className="mr-2 h-4 w-4" />
              Add Education
            </>
          )}
        </Button>
      </div>

      {/* List Section */}
      {educationList.length > 0 && (
        <div className="pt-6 border-t border-slate-200">
          <h4 className="text-sm font-medium text-slate-900 mb-4">Added Education Entries ({educationList.length})</h4>
          <div className="space-y-4">
            {educationList.map((education, index) => (
              <div key={index} className="text-center">
                <div className="mb-3">
                  <h5 className="font-medium text-slate-900 mb-1">
                    {education.degree}
                  </h5>
                  <p className="text-sm text-slate-600 mb-1">{education.institution}</p>
                  <p className="text-xs text-slate-500">Class of {education.year}</p>
                </div>
                <div className="flex justify-center gap-3">
                  <Button
                    onClick={() => editEducation(index)}
                    variant="outline"
                    size="sm"
                    className="h-8 px-3 text-xs"
                  >
                    <Pencil className="h-3 w-3 mr-1" />
                    Edit
                  </Button>
                  <Button
                    onClick={() => deleteEducation(index)}
                    variant="outline"
                    size="sm"
                    className="h-8 px-3 text-xs text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="h-3 w-3 mr-1" />
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