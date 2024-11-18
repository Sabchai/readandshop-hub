import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import { toast } from "sonner";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  price: number;
  coverUrl: string;
  isWishlisted?: boolean;
}

const BookCard = ({ id, title, author, price, coverUrl, isWishlisted = false }: BookCardProps) => {
  const handleAddToCart = () => {
    toast.success("Added to cart!");
  };

  const handleToggleWishlist = () => {
    toast.success(isWishlisted ? "Removed from wishlist" : "Added to wishlist");
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={coverUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg text-bookstore-text truncate">{title}</h3>
        <p className="text-gray-600 text-sm mb-2">{author}</p>
        <div className="flex justify-between items-center">
          <span className="text-bookstore-primary font-bold">${price.toFixed(2)}</span>
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleToggleWishlist}
              className={isWishlisted ? "text-red-500" : "text-gray-500"}
            >
              <Heart className="h-5 w-5" />
            </Button>
            <Button onClick={handleAddToCart} className="bg-bookstore-primary hover:bg-bookstore-secondary">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;