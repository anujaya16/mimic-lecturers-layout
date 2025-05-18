
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Pencil, MoreVertical, Search, ArrowUpDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Student = {
  id: string;
  name: string;
  email: string;
  course: string;
  grade: string;
  status: "At Risk" | "Good" | "Excellent";
};

const students: Student[] = [
  { 
    id: "1", 
    name: "Alex Johnson", 
    email: "alex.j@university.edu", 
    course: "CS101", 
    grade: "C+", 
    status: "At Risk" 
  },
  { 
    id: "2", 
    name: "Sofia Martinez", 
    email: "sofia.m@university.edu", 
    course: "CS101", 
    grade: "A", 
    status: "Excellent" 
  },
  { 
    id: "3", 
    name: "James Wilson", 
    email: "james.w@university.edu", 
    course: "CS101", 
    grade: "B", 
    status: "Good" 
  },
  { 
    id: "4", 
    name: "Mia Thompson", 
    email: "mia.t@university.edu", 
    course: "CS202", 
    grade: "A-", 
    status: "Excellent" 
  },
  { 
    id: "5", 
    name: "Daniel Lee", 
    email: "daniel.l@university.edu", 
    course: "CS202", 
    grade: "D", 
    status: "At Risk" 
  },
  { 
    id: "6", 
    name: "Emma Brown", 
    email: "emma.b@university.edu", 
    course: "CS305", 
    grade: "B+", 
    status: "Good" 
  }
];

const Students = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.course.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const getStatusColor = (status: Student["status"]) => {
    switch (status) {
      case "At Risk": return "destructive";
      case "Good": return "blue";
      case "Excellent": return "green";
      default: return "default";
    }
  };
  
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-3xl font-bold mb-1">Students</h2>
        <p className="text-muted-foreground">
          Manage and monitor your students
        </p>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="relative w-72">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search students..."
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2">
          <Button>Add Student</Button>
          <Button variant="outline">Export Data</Button>
        </div>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Course</TableHead>
              <TableHead>
                <div className="flex items-center gap-1">
                  Grade
                  <ArrowUpDown className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[80px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>{student.course}</TableCell>
                  <TableCell>{student.grade}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusColor(student.status) as any}>
                      {student.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Pencil className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Contact Student</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center">
                  No students found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Students;
