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
];

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'Докторын зэрэг хамгаалах',
    children: <div>{items5} <div className='my-2'><Plus2 /></div></div>,
  },
  {
    key: '2',
    label: 'Шинжлэх ухаан, технологийн төсөл ( Удирдах тоо )',
    children: <div>{items5} <div className='my-2'><Plus2 /></div></div>,
  },
  {
    key: '3',
    label: 'Шинжлэх ухаан, технологийн төсөл ( Гүйцэтгэх тоо )',
    children: <div>{items5} <div className='my-2'><Plus2 /></div></div>,
  },
  {
    key: '4',
    label: 'Эрдэм шинжилгээний ажил удирдах ( Доктор-нэг сэдэвт бүтээлийн тоо )',
    children: <div>{items5} <div className='my-2'><Plus2 /></div></div>,
  },
  {
    key: '5',
    label: 'Эрдэм шинжилгээний ажил удирдах ( Магистр-магистрын ажлын тоо )',
    children: <div>{items5} <div className='my-2'><Plus2 /></div></div>,
  },
  {
    key: '6',
    label: 'Эрдэм шинжилгээний ажил удирдах ( Бакалавр-төгсөлтийн ажлын тоо )',
    children: <div>{items5} <div className='my-2'><Plus2 /></div></div>,
  },
  {
    key: '7',
    label: 'Олон улсад хянагддаг мэргэжлийн сэтгүүлд бүтээлээ хэвлүүлэх ( Импакт фактор IF-той )',
    children: <div>{items5} <div className='my-2'><Plus2 /></div></div>,
  },
  {
    key: '8',
    label: 'Олон улсад хянагддаг мэргэжлийн сэтгүүлд бүтээлээ хэвлүүлэх ( Бусад их сургуулийн түвшний сэтгүүл )',
    children: <div>{items5} <div className='my-2'><Plus2 /></div></div>,
  },
  {
    key: '9',
    label: 'Олон улсад хянагддаг мэргэжлийн сэтгүүлд бүтээлээ хэвлүүлэх ( Дотооддоо хянагддаг мэргэжлийн сэтгүүлд бүтээлээ хэвлүүлэх )',
    children: <div>{items5} <div className='my-2'><Plus2 /></div></div>,
  },
  {
    key: '10',
    label: 'Эрдэм шинжилгээний хуралд илтгэл хэлэлцүүлэх ( Олон улсын хэмжээнд )',
    children: <div>{items5} <div className='my-2'><Plus2 /></div></div>,
  },
  {
    key: '11',
    label: 'Эрдэм шинжилгээний хуралд илтгэл хэлэлцүүлэх ( Улсын хэмжээнд )',
    children: <div>{items5} <div className='my-2'><Plus2 /></div></div>,
  },
  {
    key: '12',
    label: 'Эрдэм шинжилгээний хуралд илтгэл хэлэлцүүлэх ( ХААИС-ын хэмжээнд )',
    children: <div>{items5} <div className='my-2'><Plus2 /></div></div>,
  },
  {
    key: '13',
    label: 'Оюуны өмчийн бүтээл ( Патент )',
    children: <div>{items5} <div className='my-2'><Plus2 /></div></div>,
  },
  {
    key: '14',
    label: 'Оюуны өмчийн бүтээл ( Шинэ бүтээл )',
    children: <div>{items5} <div className='my-2'><Plus2 /></div></div>,
  },
  {
    key: '15',
    label: 'Оюуны өмчийн бүтээл ( Ашигтай загвар )',
    children: <div>{items5} <div className='my-2'><Plus2 /></div></div>,
  },
  {
    key: '16',
    label: 'Оюуны өмчийн бүтээл ( Зохиогчийн эрх )',
    children: <div>{items5} <div className='my-2'><Plus2 /></div></div>,
  },
  {
    key: '17',
    label: 'Мэргэжлийн зөвлөл дэх гишүүнчлэл ( Дотоодын эрдмийн зөвлөл )',
    children: <div>{items5} <div className='my-2'><Plus2 /></div></div>,
  },
  {
    key: '18',
    label: 'Мэргэжлийн зөвлөл дэх гишүүнчлэл ( ХААИС-ийн эрдмийн зөвлөл )',
    children: <div>{items5} <div className='my-2'><Plus2 /></div></div>,
  },
  {
    key: '19',
    label: 'Мэргэжлийн зөвлөл дэх гишүүнчлэл ( Олон улсын эрдэм шинжилгээний сэтгүүлийн редакцийн зөвлөл )',
    children: <div>{items5} <div className='my-2'><Plus2 /></div></div>,
  },
  {
    key: '20',
    label: 'Мэргэжлийн зөвлөл дэх гишүүнчлэл ( Дотоодын эрдэм шинжилгээний сэтгүүлийн редакцын зөвлөл )',
    children: <div>{items5} <div className='my-2'><Plus2 /></div></div>,
  },
];

const A_time_page2 = () => {
  return (
    <div className="pb-5">
      <div className="border-slate-300 border ml-7 mr-7 mt-11 pb-20 border-collapse">
        <p className="bg-sky-400 h-12 pt-2 pl-7 text-lg text-white">Та өөрийн эрдэм шинжилгээний бүтээлээ доор бөглөж өгнө үү</p>
        <Collapse className="bg-slate-300 relative ml-8 mr-8 top-10 " accordion items={items} />
      </div>
    </div>
  );
};

export default A_time_page2;