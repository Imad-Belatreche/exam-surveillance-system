import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AdminDashboard from "@/components/admin-dashboard"
import ProfessorPortal from "@/components/professor-portal"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-blue-700 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold">University Exam Surveillance System</h1>
          <div className="flex items-center gap-4">
            <button className="text-sm bg-blue-600 hover:bg-blue-800 px-3 py-1.5 rounded-md transition-colors">
              Help
            </button>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-sm font-medium">AD</span>
              </div>
              <span className="text-sm hidden md:inline">Admin User</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4 md:p-6">
        <Tabs defaultValue="admin" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="admin">Admin Dashboard</TabsTrigger>
            <TabsTrigger value="professor">Professor Portal</TabsTrigger>
          </TabsList>
          <TabsContent value="admin">
            <AdminDashboard />
          </TabsContent>
          <TabsContent value="professor">
            <ProfessorPortal />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

