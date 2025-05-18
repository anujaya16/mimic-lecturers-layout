
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const weeklySchedule = [
  {
    day: "Monday",
    classes: [
      {
        id: "1",
        course: "CS101",
        title: "Introduction to Computer Science",
        time: "09:00 AM - 10:30 AM",
        location: "Engineering Hall 204",
        type: "Lecture",
      },
      {
        id: "2",
        course: "CS305",
        title: "Database Systems",
        time: "02:00 PM - 03:30 PM",
        location: "Computing Lab 101",
        type: "Lab",
      },
    ],
  },
  {
    day: "Tuesday",
    classes: [
      {
        id: "3",
        course: "CS202",
        title: "Data Structures and Algorithms",
        time: "11:00 AM - 12:30 PM",
        location: "Engineering Hall 108",
        type: "Lecture",
      },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      {
        id: "4",
        course: "CS101",
        title: "Introduction to Computer Science",
        time: "09:00 AM - 10:30 AM",
        location: "Engineering Hall 204",
        type: "Lecture",
      },
      {
        id: "5",
        course: "CS230",
        title: "Web Development",
        time: "03:30 PM - 05:00 PM",
        location: "Computing Lab 103",
        type: "Lab",
      },
    ],
  },
  {
    day: "Thursday",
    classes: [
      {
        id: "6",
        course: "CS202",
        title: "Data Structures and Algorithms",
        time: "11:00 AM - 12:30 PM",
        location: "Engineering Hall 108",
        type: "Lecture",
      },
      {
        id: "7",
        course: "CS410",
        title: "Machine Learning",
        time: "01:00 PM - 02:30 PM",
        location: "AI Lab 201",
        type: "Lab",
      },
    ],
  },
  {
    day: "Friday",
    classes: [
      {
        id: "8",
        course: "CS305",
        title: "Database Systems",
        time: "10:00 AM - 11:30 AM",
        location: "Engineering Hall 105",
        type: "Lecture",
      },
      {
        id: "9",
        course: "Office Hours",
        title: "Student Consultations",
        time: "02:00 PM - 04:00 PM",
        location: "Faculty Office 3-42",
        type: "Office Hours",
      },
    ],
  },
];

const getClassTypeColor = (type: string) => {
  switch (type) {
    case "Lecture":
      return "blue";
    case "Lab":
      return "green";
    case "Office Hours":
      return "orange";
    default:
      return "default";
  }
};

const Schedules = () => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-3xl font-bold mb-1">Schedules</h2>
        <p className="text-muted-foreground">
          Manage your teaching and office hours schedule
        </p>
      </div>

      <div className="flex flex-wrap justify-between items-center gap-4 mb-2">
        <h3 className="text-xl font-semibold">Current Term (Fall 2023)</h3>
        <div className="flex gap-2">
          <Button variant="outline">Add Event</Button>
          <Button>Export Schedule</Button>
        </div>
      </div>

      <Tabs defaultValue="week" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="week">Weekly View</TabsTrigger>
          <TabsTrigger value="month">Monthly View</TabsTrigger>
          <TabsTrigger value="agenda">Agenda</TabsTrigger>
        </TabsList>

        <TabsContent value="week">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {daysOfWeek.map((day, index) => {
              const daySchedule = weeklySchedule.find((d) => d.day === day);
              return (
                <Card key={day} className="h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{day}</CardTitle>
                    <CardDescription>
                      {daySchedule?.classes.length || 0} Classes
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4">
                    {daySchedule?.classes.length ? (
                      daySchedule.classes.map((cls) => (
                        <div
                          key={cls.id}
                          className="p-3 bg-secondary/40 rounded-md space-y-2"
                        >
                          <div className="flex justify-between items-start">
                            <Badge variant={getClassTypeColor(cls.type) as any}>
                              {cls.type}
                            </Badge>
                            <Badge variant="outline">{cls.course}</Badge>
                          </div>
                          <h4 className="font-medium text-sm mt-2">
                            {cls.title}
                          </h4>
                          <div className="text-xs text-muted-foreground space-y-1">
                            <div className="flex items-center">
                              <Clock className="mr-1 h-3 w-3" />
                              {cls.time}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="mr-1 h-3 w-3" />
                              {cls.location}
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="flex flex-col items-center justify-center h-32 text-center">
                        <Calendar className="h-8 w-8 text-muted-foreground mb-2" />
                        <p className="text-sm text-muted-foreground">No classes</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="month">
          <div className="flex justify-center items-center p-12 text-center bg-secondary/40 rounded-lg">
            <div className="max-w-md">
              <h3 className="text-xl font-medium mb-4">Monthly View Coming Soon</h3>
              <p className="text-muted-foreground mb-6">
                We're working on implementing a calendar monthly view for a better
                scheduling experience.
              </p>
              <Button variant="outline">Use Weekly View</Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="agenda">
          <div className="flex justify-center items-center p-12 text-center bg-secondary/40 rounded-lg">
            <div className="max-w-md">
              <h3 className="text-xl font-medium mb-4">Agenda View Coming Soon</h3>
              <p className="text-muted-foreground mb-6">
                We're working on implementing an agenda list view for a more
                detailed scheduling experience.
              </p>
              <Button variant="outline">Use Weekly View</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Schedules;
