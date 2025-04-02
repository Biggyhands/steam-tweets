"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
/* import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental"; */
import React from "react";

const queryClient = new QueryClient();

interface Props {
  children: React.ReactNode;
  /*   dehydratedState?: any; */
}

export function ReactQueryProvider({ children /*  dehydratedState */ }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      {/*  <ReactQueryStreamedHydration dehydratedState={dehydratedState}> */}
      {children}
      {/* </ReactQueryStreamedHydration> */}
    </QueryClientProvider>
  );
}
