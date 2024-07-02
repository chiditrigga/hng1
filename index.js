document.addEventListener('DOMContentLoaded', () => {
    const utcTimeElement = document.getElementById('utcTime');
    const currentDayElement = document.getElementById('currentDay');
  
    function updateTimeAndDay() {
      const now = new Date();
      utcTimeElement.textContent = now.toUTCString().slice(17, 25); // Extract HH:MM:SS
      currentDayElement.textContent = now.toLocaleString('en-US', { weekday: 'long' });
    }
  
    updateTimeAndDay();
    setInterval(updateTimeAndDay, 1000);
  });
  