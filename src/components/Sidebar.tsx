
import React from 'react';
import { User, Home, Target, Calendar, Award, BarChart2, Settings, ChevronRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface UserProfile {
  name: string;
  age: number;
  gender: string;
  height: number;
  weight: number;
  achievement?: string;
}

interface SidebarProps {
  userProfile: UserProfile;
}

const Sidebar: React.FC<SidebarProps> = ({ userProfile }) => {
  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Target, label: 'My goals', path: '/goals' },
    { icon: Calendar, label: 'Schedule', path: '/schedule' },
    { icon: Award, label: 'Achievements', path: '/achievements' },
    { icon: BarChart2, label: 'Statistics', path: '/statistics' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="w-64 min-h-screen bg-white border-r border-gray-100 flex flex-col">
      {/* User Profile */}
      <div className="p-6 flex flex-col items-center border-b border-gray-100">
        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-4">
          <User size={40} className="text-gray-400" />
        </div>
        <h2 className="text-lg font-bold">{userProfile.name}</h2>
        <p className="text-gray-500 text-sm">{userProfile.gender}, {userProfile.age} years</p>
        
        <div className="grid grid-cols-2 gap-4 w-full mt-4">
          <div className="text-center">
            <p className="text-xs text-gray-500">HEIGHT</p>
            <p className="font-bold">{userProfile.height} <span className="text-xs font-normal">cm</span></p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-500">WEIGHT</p>
            <p className="font-bold">{userProfile.weight} <span className="text-xs font-normal">kg</span></p>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <NavLink 
                to={item.path}
                className={({ isActive }) => 
                  `flex items-center px-4 py-3 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
              >
                <item.icon size={20} className="mr-3" />
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Achievement Banner */}
      {userProfile.achievement && (
        <div className="m-4 p-4 bg-blue-500 rounded-lg text-white">
          <p className="font-bold text-center mb-1">CONGRATULATIONS!</p>
          <p className="text-sm text-center">
            You have unlocked the "{userProfile.achievement}" level.
          </p>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
