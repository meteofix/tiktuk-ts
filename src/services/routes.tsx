import React from 'react';
import { Navigate } from 'react-router-dom';
import TrendingFeed from '../pages/TrendingFeed';
import UserProfile from '../pages/UserProfile';


type Routes = Array<{
  path: string,
  Element: JSX.Element
}>

export const routes: Routes = [
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
