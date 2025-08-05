import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ColorLibraryPage } from '@/components/pages/ColorLibraryPage';

export default function Colors() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <ColorLibraryPage />
      </main>
      <Footer />
    </>
  );
} 