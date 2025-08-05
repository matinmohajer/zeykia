import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SingleStatementPage } from '@/components/pages/SingleStatementPage';

interface StatementPageProps {
  params: {
    id: string;
  };
}

export default function StatementPage({ params }: StatementPageProps) {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <SingleStatementPage statementId={params.id} />
      </main>
      <Footer />
    </>
  );
} 