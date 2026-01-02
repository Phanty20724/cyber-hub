import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuantumField from "@/components/QuantumField";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Events from "./pages/Events";
import Ideas from "./pages/Ideas";
import Executive from "./pages/Executive";
import Projects from "./pages/Projects";
import Join from "./pages/Join";
import Admin from "./pages/Admin";
import Portfoliathon from "./pages/Portfoliathon";
import Verification from "./pages/Verification";
import CertificateSearch from "./pages/CertificateSearch";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <QuantumField />
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/executive" element={<Executive />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/join" element={<Join />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/portfoliathon" element={<Portfoliathon />} />
          <Route path="/verify" element={<CertificateSearch />} />
          <Route path="/verify/:id" element={<Verification />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
