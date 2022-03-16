import React from 'react';
import Card from './Card';

import './Cards.scss';
const Cards: React.FC<{ value: number; onChange: (value: number) => void }> = ({ value, onChange }) => {
  return (
    <div className="card-wrapper">
      <Card
        imagePath={`${process.env.PUBLIC_URL}assets/user.png`}
        heading="For myself"
        description="Write better.Think more clearly.Stay organized"
        value={0}
        currentValue={value}
        onChange={onChange}
      />
      <Card
        imagePath={`${process.env.PUBLIC_URL}assets/group.png`}
        heading="With my team"
        description="Wikis,docs,tasks & projects all in one place"
        value={1}
        currentValue={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Cards;
