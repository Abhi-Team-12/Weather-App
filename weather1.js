const apikey = "8b718b4d2935b7625fe3a17cf8ced283";


function getweather() {
    const city = document.getElementById('city-input').value;
    const weatherDetails = document.getElementById('weatherdetails');
    if (city === '') {
        weatherDetails.innerHTML = '<p>Pleace enter a city name</p>';
        return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod == '404') {
                weatherDetails.innerHTML = '<p>City no found Please try again</p>'
            } else {
                console.log("data is here", data)
                weatherDetails.innerHTML = `<h2>${data.name},${data.sys.country}</h2>
                <p>Temparature:${data.main.temp}</p>
                <p>Temparature Max:${data.main.temp_max}</p>`;
            }

        })
        .catch(error => {
            weatherDetails.innerHTML = '<p>Error Fetching Data</p>';
        });
}