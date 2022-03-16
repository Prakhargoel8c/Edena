import { Form } from 'antd';
import React, { useState } from 'react';
import { CheckOutlined } from '@ant-design/icons';
import Logo from './Logo';
import Steps from './Steps';
import { Step, OkStep } from '../types/Step';
import './StepForm.scss';

const StepForm: React.FC<{ steps: Step[]; nextStepText: string; okStep: OkStep }> = ({ steps, nextStepText, okStep }) => {
  const [currentStep, setCurrentStep] = useState<number>(3);
  const [values, setValues] = useState<Object>({});
  const [form] = Form.useForm();
  const isOkStep = currentStep === steps.length + 1;
  const saveStep = (stepValues: Object) => {
    setValues({ ...values, ...stepValues });
    setCurrentStep(currentStep + 1);
  };
  const submitStep = () => form.submit();
  return (
    <div className="step-form">
      <Logo />
      <Steps currentStep={currentStep} stepCount={steps.length + 1} />
      <div className="form-wrapper">
        {isOkStep && (
          <div className="ok-wrapper">
            <span className="ok-icon">
              <CheckOutlined />
            </span>
            <div className="ok-headings">
              <h1 className="heading">{okStep.heading}</h1>
              <h4 className="sub-heading">{okStep.subHeading}</h4>
            </div>
          </div>
        )}
        {isOkStep || (
          <>
            <h1 className="heading">{steps[currentStep - 1].heading}</h1>
            <h4 className="sub-heading">{steps[currentStep - 1].subHeading}</h4>
            <div className="form-content">
              {React.createElement(steps[currentStep - 1].formComponent, {
                form,
                submit: saveStep,
                intialValues: steps[currentStep - 1].intialValues,
              })}
            </div>
          </>
        )}
        <div className="submit-wrapper">
          <button className="submit" onClick={isOkStep ? okStep.onOk?.() : submitStep}>
            {isOkStep ? okStep.okText : nextStepText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepForm;
