
import React from 'react';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface MedicalIndicesProps {
  height: number; // in cm
  weight: number; // in kg
}

const MedicalIndices: React.FC<MedicalIndicesProps> = ({ height, weight }) => {
  // Calculate BMI: weight (kg) / height^2 (m)
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  const roundedBMI = Math.round(bmi * 10) / 10;
  
  // Calculate BMR (Basal Metabolic Rate) using Mifflin-St Jeor Equation
  // Assuming the user is male and 28 years old (from mock data)
  const age = 28;
  const isMale = true;
  const bmr = isMale
    ? 10 * weight + 6.25 * height - 5 * age + 5
    : 10 * weight + 6.25 * height - 5 * age - 161;
  const roundedBMR = Math.round(bmr);

  // Calculate Body Fat Percentage (estimated using BMI)
  // This is a rough estimation and not medically accurate
  const bodyFatPercentage = isMale
    ? (1.20 * bmi) + (0.23 * age) - 16.2
    : (1.20 * bmi) + (0.23 * age) - 5.4;
  const roundedBodyFat = Math.round(bodyFatPercentage * 10) / 10;

  // Determine BMI category and its color
  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { category: 'Underweight', color: '#F59E0B', textColor: 'text-amber-500' };
    if (bmi < 25) return { category: 'Normal', color: '#10B981', textColor: 'text-green-500' };
    if (bmi < 30) return { category: 'Overweight', color: '#F97316', textColor: 'text-orange-500' };
    return { category: 'Obese', color: '#EF4444', textColor: 'text-red-500' };
  };
  
  const bmiStatus = getBMICategory(bmi);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        Medical Indices
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="ml-2">
                <Info size={16} className="text-gray-400" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xs">These are estimated values based on your height and weight</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* BMI Card */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-medium">BMI</h4>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button>
                    <Info size={14} className="text-gray-400" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">Body Mass Index: Weight (kg) / Height² (m)</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">{roundedBMI}</span>
            <span className="text-sm text-gray-500">kg/m²</span>
          </div>
          <div className={`text-sm mt-1 ${bmiStatus.textColor}`}>
            {bmiStatus.category}
          </div>
          <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full" 
              style={{ 
                width: `${Math.min(100, (bmi / 40) * 100)}%`, 
                backgroundColor: bmiStatus.color
              }}
            ></div>
          </div>
        </div>
        
        {/* BMR Card */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-medium">BMR</h4>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button>
                    <Info size={14} className="text-gray-400" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">Basal Metabolic Rate: Calories burned at rest</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">{roundedBMR}</span>
            <span className="text-sm text-gray-500">calories/day</span>
          </div>
          <div className="text-sm mt-1 text-blue-500">
            Daily Energy Needs
          </div>
          <div className="mt-2 text-xs text-gray-500">
            Calories needed for basic functions
          </div>
        </div>
        
        {/* Body Fat Percentage Card */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-medium">Body Fat</h4>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button>
                    <Info size={14} className="text-gray-400" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">Estimated body fat percentage based on BMI</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">{roundedBodyFat}</span>
            <span className="text-sm text-gray-500">%</span>
          </div>
          <div className="text-sm mt-1 text-purple-500">
            {isMale ? 
              (roundedBodyFat < 15 ? 'Athletic' : roundedBodyFat < 20 ? 'Fitness' : 'Average') :
              (roundedBodyFat < 22 ? 'Athletic' : roundedBodyFat < 28 ? 'Fitness' : 'Average')
            }
          </div>
          <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-purple-500 rounded-full" 
              style={{ 
                width: `${Math.min(100, roundedBodyFat * 2)}%`
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalIndices;
