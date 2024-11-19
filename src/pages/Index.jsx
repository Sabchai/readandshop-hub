import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import PurchaseHistory from "@/components/PurchaseHistory";
import Wishlist from "@/components/Wishlist";
import Recommendations from "@/components/Recommendations";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen bg-bookstore-background">
      <Navbar />
      <main className="container mx-auto py-8 px-4 animate-fade-in">
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
            <TabsTrigger value="history">Purchase History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="space-y-6">
            <Profile />
          </TabsContent>
          
          <TabsContent value="recommendations" className="space-y-6">
            <Recommendations />
          </TabsContent>
          
          <TabsContent value="wishlist" className="space-y-6">
            <Wishlist />
          </TabsContent>
          
          <TabsContent value="history" className="space-y-6">
            <PurchaseHistory />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;