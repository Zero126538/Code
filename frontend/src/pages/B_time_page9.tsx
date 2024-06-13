import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import User9_1 from '../subpages/User9_1';
import User9_2 from '../subpages/User9_2';
import User9_3 from '../subpages/User9_3';
import User9_4 from '../subpages/User9_4';
import User9_5 from '../subpages/User9_5';

const items2 = [
  <User9_1 />
];

const items3 = [
  <User9_2 />
];

const items4 = [
  <User9_3 />
];

const items5 = [
  <User9_4 />
];

const items6 = [
  <User9_5 />
];

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'МУ-ын нэрийн өмнөөс олон улсын чанартай тэмцээнд оролцох /багш өөрөө/',
    children: <div>{items2}</div>,
  },
  {
    key: '2',
    label: 'ХААИС-ийн нэрийн өмнөөс улсын чанартай тэмцээнд оролцох /багш өөрөө/',
    children: <div>{items3}</div>,
  },
  {
    key: '3',
    label: 'Удирдаж дасгалжуулсан оюутан',
    children: <div>{items4}</div>,
  },
  {
    key: '4',
    label: 'Удирдаж дасгалжуулсан оюутан',
    children: <div>{items5}</div>,
  },
  {
    key: '5',
    label: 'Удирдаж хичээллүүлсэн секц, дугуйлан, олимпиадын баг',
    children: <div>{items6}</div>,
  },
];

const B_time_page9 = () => {
  return (
    <div className="pb-56">
      <div className="border-slate-300 border ml-7 mr-7 mt-11 pb-20 border-collapse">
        <p className="bg-sky-400 h-12 pt-2 pl-7 text-lg text-white">Та өөрийн эрдэм шинжилгээний бүтээлээ доор бөглөж өгнө үү</p>
        <Collapse className="bg-slate-300 relative ml-8 mr-8 top-10 " accordion items={items} />
      </div>
    </div>
  );
};


export default B_time_page9;