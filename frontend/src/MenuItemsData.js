import React from 'react';
import { Link } from 'react-router-dom';

export const menuItemsData = [
    {
      title: 'Art',
      url: '/Art',
    },
    {
      title: 'Artists',
      url: '/Artists',
    },
    {
      title: 'Museums',
      url: '/Museums',
    },
    {
        title: 'Manage',
        submenu: [
            {
              title: 'Create Art',
              url: 'CreateArt',
            },
            {
              title: 'Create Artist',
              url: 'CreateArtist',
            },
            {
              title: 'Create Museum',
              url: 'CreateMuseum',
            },
          ],
      },
  ];