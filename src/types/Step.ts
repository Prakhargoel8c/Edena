import { FormInstance } from 'antd';
import React from 'react';

export type StepFormComponent = React.FC<{ form: FormInstance; submit: (values: Object) => void; intialValues?: Object }>;
export type Step = { heading: string; subHeading: string; formComponent: StepFormComponent; intialValues?: Object };
export type OkStep = { heading: string; subHeading: string; okText: string; onOk?: Function };
