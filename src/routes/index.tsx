import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import JsonBeautifier from '../pages/JsonBeautifier';
import TimestampConverter from '../pages/TimestampConverter';
import AsciiTable from '../pages/AsciiTable';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <JsonBeautifier /> },
      {
        path: 'timestamp',
        element: <TimestampConverter />,
      },
      {
        path: 'ascii',
        element: <AsciiTable />,
      },
    ],
  },
]);

export default router;