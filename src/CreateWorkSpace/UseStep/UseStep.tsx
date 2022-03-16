import { Form } from 'antd';
import React from 'react';
import { StepFormComponent } from '../../types/Step';
import Cards from './Cards';

const UseStep: StepFormComponent = ({ form, submit, intialValues }) => {
  return (
    <Form className="user-step" form={form} layout="vertical" onFinish={submit} initialValues={intialValues}>
      <Form.Item name="userType">
        <Cards />
      </Form.Item>
    </Form>
  );
};

export default UseStep;
