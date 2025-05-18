
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const courses = [
  {
    id: "cs101",
    title: "Introduction to Computer Science",
    code: "CS101",
    students: 36,
    progress: 65,
    status: "In Progress",
    description: "Fundamentals of programming with Python and basic computer science concepts."
  },
  {
    id: "cs202",
    title: "Data Structures and Algorithms",
    code: "CS202",
    students: 28,
    progress: 45,
    status: "In Progress",
    description: "Advanced data structures, algorithm complexity and problem solving."
  },
  {
    id: "cs305",
    title: "Database Systems",
    code: "CS305",
    students: 21,
    progress: 80,
    status: "In Progress",
    description: "Database design, SQL, transactions and database management systems."
  },
  {
    id: "cs410",
    title: "Machine Learning",
    code: "CS410",
    students: 15,
    progress: 20,
    status: "In Progress",
    description: "Introduction to machine learning algorithms and applications."
  },
  {
    id: "cs230",
    title: "Web Development",
    code: "CS230",
    students: 24,
    progress: 55,
    status: "In Progress",
    description: "Modern web technologies, frameworks and best practices."
  }
];

const Courses = () => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-3xl font-bold mb-1">Courses</h2>
        <p className="text-muted-foreground">
          Manage your teaching courses and materials
        </p>
      </div>
      
      <Tabs defaultValue="current" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="current">Current</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>
        
        <TabsContent value="current">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card key={course.id}>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <Badge>{course.code}</Badge>
                    <Badge variant={course.status === "In Progress" ? "blue" : "default"}>
                      {course.status}
                    </Badge>
                  </div>
                  <CardTitle className="mt-2">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Course Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                    <div className="text-sm">
                      <span className="text-muted-foreground">Students: </span>
                      <span className="font-medium">{course.students}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View Details</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="upcoming">
          <div className="flex flex-col items-center justify-center p-12 text-center bg-secondary/40 rounded-lg">
            <h3 className="text-xl font-medium mb-2">No Upcoming Courses</h3>
            <p className="text-muted-foreground mb-4">
              You don't have any upcoming courses scheduled yet.
            </p>
            <Button>Create New Course</Button>
          </div>
        </TabsContent>
        
        <TabsContent value="past">
          <div className="flex flex-col items-center justify-center p-12 text-center bg-secondary/40 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Previous Courses Archive</h3>
            <p className="text-muted-foreground mb-4">
              You can access your past courses from the archive.
            </p>
            <Button variant="outline">Access Archive</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Courses;
