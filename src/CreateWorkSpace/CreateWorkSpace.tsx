import React from 'react';
import StepForm from '../StepForm';
import { OkStep, Step } from '../types/Step';
import NameStep from './NameStep';
import UseStep from './UseStep';
import WorkSpaceStep from './WorkSpaceStep';

const CreateWorkSpace: React.FC = () => {
  const steps: Step[] = [
    { heading: 'Welcome! First things first...', subHeading: 'You can always change them later.', formComponent: NameStep },
    { heading: "Let's set up a home for all your work", subHeading: 'You can always create another workspace later.', formComponent: WorkSpaceStep },
    {
      heading: 'How are you planning to use Eden?',
      subHeading: "We'll streamline your setup experince accordingly",
      formComponent: UseStep,
      intialValues: { userType: 0 },
    },
  ];
  const okStep: OkStep = {
    heading: 'Congratulations, Eren',
    subHeading: 'You have completed onboarding, you can start using the Eden',
    okText: 'Launch Eden',
  };
  return <StepForm steps={steps} nextStepText="Create Workspace" okStep={okStep} />;
};

export default CreateWorkSpace;
