import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import User3_1 from '../subpages/User3_1';
import User3_2 from '../subpages/User3_2';
import User3_3 from '../subpages/User3_3';
import User3_4 from '../subpages/User3_4';
import User3_5 from '../subpages/User3_5';
import User3_6 from '../subpages/User3_6';

const items2 = [
  <User3_1 />
];

const items3 = [
  <User3_2 />
];

const items4 = [
  <User3_3 />
];

const items5 = [
  <User3_4 />
];

const items6 = [
  <User3_5 />
];

const items7 = [
  <User3_6 />
];

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'Сурах бичиг, нэг сэдэвт бүтээл туурвисан (редакцын зөвлөлөөр зөвшөөрөгдсөн)',
    children: <div>{items2}</div>,
  },
  {
    key: '2',
    label: 'Гадаад хэлээр нэг сэдэвт бүтээл туурвисан',
    children: <div>{items3}</div>,
  },
  {
    key: '3',
    label: 'Сурах бичиг орчуулж, хэвлүүлсэн (зохиогчийн эрхтэй байх)',
    children: <div>{items4}</div>,
  },
  {
    key: '4',
    label: 'Гарын авлага хэвлүүлсэн (Лабораторийн заавар тооцогдохгүй)',
    children: <div>{items5}</div>,
  },
  {
    key: '5',
    label: 'Докторын зэрэг хамгаалсан',
    children: <div>{items6}</div>,
  },
  {
    key: '6',
    label: 'Эшлэл татагдсан бүтээл (Олон улсад, Web of Science, Scopus)',
    children: <div>{items7}</div>,
  },
];

const B_time_page3 = () => {
  return (
    <div className="pb-52">
      <div className="border-slate-300 border ml-7 mr-7 mt-11 pb-20 border-collapse">
        <p className="bg-sky-400 h-12 pt-2 pl-7 text-lg text-white">Та өөрийн эрдэм шинжилгээний бүтээлээ доор бөглөж өгнө үү</p>
        <Collapse className="bg-slate-300 relative ml-8 mr-8 top-10 " accordion items={items} />
      </div>
    </div>
  );
};


export default B_time_page3;