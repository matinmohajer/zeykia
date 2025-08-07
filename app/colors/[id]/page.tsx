import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SingleColorPage } from '@/components/pages/SingleColorPage';

interface ColorPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ColorPage(props: ColorPageProps) {
  const params = await props.params;
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