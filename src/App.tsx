// File: src/App.tsx

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Quote from "./pages/Quote";
import Courier from "./pages/Courier";
import Transport from "./pages/Transport";
import Towing from "./pages/Towing";
import Community from "./pages/Community";
import CommunityInterest from "./pages/CommunityInterest";
import About from "./pages/About";
import WorkWithUs from "./pages/WorkWithUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/courier" element={<Courier />} />
            <Route path="/transport" element={<Transport />} />
            <Route path="/towing" element={<Towing />} />
            <Route path="/community" element={<Community />} />
            <Route path="/community-interest" element={<CommunityInterest />} />
            <Route path="/about" element={<About />} />
            <Route path="/work-with-us" element={<WorkWithUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;