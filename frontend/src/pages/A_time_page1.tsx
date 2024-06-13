import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import Plus2 from '../components/Plus2';

const items5 = [
  <div className="relative border border-slate-300">
    <p className="relative bg-blue-100 h-11 pt-2 pl-4 font-medium text-blue-500">Таны бүтээлийн жагсаалт</p>
    <p className="h-11 pt-2 pl-4 font-medium border-slate-300 border-t border-b">Эхлэсэн огноо: Хоосон байна.</p>
    <p className="h-11 pt-2 pl-4 font-medium border-slate-300 border-t border-b">Дууссан огноо: Хоосон байна.</p>
    <p className="h-11 pt-2 pl-4 font-medium border-slate-300 border-t border-b">Улирал: Хоосон байна.</p>
    <p className="h-11 pt-2 pl-4 font-medium border-slate-300 border-t border-b">Дугаар: Хоосон байна.</p>
    <p className="h-11 pt-2 pl-4 font-medium border-slate-300 border-t border-b">Өгүүллийн нэр: Хоосон байна.</p>
    <p className="h-11 pt-2 pl-4 font-medium border-slate-300 border-t border-b">Хаана: Хоосон байна.</p>
    <p className="h-11 pt-2 pl-4 font-medium border-slate-300 border-t border-b">Зохиолч: Хоосон байна.</p>
    <p className="h-11 pt-2 pl-4 font-medium border-slate-300 border-t border-b">Зохиолч: Хоосон байна.</p>
    <p className="h-11 pt-2 pl-4 font-medium border-slate-300 border-t border-b">Зохиолч: Хоосон байна.</p>
    <p className="h-11 pt-2 pl-4 font-medium border-slate-300 border-t border-b">Тоо: Хоосон байна.</p>
    <p className="h-11 pt-2 pl-4 font-medium border-slate-300 border-t border-b">Хэвлэсэн он: Хоосон байна.</p>
    <p className="h-11 pt-2 pl-4 font-medium border-slate-300 border-t border-b">Холбоос: Хоосон байна.</p>
    <p className="h-11 pt-2 pl-4 font-medium border-slate-300 border-t border-b">Хурал/ЭШБ: Хоосон байна.</p>
    <p className="h-11 pt-2 pl-4 font-medium border-slate-300 border-t border-b">Тайлбар: Хоосон байна.</p>
  </div>
]

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'Туурвисан ном, сурах бичиг',
    children: <div>{items5} <div className='my-2'><Plus2 /></div></div>,
  },
  {
    key: '2',
    label: 'Орчуулсан ном, сурах бичиг',
    children: <div>{items5} <div className='my-2'><Plus2 /></div></div>,
  },
  {
    key: '3',
    label: 'Редакторлосон ном сурах бичиг',
    children: <div>{items5} <div className='my-2'><Plus2 /></div></div>,
  },
  {
    key: '4',
    label: 'Сургалтын материал, гарын авлага хэвлүүлэх',
    children: <div>{items5} <div className='my-2'><Plus2 /></div></div>,
  },
  {
    key: '5',
    label: 'Хичээлийн стандарт хөтөлбөрийн иж бүрдэл ( Лекцийн хичээл )',
    children: <div>{items5} <div className='my-2'><Plus2 /></div></div>,
  },
  {
    key: '6',
    label: 'Хичээлийн стандарт хөтөлбөрийн иж бүрдэл ( Дадлага, семинар, лаборатори )',
    children: <div>{items5} <div className='my-2'><Plus2 /></div></div>,
  },
  {
    key: '7',
    label: 'Хичээлийн стандарт хөтөлбөрийн иж бүрдэл ( Бие даалт )',
    children: <div>{items5} <div className='my-2'><Plus2 /></div></div>,
  },
  {
    key: '8',
    label: 'E-хичээлийн иж бүрдэл ( Докторын сургалт )',
    children: <div>{items5} <div className='my-2'><Plus2 /></div></div>,
  },
  {
    key: '9',
    label: 'E-хичээлийн иж бүрдэл ( Магистрын сургалт )',
    children: <div>{items5} <div className='my-2'><Plus2 /></div></div>,
  },
  {
    key: '10',
    label: 'E-хичээлийн иж бүрдэл ( Бакалаврын сургалт )',
    children: <div>{items5} <div className='my-2'><Plus2 /></div></div>,
  },
  {
    key: '11',
    label: 'Хичээлийн хөтөлбөрийг сайжруулах ( Докторын сургалт )',
    children: <div>{items5} <div className='my-2'><Plus2 /></div></div>,
  },
  {
    key: '12',
    label: 'Хичээлийн хөтөлбөрийг сайжруулах ( Магистрын сургалт )',
    children: <div>{items5} <div className='my-2'><Plus2 /></div></div>,
  },
  {
    key: '13',
    label: 'Хичээлийн хөтөлбөрийг сайжруулах ( Бакалаврын сургалт )',
    children: <div>{items5} <div className='my-2'><Plus2 /></div></div>,
  },
  {
    key: '14',
    label: 'Ахисан түвшинд мэргэжлийн хичээл заадаг байх ( Докторын сургалт )',
    children: <div>{items5} <div className='my-2'><Plus2 /></div></div>,
  },
  {
    key: '15',
    label: 'Ахисан түвшинд мэргэжлийн хичээл заадаг байх ( Магистрын сургалт )',
    children: <div>{items5} <div className='my-2'><Plus2 /></div></div>,
  },
  {
    key: '16',
    label: 'Хөтөлбөрийн магадлан итгэмжлэлийн оролцоо ( Олон улсын )',
    children: <div>{items5} <div className='my-2'><Plus2 /></div></div>,
  },
  {
    key: '17',
    label: 'Хөтөлбөрийн магадлан итгэмжлэлийн оролцоо ( Дотоодын )',
    children: <div>{items5} <div className='my-2'><Plus2 /></div></div>,
  },
  {
    key: '18',
    label: 'Хөтөлбөрийн магадлан итгэмжлэлийн оролцоо ( Хамтарсан )',
    children: <div>{items5} <div className='my-2'><Plus2 /></div></div>,
  },
];

const A_time_page1 = () => {
  return (
    <div className="pb-5">
      <div className="border-slate-300 border ml-7 mr-7 mt-11 pb-20 border-collapse">
        <p className="bg-sky-400 h-12 pt-2 pl-7 text-lg text-white">Та өөрийн эрдэм шинжилгээний бүтээлээ доор бөглөж өгнө үү</p>
        <Collapse className="bg-slate-300 relative ml-8 mr-8 top-10 " accordion items={items} />
      </div>
    </div>
  );
};

export default A_time_page1;