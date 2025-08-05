import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ProductsPage } from '@/components/pages/ProductsPage';

export default function Products() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <ProductsPage />
      </main>
      <Footer />
    </>
  );
} 