import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ProductsPage } from './components/pages/ProductsPage';
import { SingleProductPage } from './components/pages/SingleProductPage';
import { ExportPage } from './components/pages/ExportPage';
import { ExclusiveProductsPage } from './components/pages/ExclusiveProductsPage';
import { StatementsPage } from './components/pages/StatementsPage';
import { SingleStatementPage } from './components/pages/SingleStatementPage';
import { ColorLibraryPage } from './components/pages/ColorLibraryPage';
import { SingleColorPage } from './components/pages/SingleColorPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedStatement, setSelectedStatement] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'products':
        return <ProductsPage onProductSelect={(product) => {
          setSelectedProduct(product);
          setCurrentPage('single-product');
        }} />;
      case 'single-product':
        return <SingleProductPage product={selectedProduct} onBack={() => setCurrentPage('products')} />;
      case 'export':
        return <ExportPage />;
      case 'exclusive':
        return <ExclusiveProductsPage />;
      case 'statements':
        return <StatementsPage onStatementSelect={(statement) => {
          setSelectedStatement(statement);
          setCurrentPage('single-statement');
        }} />;
      case 'single-statement':
        return <SingleStatementPage statement={selectedStatement} onBack={() => setCurrentPage('statements')} />;
      case 'colors':
        return <ColorLibraryPage onColorSelect={(color) => {
          setSelectedColor(color);
          setCurrentPage('single-color');
        }} />;
      case 'single-color':
        return <SingleColorPage color={selectedColor} onBack={() => setCurrentPage('colors')} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}