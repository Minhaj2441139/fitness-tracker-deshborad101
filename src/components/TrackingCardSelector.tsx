
import React from 'react';
import { Monitor, Utensils, Clock, PlusCircle, MinusCircle } from 'lucide-react';
import CircularProgress from './CircularProgress';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface TrackingCard {
  id: 'exercise' | 'meals' | 'sleep';
  current: number;
  total: number;
  label: string;
  sublabel: string;
  color: string;
  icon: React.ReactNode;
  bgColor: string;
}

interface TrackingCardSelectorProps {
  cards: TrackingCard[];
  selectedCards: string[];
  onSelectCard: (id: string) => void;
  onValueChange?: (id: string, increment: boolean) => void;
}

const TrackingCardSelector: React.FC<TrackingCardSelectorProps> = ({
  cards,
  selectedCards,
  onSelectCard,
  onValueChange
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card) => (
        <Card 
          key={card.id}
          className={cn(
            "transition-all duration-300 cursor-pointer hover:scale-105",
            card.bgColor,
            selectedCards.includes(card.id) ? 'ring-2 ring-offset-2' : 'opacity-85'
          )}
          onClick={() => onSelectCard(card.id)}
        >
          <CardContent className="p-6 flex flex-col items-center">
            <CircularProgress 
              value={card.current} 
              maxValue={card.total} 
              color={card.color}
              label={card.label}
              sublabel={card.sublabel}
            />
            <div className="mt-4 flex items-center text-gray-700">
              {card.icon}
              <span className="ml-2">{card.label}</span>
            </div>
            
            {onValueChange && (
              <div className="mt-4 flex items-center space-x-3" onClick={(e) => e.stopPropagation()}>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-8 w-8 rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    onValueChange(card.id, false);
                  }}
                  disabled={card.current <= 0}
                >
                  <MinusCircle size={16} />
                </Button>
                <span className="text-sm font-medium">{card.current}</span>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-8 w-8 rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    onValueChange(card.id, true);
                  }}
                  disabled={card.current >= card.total}
                >
                  <PlusCircle size={16} />
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TrackingCardSelector;
