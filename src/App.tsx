import { Outlet } from 'react-router-dom';

import { useResetError } from '@/hooks/common/useResetError';
import ErrorBoundary from '@/components/common/ErrorBoundary/ErrorBoundary';
import Error from '@/components/common/Error/Error';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

function App() {
  const { handleErrorReset } = useResetError();

  return (
    <ErrorBoundary Fallback={Error} onReset={handleErrorReset}>
      <div className="flex min-h-screen w-screen flex-col bg-white">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
