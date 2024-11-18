import BookCard from "./BookCard";

const Recommendations = () => {
  const recommendedBooks = [
    {
      id: "1",
      title: "Project Hail Mary",
      author: "Andy Weir",
      price: 24.99,
      coverUrl: "/placeholder.svg"
    },
    // Add more recommended books
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-semibold mb-4 text-bookstore-text">Recommended for You</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendedBooks.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
};

export default Recommendations;