import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppRouter from '@/router/AppRouter.tsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from '@/hooks/api/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';

const main = async () => {
  const root = createRoot(document.querySelector('#root') as Element);

  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </StrictMode>,
  );
};

main();
