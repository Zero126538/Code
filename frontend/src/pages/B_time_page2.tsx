import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import User2_1 from '../subpages/User2_1';
import User2_2 from '../subpages/User2_2';
import User2_3 from '../subpages/User2_3';
import User2_4 from '../subpages/User2_4';

const items2 = [
  <User2_1 />
];

const items3 = [
  <User2_2 />
];

const items4 = [
  <User2_3 />
];

const items5 = [
  <User2_4 />
];

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'Англи хэл дээр хэвлэгддэг мэргэжлийн түвшинд хянагддаг сэтгүүлд өгүүлэл хэвлүүлсэн',
    children:  <div>{items2}</div>,
  },
  {
    key: '2',
    label: 'Монгол хэл дээр хэвлэгддэг мэргэжлийн түвшинд хянагддаг сэтгүүлд өгүүлэл хэвлүүлсэн',
    children:  <div>{items3}</div>,
  },
  {
    key: '3',
    label: 'Улсын хэмжээний эрдэм шинжилгээний хурлын эмхэтгэлд бүрэн хэмжээний өгүүлэл хэвлүүлсэн',
    children:  <div>{items4}</div>,
  },
  {
    key: '4',
    label: 'Их сургуулийн хэмжээний эрдэм шинжилгээний хурлын эмхэтгэлд бүрэн хэмжээний өгүүлэл хэвлүүлсэн',
    children:  <div>{items5}</div>,
  },
];

const B_time_page2 = () => {
  return (
    <div className="pb-5">
      <div className="border-slate-300 border ml-7 mr-7 mt-11 pb-80 border-collapse h-auto">
        <p className="bg-sky-400 h-12 pt-2 pl-7 text-lg text-white">Та өөрийн эрдэм шинжилгээний бүтээлээ доор бөглөж өгнө үү</p>
        <Collapse className="bg-slate-300 relative ml-8 mr-8 top-10 " accordion items={items} />
      </div>
    </div>
  );
};

export default B_time_page2;