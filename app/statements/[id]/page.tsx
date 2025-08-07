import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SingleStatementPage } from '@/components/pages/SingleStatementPage';

interface StatementPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function StatementPage(props: StatementPageProps) {
  const params = await props.params;
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