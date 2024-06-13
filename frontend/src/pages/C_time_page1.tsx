import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import User10_1 from '../subpages/User10_1';
import User10_2 from '../subpages/User10_2';
import User10_3 from '../subpages/User10_3';
import User10_4 from '../subpages/User10_4';
import User10_5 from '../subpages/User10_5';
import User10_6 from '../subpages/User10_6';
import User10_7 from '../subpages/User10_7';
import User10_8 from '../subpages/User10_8';
import User10_9 from '../subpages/User10_9';
import User10_10 from '../subpages/User10_10';
import User10_11 from '../subpages/User10_11';
import User10_12 from '../subpages/User10_12';
import User10_13 from '../subpages/User10_13';
import User10_14 from '../subpages/User10_14';
import User10_15 from '../subpages/User10_15';
import User10_16 from '../subpages/User10_16';
import User10_17 from '../subpages/User10_17';

const items2 = [
  <User10_1 />
];

const items3 = [
  <User10_2 />
];

const items4 = [
  <User10_3 />
];

const items5 = [
  <User10_4 />
];

const items6 = [
  <User10_5 />
];

const items7 = [
  <User10_6 />
];

const items8 = [
  <User10_7 />
];

const items9 = [
  <User10_8 />
];

const items10 = [
  <User10_9 />
];

const items11 = [
  <User10_10 />
];

const items12 = [
  <User10_11 />
];

const items13 = [
  <User10_12 />
];

const items14 = [
  <User10_13 />
];

const items15 = [
  <User10_14 />
];

const items16 = [
  <User10_15 />
];

const items17 = [
  <User10_16 />
];

const items18 = [
  <User10_17 />
];

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'Хичээлийн стандарт хөтөлбөр шинээр боловсруулах',
    children: <div>{items2}</div>,
  },
  {
    key: '2',
    label: 'Хичээлийн стандарт хөтөлбөр шинэчлэн сайжруулж боловсруулах',
    children: <div>{items3}</div>,
  },
  {
    key: '3',
    label: 'Давтан зааж буй хичээлийг шинэчлэн, сайжруулж бэлтгэх',
    children: <div>{items4}</div>,
  },
  {
    key: '4',
    label: 'Сургалтын төлөвлөгөөнд шинээр тусгагдсан хичээлийг анх удаа заахад бэлтгэх',
    children: <div>{items5}</div>,
  },
  {
    key: '5',
    label: 'Оюутны бүтээлч сэтгэлгээг хөгжүүлэхэд чиглэгдсэн сургалтыг шинэлэг арга барилаар заасан хичээлийн бэлтгэл',
    children: <div>{items6}</div>,
  },
  {
    key: '6',
    label: 'E-book, е-тест, е-хичээлийн материал бэлтгэх',
    children: <div>{items7}</div>,
  },
  {
    key: '7',
    label: 'Албан ёсоор гаргасан хуваарийн дагуу мэргэжлийн хичээлээр оюутанд зөвөлгөө өгөх',
    children: <div>{items8}</div>,
  },
  {
    key: '8',
    label: 'Шалгагч багшаар ажиллах',
    children: <div>{items9}</div>,
  },
  {
    key: '9',
    label: 'Ассистент багшаар ажиллах',
    children: <div>{items10}</div>,
  },
  {
    key: '10',
    label: 'Ангийн ажил',
    children: <div>{items11}</div>,
  },
  {
    key: '11',
    label: 'Сурах бичиг, гарын авлага бичих',
    children: <div>{items12}</div>,
  },
  {
    key: '12',
    label: 'Сурах бичиг (редакцийн зөвлөлөөр зөвшөөрөгдсөн)',
    children: <div>{items13}</div>,
  },
  {
    key: '13',
    label: 'Сурах бичиг орчуулж, хэвлүүлэх',
    children: <div>{items14}</div>,
  },
  {
    key: '14',
    label: 'Эрдэм шинжилгээний бүтээл, сурах бичиг, гарын авлага, ном редакторлох',
    children: <div>{items15}</div>,
  },
  {
    key: '15',
    label: 'Сурталчилгааны өгүүлэл хэвлүүлэх',
    children: <div>{items16}</div>,
  },
  {
    key: '16',
    label: 'Лабораторийн ажил шинээр тавих',
    children: <div>{items17}</div>,
  },
  {
    key: '17',
    label: 'Эчнээ даалгавар шалгах',
    children: <div>{items18}</div>,
  },
];

const C_time_page1 = () => {
  return (
    <div className="pb-40">
      <div className="border-slate-300 border ml-7 mr-7 mt-11 pb-20 border-collapse">
        <p className="bg-sky-400 h-12 pt-2 pl-7 text-lg text-white">Та өөрийн эрдэм шинжилгээний бүтээлээ доор бөглөж өгнө үү</p>
      <Collapse className="bg-slate-300 relative ml-8 mr-8 top-10 " accordion items={items} />
      </div>
    </div>
  );
};


export default C_time_page1;