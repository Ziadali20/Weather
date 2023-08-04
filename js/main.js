var city='Cairo'    
async function  weather()
{


    var x= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=e7d3fa1715ab4b739f8160753230308&q=${city}&days=3`);
    let finalWeather=await x.json() 
    let date = new Date(finalWeather.forecast.forecastday[0].date)
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let dayNumber = date.getDate();
    let dayName = dayNames[date.getDay()];
    let monthName = monthNames[date.getMonth()];
    let currentWeather={
        dayName:dayName,
        dayNumber:dayNumber,
        monthName:monthName,
        regionName:finalWeather.location.name,
        temp:finalWeather.current.temp_c,
        icon:"https://"+finalWeather.current.condition.icon,
        condition:finalWeather.current.condition.text,
        chanceOfRain:finalWeather.forecast.forecastday[0].day.daily_chance_of_rain+"%",
        windSpeed:finalWeather.current.wind_kph,
        windDirection:finalWeather.current.wind_dir,
    }
    let tomorrow={
        icon:"https://"+finalWeather.forecast.forecastday[1].day.condition.icon,
        max:finalWeather.forecast.forecastday[1].day.maxtemp_c,
        min:finalWeather.forecast.forecastday[1].day.mintemp_c,
        condition:finalWeather.forecast.forecastday[1].day.condition.text
    }
    let afterTomorrow={
        icon:"https://"+finalWeather.forecast.forecastday[2].day.condition.icon,
        max:finalWeather.forecast.forecastday[2].day.maxtemp_c,
        min:finalWeather.forecast.forecastday[2].day.mintemp_c,
        condition:finalWeather.forecast.forecastday[2].day.condition.text
    }

    document.querySelector('.today').innerHTML=`

    <div class="">
    <div class="d-flex justify-content-between">
    <p>${currentWeather.dayName}</p>
    <p>${currentWeather.dayNumber} ${currentWeather.monthName}</p>
    </div>
    <p>${currentWeather.regionName}</p>
    <div class="d-flex justify-content-around align-items-center">
    <p class='deg'>${currentWeather.temp}<sup>o</sup>C</p>
    <img src="${currentWeather.icon}"class='w-25'>
    </div>
    <p class='condition'>${currentWeather.condition}</p>
    <div class="d-flex stat">
    <p class='me-3'><i class="fa-solid fa-umbrella mx-1"></i>${currentWeather.chanceOfRain}</p>
    <p class='me-3'><i class="fa-solid fa-wind mx-1"></i>${currentWeather.windSpeed}</p>
    <p class='me-3'><i class="fa-solid fa-compass mx-1"></i>${currentWeather.windDirection}</p>
    </div>
  </div>

    `
    document.querySelector('.tomorrow').innerHTML=`
    <div class='text-center'>
    <img src="${tomorrow.icon}" class=''>
    <p class='fs-5 fw-bold'>${tomorrow.max}<sup>o</sup>C</p>
    <p>${tomorrow.min}<sup>o</sup>C</p>
    <p class='condition'>${tomorrow.condition}</p>
    </div>
    `
    document.querySelector('.afterTomorrow').innerHTML=`
    <div class='text-center'>
    <img src="${afterTomorrow.icon}" class=''>
    <p class='fs-5 fw-bold'>${afterTomorrow.max}<sup>o</sup>C</p>
    <p>${afterTomorrow.min}<sup>o</sup>C</p>
    <p class='condition'>${afterTomorrow.condition}</p>
    </div>
    `
}
weather()
function search() {
    if(document.getElementById('search').value!=null)
    {
        city=document.getElementById('search').value;
    }
    console.log(city);
    weather()
}
