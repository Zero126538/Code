import React, { useState } from 'react';
import { Button, Modal, Form, Input, DatePicker, Select, Upload } from 'antd';

type LayoutType = Parameters<typeof Form>[0]['layout'];

const modalStyle: React.CSSProperties = {
  minHeight: 120,
  minWidth: 900,
  top: 20,
  left:65
};

const Plus8 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === 'horizontal' ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } } : null;

  const buttonItemLayout =
    formLayout === 'horizontal' ? { wrapperCol: { span: 14, offset: 4 } } : null;

  return (
    <>
      <Button type="primary" className="bg-green-400" onClick={showModal}>
        + Нэмэх
      </Button>
      <Button type="primary" className="bg-sky-400 ml-1" onClick={showModal}>
        * Засах
      </Button>
      <Button type="primary" className="bg-red-400 ml-1" onClick={showModal}>
        - Устгах
      </Button>
      <Modal style={modalStyle} title="Бүртгэлийн талбар" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Form
              {...formItemLayout}
              layout={formLayout}
              form={form}
              initialValues={{ layout: formLayout }}
              onValuesChange={onFormLayoutChange}
              style={{ maxWidth: formLayout === 'inline' ? 'none' : 1500 }}
              className="pt-5"
        >
        <Form.Item label="Эхэлсэн огноо">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Дуусах огноо">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Улирал">
          <Select>
            <Select.Option value="fall">Намар</Select.Option>
            <Select.Option value="spring">Хавар</Select.Option>
            <Select.Option value="all">Бүгд</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Дугаар">
          <Input placeholder="Өгөгдөл оруулна уу"/>
        </Form.Item>
        <Form.Item label="Хичээлийн нэр">
          <Input placeholder="Өгөгдөл оруулна уу"/>
        </Form.Item>
        <Form.Item label="Огноо">
          <Input placeholder="Өгөгдөл оруулна уу"/>
        </Form.Item>
        <Form.Item label="Төрөл">
          <Select>
            <Select.Option value="1">ХААИС, бүрэлдэхүүн болон салбар сургуулийн эрдмийн зөвлөл, магистр, докторын хамгаалуулах зөвлөлийн байнгын гишүүн (давхардуулан тооцож болно)-ээр ажилласан бол</Select.Option>
            <Select.Option value="2">Лаборатори, кабинет, спорт заал хариуцан ажиллах</Select.Option>
            <Select.Option value="3">Профессор, багш нь багшийн хичээлд сууж зөвлөгөө өгөх</Select.Option>
            <Select.Option value="4">Профессор, багшийн хичээлд сууж зөвлөгөө авах</Select.Option>
            <Select.Option value="5">Дадлагажигч багш мэргэжлийн профессор багшийн хичээлд сууж, зөвөлгөө авах</Select.Option>
            <Select.Option value="6">Мэргэжлийн хөтөлбөрийн хороо, менежментийн, хичээлийн үнэлгээний болон стандарт нэвтрүүлэх багийн гишүүнээр тус тус ажиллах</Select.Option>
            <Select.Option value="7">Нээлттэй хичээл заах </Select.Option>
            <Select.Option value="8">Мэргэжлийн урт болон богино хугацааны сургалтын сургагч багшаар ажиллах</Select.Option>
            <Select.Option value="9">Мэргэжлийн байгууллагад гишүүнээр ажиллах</Select.Option>
            <Select.Option value="10">Мэргэжлийн сурталчилгаа /элсэлт/</Select.Option>
            <Select.Option value="11">ХААИС-ийн захирлын тушаалаар байгуулагдсан ажлын хэсэгт, комисст ажилласан</Select.Option>
            <Select.Option value="12">Бүрэлдэхүүн сургуулийн захирлын тушаалаар байгуулагдсан ажлын хэсэгт, комисст ажилласан</Select.Option>
            <Select.Option value="13">Байгууллагын болон хөтөлбөрийн магадлан итгэмжлэх ажилд ажиллах /чансаа тогтоох ажил/</Select.Option>
            <Select.Option value="14">Хөдөө орон нутагт элсэлтээр ажилласан /3-5 оюутан элсүүлсэн тохиолдолд/</Select.Option>
            <Select.Option value="15a">Олимпиад, уралдаан тэмцээн зохион байгуулах албан ёсны комисст ажиллавал (комиссын гишүүдэд тэнцүү хуваарилна)</Select.Option>
            <Select.Option value="15b">Сургуулийн хэмжээнд</Select.Option>
            <Select.Option value="15c">Улсын хэмжээнд</Select.Option>
            <Select.Option value="16">Оюутны төлөвшлийн ажил: -Урилгаар лекц унших</Select.Option>
            <Select.Option value="17">Оюутныг дагуулан сургах, гадаадад дадлага удирдсан, дугуйлан, секц удирдах</Select.Option>
            <Select.Option value="18">Улсын болон олон улсын хурал зохион байгуулах (комиссын гишүүдэд тэнцүү хуваарилна)</Select.Option>
            <Select.Option value="19">Мэргэжил ур чадвараа дээшлүүлэх</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Тоо">
          <Input placeholder="Өгөгдөл оруулна уу"/>
        </Form.Item>
        <Form.Item
          name="Зураг"
          label="Upload"
          valuePropName="fileList"
        >
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button>Өгөгдөл оруулна уу</Button>
          </Upload>
        </Form.Item>
        <Form.Item label="Тайлбар">
          <Input placeholder="Өгөгдөл оруулна уу"/>
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary" className="bg-sky-600">бүртгэх</Button>
        </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Plus8;