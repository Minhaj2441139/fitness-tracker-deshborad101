
import React from 'react';
import Sidebar from '@/components/Sidebar';
import { CalendarIcon, Clock } from 'lucide-react';

const Schedule = () => {
  // Mock user profile data
  const userProfile = {
    name: 'Richard Jones',
    age: 28,
    gender: 'Male',
    height: 185,
    weight: 176,
    achievement: 'Expert',
  };

  // Mock schedule data
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const scheduleItems = [
    { day: 'Monday', activities: [
      { time: '06:00 AM', name: 'Morning Run', duration: '30 min', type: 'cardio' },
      { time: '07:00 PM', name: 'Upper Body Workout', duration: '45 min', type: 'strength' }
    ]},
    { day: 'Tuesday', activities: [
      { time: '06:30 AM', name: 'Yoga', duration: '45 min', type: 'flexibility' }
    ]},
    { day: 'Wednesday', activities: [
      { time: '06:00 AM', name: 'Morning Run', duration: '30 min', type: 'cardio' },
      { time: '07:00 PM', name: 'Lower Body Workout', duration: '45 min', type: 'strength' }
    ]},
    { day: 'Thursday', activities: [
      { time: '06:30 AM', name: 'Rest Day', duration: '-', type: 'rest' }
    ]},
    { day: 'Friday', activities: [
      { time: '06:00 AM', name: 'HIIT Workout', duration: '20 min', type: 'cardio' },
      { time: '07:00 PM', name: 'Core Workout', duration: '30 min', type: 'strength' }
    ]},
    { day: 'Saturday', activities: [
      { time: '09:00 AM', name: 'Long Run', duration: '60 min', type: 'cardio' }
    ]},
    { day: 'Sunday', activities: [
      { time: 'All Day', name: 'Rest Day', duration: '-', type: 'rest' }
    ]}
  ];

  const getActivityTypeColor = (type) => {
    switch (type) {
      case 'cardio': return 'bg-red-100 text-red-800 border-red-200';
      case 'strength': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'flexibility': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'rest': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar userProfile={userProfile} />
      <div className="flex-1 p-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Weekly Schedule</h1>
          <p className="text-gray-600 mt-2">Plan your workouts and stay on track</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <CalendarIcon className="text-blue-600" />
              <h2 className="text-xl font-semibold">April 8 - April 14, 2025</h2>
            </div>
            <div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
                Add Activity
              </button>
            </div>
          </div>
          
          <div className="space-y-6">
            {scheduleItems.map((day) => (
              <div key={day.day} className="border-b border-gray-100 pb-4 last:border-0">
                <h3 className="font-medium text-lg mb-2">{day.day}</h3>
                <div className="space-y-3">
                  {day.activities.map((activity, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-24 flex items-center gap-2">
                        <Clock size={16} className="text-gray-400" />
                        <span className="text-sm text-gray-600">{activity.time}</span>
                      </div>
                      <div className={`flex-1 p-3 rounded-lg border ${getActivityTypeColor(activity.type)}`}>
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-medium">{activity.name}</h4>
                            <span className="text-sm text-gray-600">Duration: {activity.duration}</span>
                          </div>
                          <div>
                            <span className="text-xs px-2 py-1 rounded-full bg-white">{activity.type}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
