import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ExclusiveProductsPage } from '@/components/pages/ExclusiveProductsPage';

export default function Exclusive() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <ExclusiveProductsPage />
      </main>
      <Footer />
    </>
  );
} 