import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, User } from "lucide-react";

const Profile = () => {
  const user = {
    name: "Juan Pérez",
    email: "juan@correo.com",
    picture: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    role: "user",
    phone: "+34 612 345 678",
    location: "Madrid, España",
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white shadow-lg animate-fade-in">
      <CardHeader className="text-center pb-2">
        <div className="flex justify-center mb-4">
          <Avatar className="w-24 h-24">
            <AvatarImage src={user.picture} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
        <CardTitle className="text-2xl font-bold text-bookstore-text">
          {user.name}
        </CardTitle>
        <span className="inline-block px-3 py-1 text-sm font-medium text-bookstore-secondary bg-bookstore-background rounded-full mt-2">
          {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
        </span>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4">
          <div className="flex items-center space-x-3 text-bookstore-text">
            <Mail className="h-5 w-5 text-bookstore-primary" />
            <span>{user.email}</span>
          </div>
          <div className="flex items-center space-x-3 text-bookstore-text">
            <Phone className="h-5 w-5 text-bookstore-primary" />
            <span>{user.phone}</span>
          </div>
          <div className="flex items-center space-x-3 text-bookstore-text">
            <MapPin className="h-5 w-5 text-bookstore-primary" />
            <span>{user.location}</span>
          </div>
          <div className="flex items-center space-x-3 text-bookstore-text">
            <User className="h-5 w-5 text-bookstore-primary" />
            <span>Role: {user.role.charAt(0).toUpperCase() + user.role.slice(1)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Profile;