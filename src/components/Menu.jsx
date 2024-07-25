import React from 'react';
import { AppstoreOutlined,
    HomeOutlined, 
    AreaChartOutlined,
    MailOutlined,
    BarsOutlined,    
    PayCircleOutlined,
    SettingOutlined 
} from '@ant-design/icons';

import { Menu } from 'antd';
const items = [
  {
    key: 'home',
    icon: <HomeOutlined />,
    label: 'Home'
      
  },
  {
    key: 'activity',
    icon: <AppstoreOutlined />,
    label: 'Activity',
    children: [
      {
        key: '5',
        label: 'Option 5',
      },
      {
        key: '6',
        label: 'Option 6',
      },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          {
            key: '7',
            label: 'Option 7',
          },
          {
            key: '8',
            label: 'Option 8',
          },
        ],
      },
    ],
  },
  {
    key: 'progress',
    label: 'Progress',
    icon: <AreaChartOutlined />,
    children: [
      {
        key: '9',
        label: 'Option 9',
      },
      {
        key: '10',
        label: 'Option 10',
      },
      {
        key: '11',
        label: 'Option 11',
      },
      {
        key: '12',
        label: 'Option 12',
      },
    ],
  },
  {
    key:'task',
    label: 'Task',
    icon: <BarsOutlined />,
    children: [
      {
        key: '1-1',
        label: 'Item 1',
        type: 'group',
        children: [
          {
            key: '1',
            label: 'Option 1',
          },
          {
            key: '2',
            label: 'Option 2',
          },
        ],
    },
    {
      key: '1-2',
      label: 'Item 2',
      type: 'group',
      children: [
        {
          key: '3',
          label: 'Option 3',
        },
        {
          key: '4',
          label: 'Option 4',
        },
      ],
    },
  ],

  },
  {
    key:'payment',
    label: 'Payment',
    icon: <PayCircleOutlined/>,

  },
  {
    key:'settings',
    label: 'Settings',
    icon: <SettingOutlined/>,

  }
];
const onClick = (e) => {
  console.log('click', e);
};
const App = ({darkTheme}) => (
  <Menu
    onClick={onClick}
    // style={{
    //   width: 200,
    // }}
    mode="inline"
    theme={darkTheme ? 'dark' : 'light' }
    className='menu-bar'
    items={items}
  />
);
export default App;