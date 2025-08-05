import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ExportPage } from '@/components/pages/ExportPage';

export default function Export() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <ExportPage />
      </main>
      <Footer />
    </>
  );
} 