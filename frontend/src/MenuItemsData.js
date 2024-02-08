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
              title: 'Artist',
              submenu: [
                {
                  title: 'Create Artist',
                  url: 'CreateArtist',
                },
                {
                  title: 'Manage Artist',
                  url: 'ManageArtists',
                },

              ],
            },
            {
              title: 'Museum',
              submenu: [
                {
                  title: 'Create Museum',
                  url: 'CreateMuseum',
                },
                {
                  title: 'Manage Museum',
                  url: 'ManageMuseums',
                },

              ],
            },
          ],
      },
  ];