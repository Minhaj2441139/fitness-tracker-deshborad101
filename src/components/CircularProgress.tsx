
import React, { useEffect, useRef } from 'react';

interface CircularProgressProps {
  value: number;
  maxValue: number;
  size?: number;
  strokeWidth?: number;
  color: string;
  label: string;
  sublabel: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  value,
  maxValue,
  size = 120,
  strokeWidth = 8,
  color,
  label,
  sublabel
}) => {
  const progressRef = useRef<SVGCircleElement>(null);
  const percentage = (value / maxValue) * 100;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const dash = (percentage * circumference) / 100;

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.strokeDasharray = `${dash} ${circumference - dash}`;
      progressRef.current.style.transition = 'stroke-dasharray 0.5s ease-in-out';
    }
  }, [dash, circumference, value]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative" style={{ width: size, height: size }}>
        {/* Background circle */}
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#E5E5E5"
            strokeWidth={strokeWidth}
          />
          {/* Progress circle */}
          <circle
            ref={progressRef}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={`0 ${circumference}`}
            strokeLinecap="round"
          />
        </svg>
        <div 
          className="absolute inset-0 flex flex-col items-center justify-center"
        >
          <span className="text-3xl font-bold">{value}</span>
          <span className="text-xs text-gray-500">/{maxValue}</span>
        </div>
      </div>
      <div className="mt-3 text-center">
        <h3 className="text-lg font-semibold">{label}</h3>
        <p className="text-sm text-gray-500">{sublabel}</p>
      </div>
    </div>
  );
};

export default CircularProgress;
