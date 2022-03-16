import React from 'react';
import './Steps.scss';

const Steps: React.FC<{ stepCount: number; currentStep: number }> = ({ stepCount, currentStep }) => {
  const renderSteps = () => {
    const steps: JSX.Element[] = [];
    for (let index: number = 1; index <= stepCount; index++) {
      steps.push(
        <div className={`stepper-item ${currentStep === index ? 'active' : currentStep > index ? 'completed' : ''}`} key={index}>
          <div className="step-counter">{index}</div>
        </div>
      );
    }
    return steps;
  };
  return (
    <div className="stepper">
      <div className="stepper-wrapper">{renderSteps()}</div>
    </div>
  );
};

export default Steps;
