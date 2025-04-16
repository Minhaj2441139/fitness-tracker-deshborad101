
import React from 'react';
import Sidebar from '@/components/Sidebar';

const Goals = () => {
  // Mock user profile data
  const userProfile = {
    name: 'Richard Jones',
    age: 28,
    gender: 'Male',
    height: 185,
    weight: 176,
    achievement: 'Expert',
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar userProfile={userProfile} />
      <div className="flex-1 p-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">My Goals</h1>
          <p className="text-gray-600 mt-2">Track and manage your fitness goals</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Current Goals</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h3 className="font-medium">Build Muscles</h3>
                <p className="text-sm text-gray-600">Target: Increase strength by 15% in 3 months</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                  <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">45% completed</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="font-medium">Lose Weight</h3>
                <p className="text-sm text-gray-600">Target: Lose 5kg in 2 months</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                  <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">60% completed</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <h3 className="font-medium">Improve Endurance</h3>
                <p className="text-sm text-gray-600">Target: Run 10km without stopping</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                  <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '30%' }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">30% completed</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Add New Goal</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Goal Title</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  placeholder="e.g. Gain Muscle Mass"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea 
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  rows={3}
                  placeholder="Describe your goal"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Target Value</label>
                  <input 
                    type="number" 
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    placeholder="10"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Unit</label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                    <option>kg</option>
                    <option>km</option>
                    <option>steps</option>
                    <option>minutes</option>
                    <option>%</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Target Date</label>
                <input 
                  type="date" 
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
              >
                Add Goal
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
