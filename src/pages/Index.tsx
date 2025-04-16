
import React from 'react';
import Sidebar from '@/components/Sidebar';
import Dashboard from '@/components/Dashboard';

const Index = () => {
  // Mock user profile data
  const userProfile = {
    name: 'Richard Jones',
    age: 28,
    gender: 'Male',
    height: 185,
    weight: 176,
    achievement: 'Expert',
  };

  // Mock fitness data
  const currentDate = new Date();
  const exerciseData = { current: 5, total: 10 };
  const mealsData = { current: 4, total: 6, calories: 1634.0 };
  const sleepData = { current: 7, total: 8, minimum: 8 };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar userProfile={userProfile} />
      <Dashboard 
        currentDate={currentDate}
        goal="Build Muscles"
        exerciseData={exerciseData}
        mealsData={mealsData}
        sleepData={sleepData}
      />
    </div>
  );
};

export default Index;
