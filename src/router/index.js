import React from 'react';
import HYDiscover from '@/pages/discover';
import HYRecommend from '../pages/discover/c-pages/recommend';
import HYRanking from '../pages/discover/c-pages/ranking';
import HYSongs from '../pages/discover/c-pages/songs';
import HYDjradio from '../pages/discover/c-pages/djradio';
import HYArtist from '../pages/discover/c-pages/artist';
import HYAlbum from '../pages/discover/c-pages/album';
import HYMine from '@/pages/mine';
import HYFriend from '@/pages/friend';
import { Redirect } from 'react-router';
const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: '/discover',
    component: HYDiscover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        path: '/discover/recommend',
        component: HYRecommend,
      },
      {
        path: '/discover/ranking',
        component: HYRanking,
      },
      {
        path: '/discover/songs',
        component: HYSongs,
      },
      {
        path: '/discover/djradio',
        exact: true,
        component: HYDjradio,
      },
      {
        path: '/discover/artist',
        component: HYArtist,
      },
      {
        path: '/discover/album',
        component: HYAlbum,
      },
      // {
      //   path: '/discover/player',
      //   component: HYPlayer,
      // },
    ],
  },
  {
    path: '/mine',
    exact: true,
    component: HYMine,
  },
  {
    path: '/friend',
    exact: true,
    component: HYFriend,
  },
];

export default routes;
