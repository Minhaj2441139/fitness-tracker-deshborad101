
import React from 'react';
import Sidebar from '@/components/Sidebar';
import { Award, Medal, Trophy, ArrowUp } from 'lucide-react';

const Achievements = () => {
  // Mock user profile data
  const userProfile = {
    name: 'Richard Jones',
    age: 28,
    gender: 'Male',
    height: 185,
    weight: 176,
    achievement: 'Expert',
  };

  // Mock achievements data
  const achievements = [
    {
      id: 1,
      title: 'Early Bird',
      description: 'Complete 10 workouts before 8 AM',
      progress: 100,
      completed: true,
      date: '2025-03-15',
      icon: <Award className="h-8 w-8 text-yellow-500" />,
    },
    {
      id: 2,
      title: 'Marathon Runner',
      description: 'Run a total of 42.2 kilometers',
      progress: 100,
      completed: true,
      date: '2025-03-28',
      icon: <Trophy className="h-8 w-8 text-yellow-500" />,
    },
    {
      id: 3,
      title: 'Weight Warrior',
      description: 'Lift 1000 kg in a single workout session',
      progress: 75,
      completed: false,
      icon: <Medal className="h-8 w-8 text-gray-400" />,
    },
    {
      id: 4,
      title: 'Consistency King',
      description: 'Work out for 30 days in a row',
      progress: 60,
      completed: false,
      icon: <Award className="h-8 w-8 text-gray-400" />,
    },
    {
      id: 5,
      title: 'Hydration Hero',
      description: 'Drink 3 liters of water every day for 14 days',
      progress: 40,
      completed: false,
      icon: <Trophy className="h-8 w-8 text-gray-400" />,
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar userProfile={userProfile} />
      <div className="flex-1 p-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Achievements</h1>
          <p className="text-gray-600 mt-2">Track your fitness milestones</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Completed Achievements</h2>
            
            <div className="space-y-6">
              {achievements
                .filter(achievement => achievement.completed)
                .map(achievement => (
                  <div key={achievement.id} className="flex items-start gap-4 bg-yellow-50 p-4 rounded-lg">
                    <div className="mt-1">{achievement.icon}</div>
                    <div>
                      <h3 className="font-medium text-lg">{achievement.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-yellow-500 h-2 rounded-full" 
                          style={{ width: `${achievement.progress}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">Completed on {achievement.date}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-6">In Progress</h2>
            
            <div className="space-y-6">
              {achievements
                .filter(achievement => !achievement.completed)
                .map(achievement => (
                  <div key={achievement.id} className="flex items-start gap-4 p-4 rounded-lg border border-gray-200">
                    <div className="mt-1">{achievement.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-medium text-lg">{achievement.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full" 
                          style={{ width: `${achievement.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between mt-2">
                        <p className="text-xs text-gray-500">{achievement.progress}% completed</p>
                        <div className="flex items-center text-xs text-blue-600 font-medium">
                          <ArrowUp className="h-3 w-3 mr-1" />
                          <span>+5% this week</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
