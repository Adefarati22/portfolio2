import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { lazy, Suspense } from "react";
import Logo from "@/component/Logo";
import ErrorBoundary from "@/component/ErrorBoundary";
const RootLayout = lazy(() => import("@/layout/RootLayout"));
const Hero = lazy(() => import("@/pages/hero/Hero"));
const Contact = lazy(() => import("@/pages/contact/Contact"));
const About = lazy(() => import("@/pages/about/About"));

export default function AppRoutes() {
  const routes = [
    {
      element: (
        <Suspense fallback={<Logo />}>
          <RootLayout />
        </Suspense>
      ),
      errorElement: <ErrorBoundary />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Logo />}>
              <Hero />
            </Suspense>
          ),
        },
        {
          path: "contact",

          element: (
            <Suspense fallback={<Logo />}>
              <Contact />
            </Suspense>
          ),
        },
        {
          path: "about",

          element: (
            <Suspense fallback={<Logo />}>
              <About />
            </Suspense>
          ),
        },
      ],
    },
  ];
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}
