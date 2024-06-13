import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import User11_1 from '../subpages/User11_1';
import User11_2 from '../subpages/User11_2';
import User11_3 from '../subpages/User11_3';
import User11_5 from '../subpages/User11_5';
import User11_6 from '../subpages/User11_6';
import User11_7 from '../subpages/User11_7';
import User11_8 from '../subpages/User11_8';
import User11_9 from '../subpages/User11_9';
import User11_4 from '../subpages/User11_4';

const items2 = [
  <User11_1 />
];

const items3 = [
  <User11_2 />
];

const items4 = [
  <User11_3 />
];

const items5 = [
  <User11_4 />
];

const items6 = [
  <User11_5 />
];

const items7 = [
  <User11_6 />
];

const items8 = [
  <User11_7 />
];

const items9 = [
  <User11_8 />
];

const items10 = [
  <User11_9 />
];

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'ХААИС, бүрэлдэхүүний сургуулийн эрдмийн зөвлөл, магистр, докторын хамгаалуулах зөвлөлийн байнгын гишүүн, сургалт заах аргын зөвлөлийн гишүүнээр ажилласан бол',
    children: <div>{items2}</div>,
  },
  {
    key: '2',
    label: 'Лаборатори, кабинет хариуцан ажиллах',
    children: <div>{items3}</div>,
  },
  {
    key: '3',
    label: 'Тэнхмийн шийдвэрээр багшийн хичээлд сууж зөвөлгөө өгөх',
    children: <div>{items4}</div>,
  },
  {
    key: '4',
    label: 'Профессор багшийн хичээлд сууж зөвөлгөө авах',
    children: <div>{items5}</div>,
  },
  {
    key: '5',
    label: 'Шүүмжлэгчээр ажиллахад (Докторант, Магистрант, Бакалаврын төгсөлтийн ажил)',
    children: <div>{items6}</div>,
  },
  {
    key: '6',
    label: 'Олимпиад, уралдаан тэмцээн зохион байгуулах албан ёсны комисст ажиллавал (Сургуулийн хэмжээнд, Улсын хэмжээнд)',
    children: <div>{items7}</div>,
  },
  {
    key: '7',
    label: 'Оюутны төлөвшлийн ажил (Зөвлөх багшаар ажиллах)',
    children: <div>{items8}</div>,
  },
  {
    key: '8',
    label: 'Оюутныг дагуулан сургах, эрдэм шинжилгээний дугуйлан удирдах',
    children: <div>{items9}</div>,
  },
  {
    key: '9',
    label: 'Олон улсын хурал зохион байгуулах (Комиссын гишүүдэд тэнцүү хуваарилна)',
    children: <div>{items10}</div>,
  },
];

const C_time_page2 = () => {
  return (
    <div className="pb-11">
      <div className="border-slate-300 border ml-7 mr-7 mt-11 pb-20 border-collapse">
        <p className="bg-sky-400 h-12 pt-2 pl-7 text-lg text-white">Та өөрийн эрдэм шинжилгээний бүтээлээ доор бөглөж өгнө үү</p>
      <Collapse className="bg-slate-300 relative ml-8 mr-8 top-10 " accordion items={items} />
      </div>
    </div>
  );
};

export default C_time_page2;