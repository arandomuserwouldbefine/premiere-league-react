export function getCurrentGameweek(startDate: string, weekLengthDays = 7): number {
    const start = new Date(startDate);
    const today = new Date();
  
    start.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
  
    const diffDays = Math.floor(
      (today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
    );
  
    return Math.floor(diffDays / weekLengthDays) + 1;
  }
  