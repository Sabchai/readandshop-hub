import { ScrollArea } from "@/components/ui/scroll-area";

const PurchaseHistory = () => {
  const purchases = [
    {
      id: "1",
      date: "2024-02-15",
      books: [
        { title: "The Great Gatsby", price: 12.99 },
        { title: "1984", price: 14.99 }
      ],
      total: 27.98
    },
    // Add more purchase history items
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-semibold mb-4 text-bookstore-text">Purchase History</h2>
      <ScrollArea className="h-[400px]">
        {purchases.map((purchase) => (
          <div key={purchase.id} className="mb-4 p-4 border rounded-lg">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Order Date: {purchase.date}</span>
              <span className="font-semibold text-bookstore-primary">Total: ${purchase.total}</span>
            </div>
            <div className="space-y-2">
              {purchase.books.map((book, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span>{book.title}</span>
                  <span>${book.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
};

export default PurchaseHistory;