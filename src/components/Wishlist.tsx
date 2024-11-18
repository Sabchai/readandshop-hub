import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import { toast } from "sonner";

const wishlist = [
  { 
    id: 1, 
    title: 'One Hundred Years of Solitude', 
    author: 'Gabriel García Márquez', 
    genre: 'Magical Realism', 
    publicationYear: 1967, 
    description: 'A novel that tells the multi-generational story of the Buendía family in the town of Macondo.',
    price: 12.99,
    status: 'Want to Read'
  },
  { 
    id: 2, 
    title: 'Don Quixote', 
    author: 'Miguel de Cervantes', 
    genre: 'Classic Literature', 
    publicationYear: 1605, 
    description: 'A tale of a man who imagines himself to be a chivalrous knight, with humorous and insightful adventures.',
    price: 10.99,
    status: 'Want to Read'
  },
  { 
    id: 3, 
    title: 'The Great Gatsby', 
    author: 'F. Scott Fitzgerald', 
    genre: 'Classic Literature', 
    publicationYear: 1925, 
    description: 'A novel set in the Jazz Age, exploring themes of wealth, class, love, and the American Dream through the tragic figure of Jay Gatsby.', 
    price: 10.99, 
    status: 'Want to Read'
  },
  { 
    id: 4, 
    title: 'The Catcher in the Rye', 
    author: 'J.D. Salinger', 
    genre: 'Fiction', 
    publicationYear: 1951, 
    description: 'The story of a troubled teenager, Holden Caulfield, and his journey of self-discovery in New York City.',
    price: 13.50,
    status: 'Want to Read'
  }
];

const Wishlist = () => {
  const handleAddToCart = (bookId: number) => {
    toast.success("Added to cart!");
    console.log("Added book to cart:", bookId);
  };

  const handleRemoveFromWishlist = (bookId: number) => {
    toast.success("Removed from wishlist");
    console.log("Removed book from wishlist:", bookId);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-bookstore-text">My Wishlist</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[500px] w-full pr-4">
          <div className="space-y-4">
            {wishlist.map(book => (
              <Card key={book.id} className="p-4 transition-all hover:shadow-md">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h4 className="text-lg font-semibold text-bookstore-text">{book.title}</h4>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveFromWishlist(book.id)}
                      >
                        <Heart className="h-5 w-5 text-red-500" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleAddToCart(book.id)}
                      >
                        <ShoppingCart className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">By {book.author}</p>
                  <p className="text-sm text-gray-600">Genre: {book.genre}</p>
                  <p className="text-sm text-gray-600">Published: {book.publicationYear}</p>
                  <p className="text-sm text-gray-600 line-clamp-2">{book.description}</p>
                  <p className="text-lg font-semibold text-bookstore-primary">${book.price}</p>
                </div>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

export default Wishlist;
