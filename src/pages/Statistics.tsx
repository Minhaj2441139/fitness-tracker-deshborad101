
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import CategoryFilter from '@/components/CategoryFilter';
import StatisticsChart from '@/components/StatisticsChart';
import { Calendar, TrendingUp, Activity, Dumbbell, Heart } from 'lucide-react';

const Statistics = () => {
  // Mock user profile data
  const userProfile = {
    name: 'Richard Jones',
    age: 28,
    gender: 'Male',
    height: 185,
    weight: 176,
    achievement: 'Expert',
  };

  const [activeFilter, setActiveFilter] = useState('All');

  // Mock stats data
  const summaryStats = [
    {
      title: 'Avg. Daily Steps',
      value: '8,743',
      trend: '+12%',
      trendUp: true,
      icon: <Activity className="h-6 w-6" />
    },
    {
      title: 'Calories Burned',
      value: '2,842',
      trend: '+8%',
      trendUp: true,
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: 'Workouts Completed',
      value: '18',
      trend: '+5%',
      trendUp: true,
      icon: <Dumbbell className="h-6 w-6" />
    },
    {
      title: 'Avg. Heart Rate',
      value: '72 bpm',
      trend: '-3%',
      trendUp: false,
      icon: <Heart className="h-6 w-6" />
    }
  ];

  // Filter categories
  const categories = [
    { name: 'All', color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { name: 'Steps', color: 'text-green-600', bgColor: 'bg-green-100' },
    { name: 'Calories', color: 'text-orange-600', bgColor: 'bg-orange-100' },
    { name: 'Workouts', color: 'text-purple-600', bgColor: 'bg-purple-100' },
    { name: 'Heart Rate', color: 'text-red-600', bgColor: 'bg-red-100' }
  ];

  // Create mock data for the chart
  const chartData = [
    { name: 'Jan', exercise: 400, meals: 240, sleep: 180 },
    { name: 'Feb', exercise: 300, meals: 139, sleep: 220 },
    { name: 'Mar', exercise: 200, meals: 980, sleep: 190 },
    { name: 'Apr', exercise: 280, meals: 390, sleep: 200 },
    { name: 'May', exercise: 180, meals: 480, sleep: 210 },
    { name: 'Jun', exercise: 600, meals: 380, sleep: 260 },
    { name: 'Jul', exercise: 700, meals: 430, sleep: 290 },
  ];

  // Map active filter to active categories for the chart
  const getActiveCategories = () => {
    if (activeFilter === 'All') return ['exercise', 'meals', 'sleep'];
    if (activeFilter === 'Steps') return ['exercise'];
    if (activeFilter === 'Calories') return ['meals'];
    if (activeFilter === 'Workouts') return ['exercise'];
    if (activeFilter === 'Heart Rate') return ['sleep'];
    return ['exercise'];
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar userProfile={userProfile} />
      <div className="flex-1 p-8">
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Statistics</h1>
            <p className="text-gray-600 mt-2">Track your fitness progress over time</p>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
            <Calendar size={18} className="text-gray-500" />
            <span className="text-sm font-medium">Last 30 days</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {summaryStats.map((stat, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500 mb-1">{stat.title}</p>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                </div>
                <div className="p-3 bg-blue-50 rounded-full">
                  {stat.icon}
                </div>
              </div>
              <div className={`mt-4 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                stat.trendUp ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {stat.trend} vs last period
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex flex-wrap gap-3 mb-6">
            {categories.map(category => (
              <CategoryFilter 
                key={category.name}
                category={category.name}
                color={category.color}
                bgColor={category.bgColor}
                isActive={activeFilter === category.name}
                onClick={() => setActiveFilter(category.name)}
              />
            ))}
          </div>
          
          <div className="h-80">
            <StatisticsChart 
              data={chartData} 
              activeCategories={getActiveCategories()} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
