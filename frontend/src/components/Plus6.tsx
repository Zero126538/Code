import React, { useState } from 'react';
import { Button, Modal, Form, Input, DatePicker, Select } from 'antd';

type LayoutType = Parameters<typeof Form>[0]['layout'];

const modalStyle: React.CSSProperties = {
  minHeight: 120,
  minWidth: 900,
  top: 20,
  left:65
};

const Plus6 = () => {
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
        <Form.Item label="Нэр">
          <Input placeholder="Өгөгдөл оруулна уу"/>
        </Form.Item>
        <Form.Item label="Оролцогч">
          <Select>
            <Select.Option value="teacher">Багш</Select.Option>
            <Select.Option value="student">Оюутан</Select.Option>
            <Select.Option value="team">Олимпиадын баг</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Оролцогчийн үүрэг">
          <Select>
            <Select.Option value="coach">Дасгалжуулагч</Select.Option>
            <Select.Option value="sportman">Тамирчин</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Төрөл">
          <Select>
            <Select.Option value="master">Спортын мастер цол</Select.Option>
            <Select.Option value="submaster">Спортын дэд мастер</Select.Option>
            <Select.Option value="firstmaster">Спортын I зэрэг</Select.Option>
            <Select.Option value="internteam">Олон улсын тэмцээн</Select.Option>
            <Select.Option value="countryteam">Улсын хэмжээний тэмцээн</Select.Option>
            <Select.Option value="insideteam">Хот, бүс, сургуулийн тэмцээн</Select.Option>
            <Select.Option value="nomaster">Медальт байранд шалгараагүй</Select.Option>
            <Select.Option value="universitymaster">Улсын чанартай их сургуулийн шагналт байр</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary" className="bg-sky-600">бүртгэх</Button>
        </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Plus6;