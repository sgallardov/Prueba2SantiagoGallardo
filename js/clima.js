$(document).ready(function() {
    $('.menu-icon').click(function() {
        $('.nav-list').toggleClass('showing');
    });

    async function getWeather() {
        const apiKey = 'dd9a2d525fc64dd09f0173747242905'; // Reemplaza 'YOUR_API_KEY' con tu clave de la API
        const url = `https://api.weatherapi.com/v1/forecast.json?key=dd9a2d525fc64dd09f0173747242905&q=Ancud&days=10&lang=es`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            const weatherContainer = $('#weather');

            data.forecast.forecastday.forEach(day => {
                const dayDiv = $(`
                    <div class="weather-day">
                        <p>${day.date}</p>
                        <p>${day.day.condition.text}</p>
                        <p>Temp: ${day.day.avgtemp_c}°C</p>
                    </div>
                `);
                weatherContainer.append(dayDiv);
            });
        } catch (error) {
            console.error('Error fetching weather data:', error);
            $('#weather').html('<p>Error al obtener los datos del clima.</p>');
        }
    }

    getWeather();
}); 