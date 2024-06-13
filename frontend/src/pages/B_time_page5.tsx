import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import User5_1 from '../subpages/User5_1';
import User5_2 from '../subpages/User5_2';
import User5_3 from '../subpages/User5_3';
import User5_4 from '../subpages/User5_4';
import User5_5 from '../subpages/User5_5';

const items2 = [
  <User5_1 />
];

const items3 = [
  <User5_2 />
];

const items4 = [
  <User5_3 />
];

const items5 = [
  <User5_4 />
];

const items6 = [
  <User5_5 />
];


const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'Олон улсын хэмжээнд илтгэл хэлэлцүүлсэн',
    children: <div>{items2}</div>,
  },
  {
    key: '2',
    label: 'Улсын хэмжээнд илтгэл хэлэлцүүлсэн',
    children: <div>{items3}</div>,
  },
  {
    key: '3',
    label: 'Их сургуулийн хэмжээнд илтгэл хэлэлцүүлсэн',
    children: <div>{items4}</div>,
  },
  {
    key: '4',
    label: 'Олон улсын хурлын ханан илтгэл',
    children: <div>{items5}</div>,
  },
  {
    key: '5',
    label: 'Улс, их сургуулийн хэмжээний хуралд ханан илтгэл',
    children: <div>{items6}</div>,
  },
];

const B_time_page5 = () => {
  return (
    <div className="pb-64">
      <div className="border-slate-300 border ml-7 mr-7 mt-11 pb-20 border-collapse">
        <p className="bg-sky-400 h-12 pt-2 pl-7 text-lg text-white">Та өөрийн эрдэм шинжилгээний бүтээлээ доор бөглөж өгнө үү</p>
        <Collapse className="bg-slate-300 relative ml-8 mr-8 top-10 " accordion items={items} />
      </div>
    </div>
  );
};


export default B_time_page5;