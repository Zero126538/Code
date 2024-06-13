import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import User1_1 from '../subpages/User1_1';
import User1_2 from '../subpages/User1_2';
import User1_3 from '../subpages/User1_3';


const items2 = [
  <User1_1 />
];

const items3 = [
  <User1_2 />
]

const items4 = [
  <User1_3 />
]

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'Олон улсын мэдээллийн сан (Web of Science, SCOPUS)-д бүртгэлтэй мэргэжлийн сэтгүүлд өгүүлэл хэвлүүлсэн',
    children: <div>{items2}</div>,
  },
  {
    key: '2',
    label: 'Олон улсын мэдээллийн сан (Web of Science, SCOPUS)-д бүртгэлгүй боловч мэргэжлийн түвшинд хянагддаг гадаадын сэтгүүлд өгүүлэл хэвлүүлсэн',
    children: <div>{items3}</div>,
  },
  {
    key: '3',
    label: 'Олон улсын эрдэм шинжилгээний хурлын эмхэтгэлд бүрэн хэмжээний өгүүлэл хэвлүүлсэн',
    children: <div>{items4}</div>,
  },
];

const B_time_page1 = () => {
  return (
    <div className="pb-5">
      <div className="border-slate-300 border ml-7 mr-7 mt-11 pb-96 border-collapse">
        <p className="bg-sky-400 h-12 pt-2 pl-7 text-lg text-white">Та өөрийн эрдэм шинжилгээний бүтээлээ доор бөглөж өгнө үү</p>
        <Collapse className="bg-slate-300 relative ml-8 mr-8 top-10 " accordion items={items} />

      </div>
    </div>
  );
};

export default B_time_page1;
