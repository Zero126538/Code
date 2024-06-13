import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import User7_1 from '../subpages/User7_1';
import User7_2 from '../subpages/User7_2';
import User7_3 from '../subpages/User7_3';
import User7_4 from '../subpages/User7_4';
import User7_5 from '../subpages/User7_5';
import User7_6 from '../subpages/User7_6';
import User7_7 from '../subpages/User7_7';
import User7_8 from '../subpages/User7_8';
import User7_9 from '../subpages/User7_9';

const items2 = [
  <User7_1 />
];

const items3 = [
  <User7_2 />
];

const items4 = [
  <User7_3 />
];

const items5 = [
  <User7_4 />
];

const items6 = [
  <User7_5 />
];

const items7 = [
  <User7_6 />
];

const items8 = [
  <User7_7 />
];

const items9 = [
  <User7_8 />
];

const items10 = [
  <User7_9 />
];


const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'Олон улсын төслийн удирдагч, зохицуулагч',
    children: <div>{items2}</div>,
  },
  {
    key: '2',
    label: 'Олон улсын төслийн гүйцэтгэгч, зөвлөх',
    children: <div>{items3}</div>,
  },
  {
    key: '3',
    label: 'Засгийн газрын санхүүжилттэй төсөл удирдаж, хэрэгжүүлсэн',
    children: <div>{items4}</div>,
  },
  {
    key: '4',
    label: 'Засгийн газрын санхүүжилттэй төсөлд үндсэн гүйцэтгэгчээр оролцсон',
    children: <div>{items5}</div>,
  },
  {
    key: '5',
    label: 'Их сургуулийн хэмжээнд судалгааны төсөл удирдсан',
    children: <div>{items6}</div>,
  },
  {
    key: '6',
    label: 'Их сургуулийн хэмжээнд судалгааны төсөл гүйцэтгэсэн',
    children: <div>{items7}</div>,
  },
  {
    key: '7',
    label: 'Олон улсын хэмжээний гэрээт ажил гүйцэтгэсэн',
    children: <div>{items8}</div>,
  },
  {
    key: '8',
    label: 'Грант, гэрээт ажил хэрэгжүүлсэн',
    children: <div>{items9}</div>,
  },
  {
    key: '9',
    label: 'Хөтөлбөр магадлан итгэмжлүүлэх',
    children: <div>{items10}</div>,
  },
];

const B_time_page7 = () => {
  return (
    <div className="pb-16">
      <div className="border-slate-300 border ml-7 mr-7 mt-11 pb-20 border-collapse">
        <p className="bg-sky-400 h-12 pt-2 pl-7 text-lg text-white">Та өөрийн эрдэм шинжилгээний бүтээлээ доор бөглөж өгнө үү</p>
        <Collapse className="bg-slate-300 relative ml-8 mr-8 top-10 " accordion items={items} />
      </div>
    </div>
  );
};


export default B_time_page7;