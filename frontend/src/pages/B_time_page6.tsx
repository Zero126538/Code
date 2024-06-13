import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import User6_2 from '../subpages/User6_2';
import User6_1 from '../subpages/User6_1';
import User6_3 from '../subpages/User6_3';
import User6_4 from '../subpages/User6_4';
import User6_6 from '../subpages/User6_6';

const items2 = [
  <User6_1 />
];

const items3 = [
  <User6_2 />
];

const items4 = [
  <User6_3 />
];

const items5 = [
  <User6_4 />
];

const items6 = [
  <User6_6 />
];

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'Гадаадад эрхийн хамгаалалт хийгдсэн оюуны бүтээл туурвисан',
    children: <div>{items2}</div>,
  },
  {
    key: '2',
    label: 'Дотоодод шинэ бүтээл, ашигтай загварын эрхийн хамгаалалт хийсэн',
    children: <div>{items3}</div>,
  },
  {
    key: '3',
    label: 'Дотоодод барааны тэмдэг, газар зүйн заалт, бүтээгдэхүүний загварын эрхийн хамгаалалт хийсэн',
    children: <div>{items4}</div>,
  },
  {
    key: '4',
    label: 'Зохиогчийн эрхийн баталгаажуулалт хийлгэсэн',
    children: <div>{items5}</div>,
  },
  {
    key: '5',
    label: 'Улсын стандарт, олон улсын стандарт (фармакопей) баталгаажуулсан',
    children: <div>{items6}</div>,
  },
];

const B_time_page6 = () => {
  return (
    <div className="pb-64">
      <div className="border-slate-300 border ml-7 mr-7 mt-11 pb-20 border-collapse">
        <p className="bg-sky-400 h-12 pt-2 pl-7 text-lg text-white">Та өөрийн эрдэм шинжилгээний бүтээлээ доор бөглөж өгнө үү</p>
        <Collapse className="bg-slate-300 relative ml-8 mr-8 top-10 " accordion items={items} />
      </div>
    </div>
  );
};


export default B_time_page6;