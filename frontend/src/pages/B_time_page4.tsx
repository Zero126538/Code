import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import User4_1 from '../subpages/User4_1';
import User4_2 from '../subpages/User4_2';
import User4_3 from '../subpages/User4_3';
import User4_4 from '../subpages/User4_4';
import User4_5 from '../subpages/User4_5';

const items2 = [
  <User4_1 />
];

const items3 = [
  <User4_2 />
];

const items4 = [
  <User4_3 />
];

const items5 = [
  <User4_4 />
];

const items6 = [
  <User4_5 />
];

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'Сурах бичиг, нэг сэдэвт бүтээл',
    children: <div>{items2}</div>,
  },
  {
    key: '2',
    label: 'Гарын авлага',
    children: <div>{items3}</div>,
  },
  {
    key: '3',
    label: 'Олон улсын сэтгүүлд хэвлэгдэх өгүүлэлд редакц хийсэн',
    children: <div>{items4}</div>,
  },
  {
    key: '4',
    label: 'Англи хэл дээр хэвлэгдсэн дотоодын сэтгүүлд хэвлэгдэх өгүүлэлд редакц хийсэн',
    children: <div>{items5}</div>,
  },
  {
    key: '5',
    label: 'Монгол хэл дээр хэвлэгддэг дотоодын сэтгүүлд хэвлэгдэх өгүүлэлд редакц хийсэн',
    children: <div>{items6}</div>,
  },
];

const B_time_page4 = () => {
  return (
    <div className="pb-64">
      <div className="border-slate-300 border ml-7 mr-7 mt-11 pb-20 border-collapse">
        <p className="bg-sky-400 h-12 pt-2 pl-7 text-lg text-white">Та өөрийн эрдэм шинжилгээний бүтээлээ доор бөглөж өгнө үү</p>
        <Collapse className="bg-slate-300 relative ml-8 mr-8 top-10 " accordion items={items} />
      </div>
    </div>
  );
};


export default B_time_page4;