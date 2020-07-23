import React from 'react';
import * as styles from './Radio.styles';

const Radio: React.FC<{
  className?: string;
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange(value: string): void;
}> = ({ className, name, value, label, checked, onChange }) => (
  <div>
    <styles.Input
      type="radio"
      id={value}
      name={name}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      checked={checked}
    />
    <styles.Label htmlFor={value} className={className} isChecked={checked}>
      {label}
    </styles.Label>
  </div>
);

export default Radio;
