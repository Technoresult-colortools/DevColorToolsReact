import React, { useState, useRef, useEffect } from 'react';

interface SliderProps {
  id?: string;  
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
  className?: string;
}

const Slider: React.FC<SliderProps> = ({ min, max, step, value, onChange, className = '' }) => {
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const percentage = ((value - min) / (max - min)) * 100;

  const handleMouseDown = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (isDragging && sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const percentage = Math.min(Math.max(x / rect.width, 0), 1);
      const newValue = Math.round((percentage * (max - min) + min) / step) * step;
      onChange(newValue);
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      ref={sliderRef}
      className={`relative h-2 bg-gray-700 rounded-full cursor-pointer ${className}`}
      onMouseDown={handleMouseDown}
    >
      <div
        className="absolute h-full bg-blue-600 rounded-full"
        style={{ width: `${percentage}%` }}
      />
      <div
        className="absolute w-4 h-4 bg-white rounded-full shadow -mt-1 -ml-2"
        style={{ left: `${percentage}%` }}
      />
    </div>
  );
};

export default Slider;