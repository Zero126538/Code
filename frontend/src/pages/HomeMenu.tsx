import React, { useState } from 'react';
import Router from '../router';
import { Link } from 'react-router-dom';
import { Layout, Flex, Button, Dropdown, MenuProps, Menu } from 'antd';
import { UsergroupAddOutlined, PrinterOutlined, TeamOutlined, StarOutlined, UserOutlined, SettingOutlined, ApiOutlined, PieChartOutlined } from '@ant-design/icons';


const { Header, Sider, Footer, Content } = Layout;

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a className="tetx-sm border-b border-b-slate-500 pb-2 flex" target="_blank" rel="noopener noreferrer" href="https://muls.edu.mn/teacher.php?value_one=ZW5jb2RldXNlcmlkNDg5">
        <SettingOutlined className="pr-1"/>
        Хувийн мэдээлэл
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a className="text-sm" target="_blank" rel="noopener noreferrer" href="http://localhost:5173/">
        <ApiOutlined className="pr-1"/>
        Гарах
      </a>
    ),
  },
];

const items2: MenuProps['items'] = [
  {
    label: "Багшийн цагийн бүртгэл",
    key: 'key',
    disabled: true
  },
];



type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items3: MenuItem[] = [
  getItem(<a href="http://localhost:5173/rate">Үнэлгээний тест</a>, '1', <PieChartOutlined />),
  getItem('А цагийн бүртгэл', 'sub1', <UserOutlined />, [
    getItem(<a href="http://localhost:5173/a1">Сургалт, заах арга зүйн үйлчилгээ</a>, '2'),
    getItem(<a href="http://localhost:5173/a2">Эрдэм шинжилгээ, мэргэжлийн үйлчилгээ</a>, '3'),
  ]),
  getItem('Б цагийн бүртгэл', 'sub2', <TeamOutlined />, [
    getItem(<a href="http://localhost:5173/b1">I түвшин</a>, '4'),
    getItem(<a href="http://localhost:5173/b2">II түвшин</a>, '5'),
    getItem(<a href="http://localhost:5173/b3">III түвшин</a>, '6'),
    getItem(<a href="http://localhost:5173/b4">IV түвшин</a>, '7'),
    getItem(<a href="http://localhost:5173/b5">V түвшин</a>, '8'),
    getItem(<a href="http://localhost:5173/b6">VI түвшин</a>, '9'),
    getItem(<a href="http://localhost:5173/b7">VII түвшин</a>, '10'),
    getItem(<a href="http://localhost:5173/b8">VIII түвшин</a>, '11'),
    getItem(<a href="http://localhost:5173/b9">IX түвшин</a>, '12'),
  ]),
  getItem('В цагийн бүртгэл', 'sub3', <UsergroupAddOutlined />, [
    getItem('В1 танхимын гадуурх сургалт', 'sub4', null, [
      getItem(<a href="http://localhost:5173/c1">Хичээлд бэлтгэх</a>, '13'), 
      getItem(<a href="http://localhost:5173/c1">Шалгалт</a>, '14')]),
    getItem(<a href="http://localhost:5173/c2">В2 мэргэжлийн үйлчилгээний ажил</a>, '15'),
  ]),
  getItem(<a href="http://localhost:5173/review">Санал асуулга</a>, '16', <StarOutlined />),
  getItem('Тайлан хэвлэх', 'sub5', <PrinterOutlined />, [
    getItem(<a href="http://localhost:5173/exportA">А цагийн тайлан хэвлэх</a>, '17'),
    getItem(<a href="http://localhost:5173/exportB">Б цагийн тайлан хэвлэх</a>, '18'),
    getItem(<a href="http://localhost:5173/exportC">В цагийн тайлан хэвлэх</a>, '19'),
  ]),
];

const HomeMenu = () => {
const [collapsed, setCollapsed] = useState(false);

  return(
  <Flex gap="middle" wrap="wrap">
    <Layout style={layoutStyle}>
      <Header className="p-0 h-16 bg-slate-800 text-white flex">
        <Link to='/' className="gap-1 flex justify-center items-center pl-32">
          <img src="/src/assets/1.png" alt="Логоны зураг" className="h-10 w-10" />
          <p className="text-base font-medium">ХААИС</p>
        </Link>
          <Dropdown menu={{ items }} placement="bottom" arrow className="absolute top-4 right-10 text-sm">
            <Button className="text-white border-slate-500">Профайл</Button>
          </Dropdown>
      </Header>
        <Layout>
          <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} width="350px">
            <Menu className="border-b border-slate-500 pt-2 pb-2 text-lg text-center" theme="dark" items={items2} />;
            <Menu theme="dark" mode="inline" items={items3} className="" />
          </Sider>
          <Content className="bg-slate-100">
            <div>
              <Router />
              <Footer className="text-center text-white bg-slate-800 text-sm">2024 © Хөдөө аж ахуйн их сургуулийн Мэдээлэл технологи | <a href="https://ant.design/components/menu">Вэб хуудас</a> | <a href="https://nerdcave.com/tailwind-cheat-sheet">Гарын авлага</a></Footer>
            </div>
          </Content>
        </Layout>
    </Layout>
  </Flex>
);
};

const layoutStyle = {
  overflow: 'hidden',
  maxWidth: '100%',
};

export default HomeMenu;