
import React, { Suspense } from 'react';
import Sidebar from '@/components/Sidebar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, User, Shield, Smartphone, Palette } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import FitnessModel from '@/components/3D/FitnessModel';

const Settings = () => {
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
          <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
          <p className="text-gray-600 mt-2">Customize your app experience</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm">
              <Tabs defaultValue="account">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="account" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>Account</span>
                  </TabsTrigger>
                  <TabsTrigger value="notifications" className="flex items-center gap-2">
                    <Bell className="h-4 w-4" />
                    <span>Notifications</span>
                  </TabsTrigger>
                  <TabsTrigger value="privacy" className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    <span>Privacy</span>
                  </TabsTrigger>
                  <TabsTrigger value="devices" className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4" />
                    <span>Devices</span>
                  </TabsTrigger>
                  <TabsTrigger value="appearance" className="flex items-center gap-2">
                    <Palette className="h-4 w-4" />
                    <span>Appearance</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="account" className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input 
                          type="text" 
                          className="w-full border border-gray-300 rounded-md px-3 py-2"
                          defaultValue="Richard"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input 
                          type="text" 
                          className="w-full border border-gray-300 rounded-md px-3 py-2"
                          defaultValue="Jones"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        defaultValue="richard.jones@example.com"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                        <input 
                          type="number" 
                          className="w-full border border-gray-300 rounded-md px-3 py-2"
                          defaultValue="28"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Height (cm)</label>
                        <input 
                          type="number" 
                          className="w-full border border-gray-300 rounded-md px-3 py-2"
                          defaultValue="185"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Weight (kg)</label>
                        <input 
                          type="number" 
                          className="w-full border border-gray-300 rounded-md px-3 py-2"
                          defaultValue="176"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                      <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Non-binary</option>
                        <option>Prefer not to say</option>
                      </select>
                    </div>
                    <div className="pt-4">
                      <button 
                        type="submit" 
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </TabsContent>

                <TabsContent value="notifications" className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                      <div>
                        <h3 className="font-medium">Workout Reminders</h3>
                        <p className="text-sm text-gray-600">Receive notifications before scheduled workouts</p>
                      </div>
                      <div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" checked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                      <div>
                        <h3 className="font-medium">Goal Updates</h3>
                        <p className="text-sm text-gray-600">Receive notifications about goal progress</p>
                      </div>
                      <div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" checked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                      <div>
                        <h3 className="font-medium">Achievement Unlocks</h3>
                        <p className="text-sm text-gray-600">Receive notifications when you unlock achievements</p>
                      </div>
                      <div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" checked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                      <div>
                        <h3 className="font-medium">App Updates</h3>
                        <p className="text-sm text-gray-600">Receive notifications about new features and updates</p>
                      </div>
                      <div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="privacy" className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Privacy Settings</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Data Sharing</h3>
                      <p className="text-sm text-gray-600 mb-3">Choose what data you want to share</p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input id="privacy-1" type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                          <label htmlFor="privacy-1" className="ml-2 text-sm">Share workout activity with friends</label>
                        </div>
                        <div className="flex items-center">
                          <input id="privacy-2" type="checkbox" className="w-4 h-4 text-blue-600 rounded" checked />
                          <label htmlFor="privacy-2" className="ml-2 text-sm">Share achievements publicly</label>
                        </div>
                        <div className="flex items-center">
                          <input id="privacy-3" type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                          <label htmlFor="privacy-3" className="ml-2 text-sm">Allow anonymous data collection for app improvement</label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <h3 className="font-medium mb-2">Account Visibility</h3>
                      <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                        <option>Public - Anyone can view your profile</option>
                        <option>Friends Only - Only friends can view your profile</option>
                        <option>Private - Only you can view your profile</option>
                      </select>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="devices" className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Connected Devices</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                      <div className="flex items-center">
                        <div className="h-10 w-10 bg-blue-100 flex items-center justify-center rounded-full mr-3">
                          <Smartphone className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">iPhone 14 Pro</h3>
                          <p className="text-xs text-gray-500">Connected since April 5, 2025</p>
                        </div>
                      </div>
                      <button className="text-sm text-red-600 hover:text-red-800">Disconnect</button>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                      <div className="flex items-center">
                        <div className="h-10 w-10 bg-blue-100 flex items-center justify-center rounded-full mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                            <path d="M16 2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"></path>
                            <path d="M12 18h.01"></path>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium">Fitness Watch X3</h3>
                          <p className="text-xs text-gray-500">Connected since March 10, 2025</p>
                        </div>
                      </div>
                      <button className="text-sm text-red-600 hover:text-red-800">Disconnect</button>
                    </div>
                    
                    <button className="w-full mt-4 flex items-center justify-center gap-2 border border-dashed border-gray-300 rounded-lg p-3 text-gray-500 hover:text-blue-600 hover:border-blue-300 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                      Connect New Device
                    </button>
                  </div>
                </TabsContent>
                
                <TabsContent value="appearance" className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Appearance Settings</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-3">Theme</h3>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="border border-blue-500 rounded-lg p-3 flex flex-col items-center">
                          <div className="h-12 w-full mb-2 bg-white border border-gray-200 rounded"></div>
                          <span className="text-sm font-medium">Light</span>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-3 flex flex-col items-center">
                          <div className="h-12 w-full mb-2 bg-gray-800 border border-gray-700 rounded"></div>
                          <span className="text-sm">Dark</span>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-3 flex flex-col items-center">
                          <div className="h-12 w-full mb-2 bg-gradient-to-r from-white to-gray-800 border border-gray-200 rounded"></div>
                          <span className="text-sm">System</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-3">Accent Color</h3>
                      <div className="flex gap-3">
                        <button className="h-8 w-8 rounded-full bg-blue-500 ring-2 ring-offset-2 ring-blue-500"></button>
                        <button className="h-8 w-8 rounded-full bg-green-500"></button>
                        <button className="h-8 w-8 rounded-full bg-purple-500"></button>
                        <button className="h-8 w-8 rounded-full bg-red-500"></button>
                        <button className="h-8 w-8 rounded-full bg-amber-500"></button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 h-96">
            <h2 className="text-xl font-semibold mb-4">Interactive Fitness Model</h2>
            <div className="h-80 w-full">
              <Suspense fallback={<div className="flex items-center justify-center h-full">Loading 3D model...</div>}>
                <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[10, 10, 5]} intensity={1} />
                  <FitnessModel />
                  <OrbitControls enableZoom={true} />
                </Canvas>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
