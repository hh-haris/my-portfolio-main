import { Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./use-theme.jsx";
import { GridBackground } from "./GridBackground.jsx";
import { ProtectedContent } from "./ProtectedContent.jsx";
import { PageSkeleton } from "./LoadingSkeleton.jsx";
import Navigation from "./Navigation.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Lab from "./Lab.jsx";
import Connect from "./Connect.jsx";
import NotFound from "./NotFound.jsx";

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
