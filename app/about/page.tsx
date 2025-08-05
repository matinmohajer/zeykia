import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { AboutPage } from '@/components/pages/AboutPage';

export default function About() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <AboutPage />
      </main>
      <Footer />
    </>
  );
} 