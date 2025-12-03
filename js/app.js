// ShoreSquad App JS
// TODO: Integrate map and weather APIs

document.addEventListener('DOMContentLoaded', () => {
  // Join Crew button interactivity
  const joinBtn = document.getElementById('join-crew');
  joinBtn.addEventListener('click', () => {
    alert('Welcome to the crew!');
    // Future: Add crew logic here
  });

  // Placeholder for weather
  document.getElementById('weather').textContent = 'Weather info will appear here.';
});
