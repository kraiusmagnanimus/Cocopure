import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../components/common/Layout';
import { Header, Footer } from '../components/layout';
import { Home, Products, OurStory, Sustainability, Contact } from '../pages';

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Layout>
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </Layout>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout><Home /></AppLayout>,
  },
  {
    path: "/products",
    element: <AppLayout><Products /></AppLayout>,
  },
  {
    path: "/About-us",
    element: <AppLayout><OurStory /></AppLayout>,
  },
  {
    path: "/about-us",
    element: <AppLayout><Sustainability /></AppLayout>,
  },
  {
    path: "/contact",
    element: <AppLayout><Contact /></AppLayout>,
  },
  // Placeholder routes for legal pages
  {
    path: "/privacy",
    element: <AppLayout><div className="py-20 text-center">Privacy Policy (Coming Soon)</div></AppLayout>,
  },
  {
    path: "/terms",
    element: <AppLayout><div className="py-20 text-center">Terms of Service (Coming Soon)</div></AppLayout>,
  },
], {
  // Root domain deployment for mycocopure.com
  basename: "/Cocopure"
});

export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};