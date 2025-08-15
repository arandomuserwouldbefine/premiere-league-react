import React from "react";

interface GameweekNumberProps {
  startDate: string; // e.g. "2025-08-01"
  weekLengthDays?: number; // default 7 days
}

export const GameweekNumber: React.FC<GameweekNumberProps> = ({
  startDate,
  weekLengthDays = 7,
}) => {
  const getCurrentGameweek = () => {
    const start = new Date(startDate);
    const today = new Date();

    start.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const diffDays = Math.floor(
      (today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
    );

    return Math.floor(diffDays / weekLengthDays) + 1;
  };

  return <>{getCurrentGameweek()}</>;
};
