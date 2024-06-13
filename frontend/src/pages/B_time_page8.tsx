import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import User8_1 from '../subpages/User8_1';
import User8_2 from '../subpages/User8_2';
import User8_3 from '../subpages/User8_3';

const items2 = [
  <User8_1 />
];

const items3 = [
  <User8_2 />
];

const items4 = [
  <User8_3 />
];

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'Албан ёсны шүүмжлэгчээр ажилласан',
    children: <div>{items2}</div>,
  },
  {
    key: '2',
    label: 'Оюутан удирдамж эрдэм шинжилгээний хуралд илтгэл хэлэлцүүлж 1-3-р байранд орвол (давхардуулахгүй)',
    children: <div>{items3}</div>,
  },
  {
    key: '3',
    label: 'Илтгэл удирдаж хэлэлцүүлэх',
    children: <div>{items4}</div>,
  },
];

const B_time_page8 = () => {
  return (
    <div className="pb-80">
      <div className="border-slate-300 border ml-7 mr-7 mt-11 pb-20 border-collapse">
        <p className="bg-sky-400 h-12 pt-2 pl-7 text-lg text-white">Та өөрийн эрдэм шинжилгээний бүтээлээ доор бөглөж өгнө үү</p>
        <Collapse className="bg-slate-300 relative ml-8 mr-8 top-10 " accordion items={items} />
      </div>
    </div>
  );
};


export default B_time_page8;