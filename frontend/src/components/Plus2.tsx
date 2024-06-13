import React, { useState } from 'react';
import { Button, Modal, Form, Input, DatePicker, Select, Upload} from 'antd';

type LayoutType = Parameters<typeof Form>[0]['layout'];

const modalStyle: React.CSSProperties = {
  minHeight: 120,
  minWidth: 900,
  top: 20,
  left:65
};

const Plus2 = () => {
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
        <Form.Item label="Төрөл">
          <Select>
            <Select.Option value="book">Сурах бичиг</Select.Option>
            <Select.Option value="booktime">Нэг сэдэвт бүтээл</Select.Option>
            <Select.Option value="paper">Гарын авлага</Select.Option>
            <Select.Option value="doctor">Доктор</Select.Option>
            <Select.Option value="halfword">Эшлэл</Select.Option>
            <Select.Option value="sentence">Өгүүлэл</Select.Option>
            <Select.Option value="fullsentence">Илтгэл</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Зохиогч">
          <Input placeholder="Өгөгдөл оруулна уу"/>
        </Form.Item>
        <Form.Item label="Зохиогч 2">
          <Input placeholder="Өгөгдөл оруулна уу"/>
        </Form.Item>
        <Form.Item label="Хэвлэлийн хуудас">
          <Input placeholder="Өгөгдөл оруулна уу"/>
        </Form.Item>
        <Form.Item label="Хэвлэсэн огноо">
          <Input placeholder="Өгөгдөл оруулна уу"/>
        </Form.Item>
        <Form.Item label="Хаана">
          <Input placeholder="Өгөгдөл оруулна уу"/>
        </Form.Item>
        <Form.Item label="Холбоос">
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
        <Form.Item label="ISBN">
          <Input placeholder="Өгөгдөл оруулна уу"/>
        </Form.Item>
        <Form.Item label="Тоо">
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

export default Plus2;