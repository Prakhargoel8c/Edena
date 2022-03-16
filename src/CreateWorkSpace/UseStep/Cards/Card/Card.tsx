import React from 'react';
import './Card.scss';
const Card: React.FC<{
  heading: string;
  description: string;
  imagePath: string;
  value: number;
  currentValue?: number;
  onChange?: (value: number) => void;
}> = ({ heading, description, imagePath, value, currentValue, onChange }) => {
  return (
    <div
      className={`card ${value === currentValue ? 'active' : ''}`}
      role="button"
      onClick={() => {
        onChange?.(value);
      }}
    >
      <img src={imagePath} className="card-image" alt={heading} />
      <span className="card-header">{heading}</span>
      <span className="card-description">{description}</span>
    </div>
  );
};

export default Card;
