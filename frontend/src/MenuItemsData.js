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
              title: 'Art',
              submenu: [
                {
                  title: 'Create Art',
                  url: 'CreateArt',
                },
                {
                  title: 'Manage Art',
                  url: 'ManageArt',
                },

              ],
            },
            {
              title: 'Artists',
              submenu: [
                {
                  title: 'Create Artist',
                  url: 'CreateArtist',
                },
                {
                  title: 'Manage Artists',
                  url: 'ManageArtists',
                },

              ],
            },
            {
              title: 'Museums',
              submenu: [
                {
                  title: 'Create Museum',
                  url: 'CreateMuseum',
                },
                {
                  title: 'Manage Museums',
                  url: 'ManageMuseums',
                },

              ],
            },
          ],
      },
  ];