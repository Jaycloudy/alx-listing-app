import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';

export default function Home() {
  return (
    <main className="p-8">
      <Card 
        title="Beachfront Villa" 
        description="Luxury property with ocean view" 
        imageUrl="/assets/Listing.jpg" 
      />
      <div className="mt-4">
        <Button onClick={() => alert('Booked!')}>
          Reserve Now
        </Button>
      </div>
    </main>
  );
}