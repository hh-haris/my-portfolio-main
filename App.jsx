import { Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "@/hooks/use-theme";
import { GridBackground } from "./components/GridBackground";
import { ProtectedContent } from "./components/ProtectedContent";
import { PageSkeleton } from "./components/LoadingSkeleton";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Lab from "./pages/Lab";
import Connect from "./pages/Connect";
import NotFound from "./pages/NotFound";

function AnimatedRoutes() {
  const location = useLocation();
  const is404 = !['/', '/about', '/lab', '/connect'].includes(location.pathname);
  
  return (
    <>
      {!is404 && <Navigation />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Suspense fallback={<PageSkeleton />}><Home /></Suspense>} />
          <Route path="/about" element={<Suspense fallback={<PageSkeleton />}><About /></Suspense>} />
          <Route path="/lab" element={<Suspense fallback={<PageSkeleton />}><Lab /></Suspense>} />
          <Route path="/connect" element={<Suspense fallback={<PageSkeleton />}><Connect /></Suspense>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

const App = () => (
  <ThemeProvider>
    <ProtectedContent>
      <BrowserRouter>
        <GridBackground>
          <AnimatedRoutes />
        </GridBackground>
      </BrowserRouter>
    </ProtectedContent>
  </ThemeProvider>
);

export default App;
