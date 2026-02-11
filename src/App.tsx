import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import { lazy, Suspense } from "react";

const About = lazy(() => import("./components/About"));
const Features = lazy(() => import("./components/Features"));
const Download = lazy(() => import("./components/Download"));
const Contribute = lazy(() => import("./components/Contribute"));

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <About />
        <Features />
        <Download />
        <Contribute />
      </Suspense>
    </>
  );
}

export default App;
