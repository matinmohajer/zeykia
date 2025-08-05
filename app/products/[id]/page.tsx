import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SingleProductPage } from '@/components/pages/SingleProductPage';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <SingleProductPage productId={params.id} />
      </main>
      <Footer />
    </>
  );
} 