import React from 'react';
import { Navigate } from 'react-router-dom';
import TrendingFeed from '../pages/TrendingFeed';
import UserProfile from '../pages/UserProfile';

export const routes = [
  {
    path: '/',
    Element: <TrendingFeed />,
  },
  {
    path: '/@:id',
    Element: <UserProfile />,
  },
  {
    path: '/*',
    Element: <Navigate to="/" />,
  },
];
