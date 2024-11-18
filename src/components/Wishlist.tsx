import BookCard from "./BookCard";

const Wishlist = () => {
  const wishlistedBooks = [
    {
      id: "1",
      title: "The Midnight Library",
      author: "Matt Haig",
      price: 16.99,
      coverUrl: "/placeholder.svg",
      isWishlisted: true
    },
    // Add more wishlisted books
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-semibold mb-4 text-bookstore-text">My Wishlist</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistedBooks.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;