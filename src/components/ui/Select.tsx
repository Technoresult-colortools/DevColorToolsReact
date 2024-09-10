// src/components/ui/select.tsx
import React from 'react';

interface SelectProps {
  id?: string;
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
  children: React.ReactNode;
}

const Select: React.FC<SelectProps> = ({ id, value, onValueChange, className, children }) => {
  return (
    <select
      id={id}
      value={value}
      onChange={(e) => onValueChange(e.target.value)}
      className={`p-2 rounded border ${className}`}
    >
      {children}
    </select>
  );
};

const Option: React.FC<{ value: string }> = ({ value, children }) => {
  return <option value={value}>{children}</option>;
};

Select.Option = Option;

export default Select;
