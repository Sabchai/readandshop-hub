import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const purchases = [
  { 
    id: 1, 
    title: '1984', 
    date: '2023-10-01', 
    price: 9.99, 
    quantity: 1, 
    total: 9.99, 
    status: 'Delivered', 
    paymentMethod: 'Credit Card' 
  },
  { 
    id: 2, 
    title: 'The Lord of the Rings', 
    date: '2023-09-15', 
    price: 19.99, 
    quantity: 2, 
    total: 39.98, 
    status: 'Pending', 
    paymentMethod: 'PayPal' 
  },
  { 
    id: 3, 
    title: 'Cien Años de Soledad', 
    date: '2023-08-20', 
    price: 14.99, 
    quantity: 1, 
    total: 14.99, 
    status: 'Delivered', 
    paymentMethod: 'Credit Card' 
  },
];

const PurchaseHistory = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-bookstore-text">Purchase History</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] w-full pr-4">
          <div className="space-y-4">
            {purchases.map(purchase => (
              <Card key={purchase.id} className="p-4 transition-all hover:shadow-md">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-bookstore-text">{purchase.title}</h4>
                  <Badge variant={purchase.status === 'Delivered' ? "default" : "secondary"}>
                    {purchase.status}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <p className="text-gray-600">Date: {purchase.date}</p>
                  <p className="text-gray-600">Price: ${purchase.price}</p>
                  <p className="text-gray-600">Quantity: {purchase.quantity}</p>
                  <p className="text-gray-600">Total: ${purchase.total}</p>
                  <p className="text-gray-600">Payment: {purchase.paymentMethod}</p>
                </div>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

export default PurchaseHistory;