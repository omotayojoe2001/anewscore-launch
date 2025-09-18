import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
  onComplete?: () => void;
}

const CountdownTimer = ({ targetDate, onComplete }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        onComplete?.();
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Calculate immediately on mount
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  return (
    <div className="flex justify-center items-center gap-8 md:gap-12">
      <div className="text-center">
        <div className="text-6xl md:text-8xl font-bold text-accent mb-2">
          {timeLeft.days.toString().padStart(2, '0')}
        </div>
        <div className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">
          Days
        </div>
      </div>
      
      <div className="text-4xl md:text-6xl font-bold text-muted-foreground">:</div>
      
      <div className="text-center">
        <div className="text-6xl md:text-8xl font-bold text-accent mb-2">
          {timeLeft.hours.toString().padStart(2, '0')}
        </div>
        <div className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">
          Hours
        </div>
      </div>
      
      <div className="text-4xl md:text-6xl font-bold text-muted-foreground">:</div>
      
      <div className="text-center">
        <div className="text-6xl md:text-8xl font-bold text-accent mb-2">
          {timeLeft.minutes.toString().padStart(2, '0')}
        </div>
        <div className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">
          Minutes
        </div>
      </div>
      
      <div className="text-4xl md:text-6xl font-bold text-muted-foreground">:</div>
      
      <div className="text-center">
        <div className="text-6xl md:text-8xl font-bold text-accent mb-2">
          {timeLeft.seconds.toString().padStart(2, '0')}
        </div>
        <div className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">
          Seconds
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;