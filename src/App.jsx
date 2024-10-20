import {
  createRoutesFromElements,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { lazy, Suspense } from "react";

const Landing = lazy(() => import("./pages/Landing"));
const About = lazy(() => import("./pages/About"));
const Service = lazy(() => import("./pages/Service"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Contact = lazy(() => import ("./pages/Contact"))

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </>
  )
);

function App() {
  return (
    <Suspense fallback={'Loading...'}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;