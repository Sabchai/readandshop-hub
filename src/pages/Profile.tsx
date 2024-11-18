import { Card } from "@/components/ui/card";
import PurchaseHistory from "@/components/PurchaseHistory";
import Recommendations from "@/components/Recommendations";
import Wishlist from "@/components/Wishlist";

const Profile = () => {
  return (
    <div className="min-h-screen bg-bookstore-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Recommendations />
          <Wishlist />
        </div>
        <PurchaseHistory />
      </div>
    </div>
  );
};

export default Profile;