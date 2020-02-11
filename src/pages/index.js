import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;
const Home = Loadable({
  loader: () => import('./Home'),
  loading: Loading
});
const About = Loadable({
  loader: () => import('./About'),
  loading: Loading
});
const Users = Loadable({
  loader: () => import('./Users'),
  loading: Loading
});

export default {
  Home,
  About,
  Users
}