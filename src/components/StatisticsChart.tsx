
import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';

interface DataPoint {
  name: string;
  exercise?: number;
  meals?: number;
  sleep?: number;
}

interface StatisticsChartProps {
  data: DataPoint[];
  activeCategories: string[];
}

const StatisticsChart: React.FC<StatisticsChartProps> = ({ data, activeCategories }) => {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="exerciseGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#33C3F0" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#33C3F0" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="mealsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#F56B79" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#F56B79" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="sleepGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4CD964" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#4CD964" stopOpacity={0}/>
            </linearGradient>
          </defs>
          
          {activeCategories.includes('exercise') && (
            <Area 
              type="monotone" 
              dataKey="exercise" 
              stroke="#33C3F0" 
              fillOpacity={1} 
              fill="url(#exerciseGradient)" 
              strokeWidth={2}
              activeDot={{ r: 6 }}
            />
          )}
          
          {activeCategories.includes('meals') && (
            <Area 
              type="monotone" 
              dataKey="meals" 
              stroke="#F56B79" 
              fillOpacity={1} 
              fill="url(#mealsGradient)" 
              strokeWidth={2}
              activeDot={{ r: 6 }}
            />
          )}
          
          {activeCategories.includes('sleep') && (
            <Area 
              type="monotone" 
              dataKey="sleep" 
              stroke="#4CD964" 
              fillOpacity={1} 
              fill="url(#sleepGradient)" 
              strokeWidth={2}
              activeDot={{ r: 6 }}
            />
          )}
          
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatisticsChart;
