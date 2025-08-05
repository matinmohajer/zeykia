import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/components/pages/HomePage';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <HomePage />
      </main>
      <Footer />
    </>
  );
} 