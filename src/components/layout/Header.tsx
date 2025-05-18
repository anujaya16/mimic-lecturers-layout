
import { Bell, Search, Sun } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="h-16 border-b border-border flex items-center justify-between px-6">
      <h1 className="text-2xl font-semibold">Lecturer Dashboard</h1>
      
      <div className="flex items-center gap-3">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search..."
            className="w-[250px] pl-9 bg-secondary/40 border-0"
          />
        </div>
        
        <Button variant="outline" size="icon" className="rounded-full">
          <Sun className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle light mode</span>
        </Button>
        
        <Button variant="outline" size="icon" className="rounded-full relative">
          <Bell className="h-[1.2rem] w-[1.2rem]" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
          <span className="sr-only">Notifications</span>
        </Button>
        
        <Avatar>
          <AvatarImage src="" />
          <AvatarFallback>LC</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
