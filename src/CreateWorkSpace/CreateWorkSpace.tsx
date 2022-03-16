import React, { useState } from 'react';
import StepForm from '../StepForm';
import { OkStep, Step } from '../types/Step';
import { Workspace } from '../types/Workspace';
import NameStep from './NameStep';
import UseStep from './UseStep';
import WorkSpaceStep from './WorkSpaceStep';

const CreateWorkSpace: React.FC = () => {
  const [value, setValue] = useState<Workspace>({});
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
    heading: `Congratulations, ${value.displayName}`,
    subHeading: `You have completed onboarding, you can start using the Eden`,
    okText: 'Launch Eden',
  };
  return <StepForm steps={steps} nextStepText="Create Workspace" okStep={okStep} value={value} setValue={setValue} />;
};

export default CreateWorkSpace;
