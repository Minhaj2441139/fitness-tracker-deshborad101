import React, { useState } from 'react';
import { format } from 'date-fns';
import { Bell, RefreshCw, ChevronLeft, ChevronRight, Monitor, Utensils, Clock } from 'lucide-react';
import CircularProgress from './CircularProgress';
import StatisticsChart from './StatisticsChart';
import CategoryFilter from './CategoryFilter';
import { Button } from '@/components/ui/button';
import TrackingCardSelector from './TrackingCardSelector';
import MedicalIndices from './MedicalIndices';
import { toast } from '@/hooks/use-toast';

interface DashboardProps {
  currentDate: Date;
  goal: string;
  exerciseData: { current: number; total: number };
  mealsData: { current: number; total: number; calories: number };
  sleepData: { current: number; total: number; minimum: number };
}

const Dashboard: React.FC<DashboardProps> = ({
  currentDate,
  goal,
  exerciseData: initialExerciseData,
  mealsData: initialMealsData,
  sleepData: initialSleepData
}) => {
  const [activeCategories, setActiveCategories] = useState<string[]>(['exercise', 'meals', 'sleep']);
  const [exerciseData, setExerciseData] = useState(initialExerciseData);
  const [mealsData, setMealsData] = useState(initialMealsData);
  const [sleepData, setSleepData] = useState(initialSleepData);
  
  const toggleCategory = (category: string) => {
    if (activeCategories.includes(category)) {
      setActiveCategories(activeCategories.filter(c => c !== category));
    } else {
      setActiveCategories([...activeCategories, category]);
    }
  };

  const handleTrackingCardSelect = (cardId: string) => {
    // Toggle the card selection
    toggleCategory(cardId);
    
    // Show toast notification
    const cardLabels: Record<string, string> = {
      'exercise': 'Exercise tracking',
      'meals': 'Meal tracking',
      'sleep': 'Sleep tracking'
    };
    
    const isSelected = !activeCategories.includes(cardId);
    toast({
      title: isSelected ? `${cardLabels[cardId]} enabled` : `${cardLabels[cardId]} disabled`,
      description: isSelected 
        ? `You will now see ${cardLabels[cardId].toLowerCase()} in your statistics.`
        : `You will no longer see ${cardLabels[cardId].toLowerCase()} in your statistics.`,
      variant: isSelected ? "default" : "destructive",
    });
  };

  const handleValueChange = (cardId: string, increment: boolean) => {
    if (cardId === 'exercise') {
      const newValue = increment 
        ? Math.min(exerciseData.current + 1, exerciseData.total)
        : Math.max(exerciseData.current - 1, 0);
      
      setExerciseData({...exerciseData, current: newValue});
      
      if (newValue === exerciseData.total && increment) {
        toast({ title: "Goal achieved!", description: "You've completed your exercise goal for today!" });
      }
    } 
    else if (cardId === 'meals') {
      const newValue = increment 
        ? Math.min(mealsData.current + 1, mealsData.total)
        : Math.max(mealsData.current - 1, 0);
      
      setMealsData({...mealsData, current: newValue});
      
      if (newValue === mealsData.total && increment) {
        toast({ title: "Goal achieved!", description: "You've completed your meals goal for today!" });
      }
    } 
    else if (cardId === 'sleep') {
      const newValue = increment 
        ? Math.min(sleepData.current + 1, sleepData.total)
        : Math.max(sleepData.current - 1, 0);
      
      setSleepData({...sleepData, current: newValue});
      
      if (newValue === sleepData.total && increment) {
        toast({ title: "Goal achieved!", description: "You've reached your sleep goal!" });
      }
    }
  };

  // Sample data for the chart
  const statisticsData = [
    { name: 'Week 1', exercise: 65, meals: 70, sleep: 80 },
    { name: 'Week 2', exercise: 72, meals: 75, sleep: 82 },
    { name: 'Week 3', exercise: 68, meals: 78, sleep: 79 },
    { name: 'Week 4', exercise: 76, meals: 73, sleep: 85 },
    { name: 'Week 5', exercise: 82, meals: 80, sleep: 87 },
    { name: 'Week 6', exercise: 85, meals: 82, sleep: 88 },
  ];

  // User metrics for medical indices
  const userHeight = 185; // cm
  const userWeight = 176; // kg

  const dayNumber = format(currentDate, 'd');
  const weekNumber = Math.ceil(parseInt(dayNumber) / 7);
  const monthAndYear = format(currentDate, 'MMMM, yyyy');
  
  // Tracking cards data
  const trackingCards = [
    {
      id: 'exercise' as const,
      current: exerciseData.current,
      total: exerciseData.total,
      label: 'Exercise',
      sublabel: `${exerciseData.current}/${exerciseData.total}`,
      color: '#33C3F0',
      icon: <Monitor size={20} className="text-blue-500" />,
      bgColor: 'bg-blue-50'
    },
    {
      id: 'meals' as const,
      current: mealsData.current,
      total: mealsData.total,
      label: 'Meals',
      sublabel: `${mealsData.calories} cal`,
      color: '#F56B79',
      icon: <Utensils size={20} className="text-pink-500" />,
      bgColor: 'bg-pink-50'
    },
    {
      id: 'sleep' as const,
      current: sleepData.current,
      total: sleepData.total,
      label: 'Sleep',
      sublabel: `${sleepData.minimum} hours minimum`,
      color: '#4CD964',
      icon: <Clock size={20} className="text-green-500" />,
      bgColor: 'bg-green-50'
    }
  ];

  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">TRACK <span className="font-normal">FITNESS</span></h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-blue-500 font-medium">DAY {dayNumber}, WEEK {weekNumber}</p>
            <p className="text-gray-700">Today, {format(currentDate, 'do MMMM, yyyy')}</p>
          </div>
          <Button variant="outline" size="icon" className="rounded-full">
            <ChevronLeft size={16} />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <ChevronRight size={16} />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-500 relative">
            <Bell size={20} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-500">
            <RefreshCw size={20} />
          </Button>
        </div>
      </div>
      
      <div className="mb-8">
        <p className="text-gray-500 uppercase mb-1">GOAL</p>
        <h2 className="text-2xl font-bold">{goal}</h2>
      </div>
      
      {/* Medical Indices Section */}
      <MedicalIndices height={userHeight} weight={userWeight} />
      
      {/* Progress Section - Now using TrackingCardSelector with value controls */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Tracking</h3>
          <p className="text-sm text-gray-500">Select items to track</p>
        </div>
        <TrackingCardSelector 
          cards={trackingCards}
          selectedCards={activeCategories}
          onSelectCard={handleTrackingCardSelect}
          onValueChange={handleValueChange}
        />
      </div>
      
      {/* Statistics Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-gray-500 uppercase">STATISTICS</span>
            <span className="text-gray-400 ml-2">- Last Month</span>
          </div>
          <Button variant="link" className="text-blue-500">
            DETAILED VIEW
          </Button>
        </div>
        
        <StatisticsChart data={statisticsData} activeCategories={activeCategories} />
        
        <div className="flex gap-3 mt-4">
          <CategoryFilter 
            category="Exercise" 
            color="text-blue-500" 
            bgColor="bg-blue-50"
            isActive={activeCategories.includes('exercise')} 
            onClick={() => toggleCategory('exercise')} 
          />
          
          <CategoryFilter 
            category="Meals" 
            color="text-pink-500" 
            bgColor="bg-pink-50"
            isActive={activeCategories.includes('meals')} 
            onClick={() => toggleCategory('meals')} 
          />
          
          <CategoryFilter 
            category="Sleep" 
            color="text-green-500" 
            bgColor="bg-green-50"
            isActive={activeCategories.includes('sleep')} 
            onClick={() => toggleCategory('sleep')} 
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
