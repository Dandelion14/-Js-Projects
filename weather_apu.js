  let main= document.getElementById("city-name")
        let user_city = document.getElementById("country");
        let btn = document.getElementById("btn");
        let showcity = document.getElementById("city");
        let countrystn = document.getElementById("countrystand");
        let temp = document.getElementsByClassName("temp")[0];
        let speed = document.getElementsByClassName("windspeed")[0];
        let city_weather = document.getElementById("city-weather");
        let coordinates = document.getElementById("city-coordinates");
        let city, simple;
        btn.addEventListener("click", () => {
            if (user_city.value.trim() === "") {
                alert("Enter your city");
            } else {
                city = user_city.value;
                weather();
            }
        });
        async function weather() {
            let data = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}YOUR_API_KEY`
            );
            simple = await data.json();
            console.log(simple);
            showcity.innerText = simple.name;
            countrystn.innerText = simple.sys.country;
            let celsius = (simple.main.temp - 273.15).toFixed(1);
            temp.innerText = `${celsius} °C`;
            speed.innerText = `${simple.wind.speed} m/s`;
            let weatherStatus = simple.weather[0].main;
            city_weather.innerText = weatherStatus;
            coordinates.innerText = `Lat: ${simple.coord.lat}, Lon: ${simple.coord.lon}`;
            main.style.display="block"
            if (weatherStatus === "Mist") {
                mis.style.display="block"   
            }
        }