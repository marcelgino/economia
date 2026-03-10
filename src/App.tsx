/*import React from 'react';
import { createHashRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AuthPage } from './pages/AuthPage';
import { PublishPage } from './pages/PublishPage';
import { ArticlePage } from './pages/ArticlePage';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#F27D26] selection:text-white flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'auth',
        element: <AuthPage />,
      },
      {
        path: 'publish',
        element: <PublishPage />,
      },
      {
        path: 'article/:id',
        element: <ArticlePage />,
      },
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}*/
import React from 'react';
import { createHashRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AuthPage } from './pages/AuthPage';
import { PublishPage } from './pages/PublishPage';
import { ArticlePage } from './pages/ArticlePage';
import { ContactPage } from './pages/ContactPage';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#F27D26] selection:text-white flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'auth',
        element: <AuthPage />,
      },
      {
        path: 'publish',
        element: <PublishPage />,
      },
      {
        path: 'article/:id',
        element: <ArticlePage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

