// ShoreSquad App JS
// TODO: Integrate map and weather APIs

document.addEventListener('DOMContentLoaded', () => {
  // Join Crew button interactivity
  const joinBtn = document.getElementById('join-crew');
  joinBtn.addEventListener('click', () => {
    alert('Welcome to the crew!');
    // Future: Add crew logic here
  });

  // Fetch and display the actual 4-day weather forecast for Singapore
  // Map forecast keywords to emoji icons
  function getWeatherIcon(forecast) {
    const f = forecast.toLowerCase();
    if (f.includes('thunder')) return '⛈️';
    if (f.includes('showers') || f.includes('rain')) return '🌧️';
    if (f.includes('cloud')) return '☁️';
    if (f.includes('fair') || f.includes('sunny')) return '☀️';
    return '🌡️';
  }

  fetch('https://api.data.gov.sg/v1/environment/4-day-weather-forecast')
    .then(response => response.json())
    .then(data => {
      const items = data.items && data.items[0];
      const forecasts = items && items.forecasts;
      let html = '';
      if (forecasts && forecasts.length > 0) {
        html += '<div class="forecast-list">';
        forecasts.forEach(forecast => {
          const icon = getWeatherIcon(forecast.forecast);
          html += `<div style="margin-bottom:1em; padding:0.5em; background:#e3f2fd; border-radius:6px; display:flex; align-items:center; gap:0.75em;">
            <span style="font-size:2em;">${icon}</span>
            <div><strong>${forecast.date}</strong><br>
            <span>${forecast.forecast}</span></div>
          </div>`;
        });
        html += '</div>';
      } else {
        html = 'Weather forecast not available.';
      }
      document.getElementById('weather').innerHTML = html;
    })
    .catch(() => {
      document.getElementById('weather').textContent = 'Unable to load weather forecast.';
    });
});
