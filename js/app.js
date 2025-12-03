// ShoreSquad App JS
// TODO: Integrate map and weather APIs

document.addEventListener('DOMContentLoaded', () => {
  // Join Crew button interactivity
  const joinBtn = document.getElementById('join-crew');
  joinBtn.addEventListener('click', () => {
    alert('Welcome to the crew!');
    // Future: Add crew logic here
  });

  // Fetch and display 4-day weather forecast for Singapore (Pasir Ris)
  fetch('https://api.data.gov.sg/v1/environment/4-day-weather-forecast')
    .then(response => response.json())
    .then(data => {
      const area = 'Pasir Ris';
      const forecasts = data.items[0].forecasts;
      const areaForecast = forecasts.find(f => f.area === area);
      let html = '<div class="forecast-list">';
      if (areaForecast) {
        html += `<div><strong>${areaForecast.area}</strong></div>`;
        html += `<div>${areaForecast.forecast}</div>`;
      } else {
        html += '<div>Forecast not available for Pasir Ris.</div>';
      }
      html += '</div>';
      // 4-day summary
      html += '<hr><div><strong>4-Day Outlook:</strong></div>';
      data.items[0].periods.forEach(period => {
        html += `<div style="margin-bottom:0.5em;"><strong>${period.date}</strong>: ${period.forecast}</div>`;
      });
      document.getElementById('weather').innerHTML = html;
    })
    .catch(() => {
      document.getElementById('weather').textContent = 'Unable to load weather forecast.';
    });
});
