export const generateDays = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date().getDay();
    const next7Days = [];
  
    for (let i = 0; i < 7; i++) {
      next7Days.push(days[(today + i) % 7]);
    }
  
    return next7Days;
  };
