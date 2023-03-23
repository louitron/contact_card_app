import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}