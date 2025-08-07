import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SingleProductPage } from '@/components/pages/SingleProductPage';

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage(props: ProductPageProps) {
  const params = await props.params;
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