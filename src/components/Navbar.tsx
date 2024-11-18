import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, BookOpen, Heart } from "lucide-react";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <BookOpen className="h-8 w-8 text-bookstore-primary" />
              <span className="ml-2 text-xl font-semibold text-bookstore-text">MyBookstore</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5 text-bookstore-text" />
                <span className="absolute -top-1 -right-1 bg-bookstore-primary text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  3
                </span>
              </Button>
            </Link>
            <Link to="/wishlist">
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5 text-bookstore-text" />
              </Button>
            </Link>
            <ProfileDropdown />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;