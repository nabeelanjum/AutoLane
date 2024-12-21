import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
  QueryClientProviderProps,
} from '@tanstack/react-query';
import {createAsyncStoragePersister} from '@tanstack/query-async-storage-persister';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';

const QueryProvider = ({
  children,
}: {
  children: QueryClientProviderProps['children'];
}) => {
  const defaultOptions = {
    queries: {
      staleTime: Infinity, // disables automatic data refetching based on staleness
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  };

  const queryClient = new QueryClient({
    defaultOptions,
  });

  const asyncStoragePersister = createAsyncStoragePersister({
    storage: AsyncStorage,
    key: '@teslaApp',
  });

  const persistOptions = {persister: asyncStoragePersister, maxAge: Infinity};

  return (
    <PersistQueryClientProvider client={queryClient} persistOptions={persistOptions}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </PersistQueryClientProvider>
  );
};

export default QueryProvider;
