import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import PostsComponent from "./components/PostComponent";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
  );
}
