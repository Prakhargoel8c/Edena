import { Form, Input } from 'antd';
import { StepFormComponent } from '../../types/Step';
import './NameStep.scss';
const NameStep: StepFormComponent = ({ form, submit }) => {
  return (
    <Form className="name-step" form={form} layout="vertical" onFinish={submit} requiredMark={false}>
      <Form.Item name="name" label="Full Name" rules={[{ required: true, message: 'Please input your name!' }]}>
        <Input placeholder="Steve Jobs" />
      </Form.Item>
      <Form.Item name="displayName" label="Display Name" rules={[{ required: true, message: 'Please input your display name!' }]}>
        <Input placeholder="Steve" />
      </Form.Item>
    </Form>
  );
};

export default NameStep;
