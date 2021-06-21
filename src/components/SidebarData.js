import React from 'react';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Explore',
    path: '/Explore',
    
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Skin',
        path: '/Explore/Skin',
        
      },
      {
        title: 'Hair',
        path: '/Explore/Hair',
        
      },
      {
        title: 'Ayurveda',
        path: '/Explore/Ayurveda',
       
      }
    ]
  },
  {
    title: 'Your Orders',
    path: '/Your Orders',
    
  },
  {
    title: 'Organicash',
    path: '/Organicash',
    
  },
  {
    title: 'Your Profile',
    path: '/Your Profile',
    
  },
  {
    title: 'Nortifications',
    path: '/Nortifications',
    
  },
  {
    title: 'Help',
    path: '/Help',
    
  },
  {
    title: 'Customer Care',
    path: '/Customer Care',
    
  },
  {
    title: 'Logout',
    path: '/Logout',
    
  }
];