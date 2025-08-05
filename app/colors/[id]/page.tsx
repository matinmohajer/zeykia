import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SingleColorPage } from '@/components/pages/SingleColorPage';

interface ColorPageProps {
  params: {
    id: string;
  };
}

export default function ColorPage({ params }: ColorPageProps) {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <SingleColorPage colorId={params.id} />
      </main>
      <Footer />
    </>
  );
} 