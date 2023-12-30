import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main.jsx';
import Home from './pages/Home.jsx';
import RoomDetails from './pages/RoomDetails.jsx';
import RoomProvider from './context/RoomContext.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/room/:id',
        element: <RoomDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RoomProvider>
    <RouterProvider router={router} />
  </RoomProvider>
);
