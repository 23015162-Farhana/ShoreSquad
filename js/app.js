// ShoreSquad App JS
// TODO: Integrate map and weather APIs

document.addEventListener('DOMContentLoaded', () => {
  // Join Crew button interactivity
  const joinBtn = document.getElementById('join-crew');
  joinBtn.addEventListener('click', () => {
    alert('Welcome to the crew!');
    // Future: Add crew logic here
  });

  // Fetch and display general 4-day weather forecast for Singapore
  fetch('https://api.data.gov.sg/v1/environment/4-day-weather-forecast')
    .then(response => response.json())
    .then(data => {
      const periods = data.items[0].periods;
      let html = '<div class="forecast-list">';
      periods.forEach(period => {
        html += `<div style="margin-bottom:1em; padding:0.5em; background:#e3f2fd; border-radius:6px;">
          <strong>${period.date}</strong><br>
          <span>${period.forecast}</span>
        </div>`;
      });
      html += '</div>';
      document.getElementById('weather').innerHTML = html;
    })
    .catch(() => {
      document.getElementById('weather').textContent = 'Unable to load weather forecast.';
    });
});
