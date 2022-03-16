import { Form, Input } from 'antd';
import { StepFormComponent } from '../../types/Step';
import './WorkSpaceStep.scss';
const WorkSpaceStep: StepFormComponent = ({ form, submit }) => {
  return (
    <Form className="work-step" form={form} layout="vertical" onFinish={submit} requiredMark="optional">
      <Form.Item name="workspace" label="Workspace Name" rules={[{ required: true, message: 'Please input your workspace name!' }]}>
        <Input placeholder="Eden" />
      </Form.Item>
      <Form.Item name="workspaceUrl" label="Workspace Url">
        <Input placeholder="Example" addonBefore="www.eden.com/" />
      </Form.Item>
    </Form>
  );
};

export default WorkSpaceStep;
