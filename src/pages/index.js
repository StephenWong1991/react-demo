import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;
const Lifecycle = Loadable({
  loader: () => import('./Lifecycle'),
  loading: Loading
});
const Hook = Loadable({
  loader: () => import('./Hook'),
  loading: Loading
});
const ReactRedux = Loadable({
  loader: () => import('./ReactRedux'),
  loading: Loading
});

export default {
  Lifecycle,
  Hook,
  ReactRedux
}