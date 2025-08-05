import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StatementsPage } from '@/components/pages/StatementsPage';

export default function Statements() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <StatementsPage />
      </main>
      <Footer />
    </>
  );
} 