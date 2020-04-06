import React from 'react';
import {Redirect} from "react-router-dom";
import Home from '../application/Home';
import Recommend from '../application/Recommend';
import Singers from '../application/Singers';
import Rank from '../application/Rank';
import Album from '../application/Album'
import Singer from "../application/Singer";
import Search from '../application/Search';

export default [
  {
    path: "/",
    component: Home,
    routes: [
      {
        path: "/",
        exact: true,
        render: () => (
          <Redirect to={"/recommend"}/>
        )
      },
      {
        path: "/recommend",
        component: Recommend,
        routes: [{
          path: '/recommend/:id',
          component: Album
        }]
      },
      {
        path: "/rank",
        component: Rank,
        routes: [{
          path: '/rank/:id',
          component: Album
        }]
      },
      {
        path: '/singers',
        component: Singers,
        key: 'singers',
        routes: [{
          path: '/singers/:id',
          key: 'singer',
          component: Singer
        }]
      },
      {
        path: "/album/:id",
        exact: true,
        key: "album",
        component: Album
      },
      {
        path: "/search",
        exact: true,
        key: "search",
        component: Search
      }
    ]
  }
]