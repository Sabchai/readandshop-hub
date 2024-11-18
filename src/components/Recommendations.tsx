import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import { toast } from "sonner";

const books = [
  { 
    id: 1, 
    title: '1984', 
    author: 'George Orwell', 
    genre: 'Dystopian', 
    price: 9.99, 
    publicationYear: 1949, 
    description: 'A novel about a totalitarian regime that uses surveillance and propaganda to control its citizens.',
    quantityAvailable: 120 
  },
  { 
    id: 2, 
    title: 'The Lord of the Rings', 
    author: 'J.R.R. Tolkien', 
    genre: 'Fantasy', 
    price: 19.99, 
    publicationYear: 1954, 
    description: 'An epic fantasy trilogy that follows a hobbit on his quest to destroy a powerful ring.',
    quantityAvailable: 250 
  },
  { 
    id: 3, 
    title: 'One Hundred Years of Solitude', 
    author: 'Gabriel García Márquez', 
    genre: 'Magical realism', 
    price: 14.99, 
    publicationYear: 1967, 
    description: 'A multi-generational story of the Buendía family, set in the fictional town of Macondo.',
    quantityAvailable: 75 
  },
];

const Recommendations = () => {
  const handleAddToCart = (bookId: number) => {
    toast.success("Added to cart!");
    console.log("Added book to cart:", bookId);
  };

  const handleAddToWishlist = (bookId: number) => {
    toast.success("Added to wishlist!");
    console.log("Added book to wishlist:", bookId);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-bookstore-text">Recommended for You</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[500px] w-full pr-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {books.map(book => (
              <Card key={book.id} className="p-4 transition-all hover:shadow-md">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h4 className="text-lg font-semibold text-bookstore-text">{book.title}</h4>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleAddToWishlist(book.id)}
                      >
                        <Heart className="h-5 w-5" />
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
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold text-bookstore-primary">${book.price}</p>
                    <p className="text-sm text-gray-600">{book.quantityAvailable} available</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

export default Recommendations;
