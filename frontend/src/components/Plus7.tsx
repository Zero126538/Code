import React, { useState } from 'react';
import { Button, Modal, Form, Input, DatePicker, Select } from 'antd';

type LayoutType = Parameters<typeof Form>[0]['layout'];

const modalStyle: React.CSSProperties = {
  minHeight: 120,
  minWidth: 900,
  top: 20,
  left:65
};

const Plus7 = () => {
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
        <Form.Item label="Нэр">
          <Select>
            <Select.Option value="traning">Хичээлд бэлтгэх</Select.Option>
            <Select.Option value="exam">Шалгалт</Select.Option>
            <Select.Option value="subteacher">Зөвлөх багшаар ажиллах</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Төрөл">
          <Select>
            <Select.Option value="а">Хичээлийн стандарт хөтөлбөр шинээр боловсруулах</Select.Option>
            <Select.Option value="b">Хичээлийн стандарт хөтөлбөр шинэчлэн сайжруулж боловсруулах</Select.Option>
            <Select.Option value="c">Давтан зааж буй хичээлийг шинэчлэн, сайжруулж бэлтгэх</Select.Option>
            <Select.Option value="d">Сургалтын төлөвлөгөөнд шинээр тусгагдсан хичээлийг боловсруулж анх удаа заахад бэлтгэх</Select.Option>
            <Select.Option value="e">Оюутны бүтээлч сэтгэлгээг хөгжүүлэхэд чиглэгдсэн сургалтыг шинэлэг арга барилаар заасан хичээлийн бэлтгэл</Select.Option>
            <Select.Option value="f">Лабораторийн ажил шинээр бэлтгэх</Select.Option>
            <Select.Option value="g">Эчнээ даалгавар шалгах</Select.Option>
            <Select.Option value="h">Албан ёсоор гаргасан хуваарийн дагуу мэргэжлийн суурь, мэргэжлийн хичээлээр оюутанд зөвлөгөө өгөх (төгсөлтийн шалгалтад бэлтгэх тойм лекц)</Select.Option>
            <Select.Option value="i">Зөвлөх багшаар ажиллах</Select.Option>
            <Select.Option value="j">Шалгагч багшаар ажиллах</Select.Option>
            <Select.Option value="k">Ассистент багшаар ажиллах</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Тоо">
          <Input placeholder="Өгөгдөл оруулна уу"/>
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

export default Plus7;